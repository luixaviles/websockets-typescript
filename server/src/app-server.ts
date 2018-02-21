import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';

import { Message } from './model/message';
import { MessageGenerator } from './message-generator';

export class AppServer {
    public static readonly PORT:number = 3000;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;

    private generator: MessageGenerator = new MessageGenerator();

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || AppServer.PORT;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);

            let interval = setInterval(() =>{
                const message = this.generator.generateMessage();
                console.log('sending message: ' + JSON.stringify(message));
                this.io.emit('message', message);
            }, 1000);

            socket.on('disconnect', () => {
                console.log('Client disconnected');
                clearInterval(interval);
            });
        });
    }

    public getApp(): express.Application {
        return this.app;
    }
}

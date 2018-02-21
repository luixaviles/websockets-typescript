import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/model/message';
import { SocketService } from '../shared/services/socket.service';

@Component({
  selector: 'wsc-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];
  ioConnection: any;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.initSocketConnection();
  }

  private initSocketConnection(): void {
    this.socketService.initSocket();

    this.socketService.onMessage()
      .subscribe((message: Message) => {
        console.log('received message', message);
        this.messages.push(message);
        if(message.content === 'finished') {
          console.log('Finishing communication');
          this.socketService.stop();
        }
      });

    this.socketService.onEvent('connect')
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent('disconnect')
      .subscribe(() => {
        console.log('disconnected');
      });
  }
}

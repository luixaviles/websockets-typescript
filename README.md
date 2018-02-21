# Using WebSockets through TypeScript language

Server and Client prototype using WebSockets and TypeScript language.

# Running project locally
## Prerequisites

Make sure you have the following installed:

* Node.js
* Git
* Angular CLI

## Clone repository

```bash
git clone https://github.com/luixaviles/websockets-typescript
cd websockets-typescript
```

# Run Node.js Server

To run server locally, just install dependencies using `npm` or `yarn`.

```bash
cd server
npm install
npm run webpack
npm run start
```

The `socket.io` server will be running on port `3000`

# Run Angular Client

Open other command line window and run the following commands:

```bash
cd client
npm install
ng serve -o
```

Your default browser will be opened in [http://localhost:4200](http://localhost:4200/)

## License

MIT


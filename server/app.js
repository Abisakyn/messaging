const express=require ('express');
const dotenv =require ('dotenv');
const mongoose=require ('mongoose')
const WebSocket = require('ws');
const router = require('./routes/router');


dotenv.config();

const app= express();

app.use(express.json());

app.use('/app',router)


// const wss = new WebSocket.Server({port: process.env.WEBSOCKET_PORT});

// wss.on('connection', function connection(ws) {
//   // Send notification to connected clients
//   ws.send(JSON.stringify({ type: 'Notification', message: 'New message!' }));
// });


// Set up WebSocket server
const wss = new WebSocket.Server({ port: process.env.WEBSOCKET_PORT });

wss.on('connection', function connection(ws) {
  console.log('WebSocket client connected');

  // Send notification to connected client when a new message is received
  ws.on('message', async function incoming(message) {
    //ws.send(JSON.stringify({ type: 'Notification', message: 'New message!' }));
    console.log('Teleafya:', message);
    // Here you can handle different types of messages if needed
    // For example, you might use a specific message type to trigger sending notifications to clients
  });
});






mongoose.connect(process.env.MONGO_URL2)
.then(()=>app.listen(process.env.PORT))
.then(()=>console.log(`CONNECTED AND LISTENING TO PORT ${process.env.PORT}`))





const express=require ('express');
const dotenv =require ('dotenv');
const mongoose=require ('mongoose')
const WebSocket = require('ws');


dotenv.config();

const app= express();

app.use(express.json());


const wss = new WebSocket.Server({port: process.env.WEBSOCKET_PORT});

wss.on('connection', function connection(ws) {
  // Send notification to connected clients
  ws.send(JSON.stringify({ type: 'Notification', message: 'New message!' }));
});


mongoose.connect(process.env.MONGO_URL2)
.then(()=>app.listen(process.env.PORT))
.then(()=>console.log(`CONNECTED AND LISTENING TO PORT ${process.env.PORT}`))





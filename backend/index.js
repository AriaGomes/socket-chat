const express = require('express');
const app = express();
const PORT = 4000;

//New imports
const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

const socketIO = require('socket.io')(http, {
  cors: {
      origin: "*"
  }
});

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  console.log(socketIO.sockets.adapter.rooms);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

//get users connected
app.get('/api/users', (req, res) => {
  res.json({
    users: socketIO.sockets.adapter.rooms,
  });
});


http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
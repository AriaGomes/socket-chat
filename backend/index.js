const express = require('express');
const app = express();
const { instrument } = require("@socket.io/admin-ui");
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

let currentUsers = [];


//Add this before the app.get() block
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  
  // Add user to currentUsers
  currentUsers.push(socket.id);
  // emit new list of users
  socket.emit('users', currentUsers);

  socket.on('disconnect', () => {
    console.log(`⚡: ${socket.id} user just disconnected!`);
    // Remove user from currentUsers
    currentUsers = currentUsers.filter(id => id !== socket.id);
    // emit new list of users
    socket.emit('users', currentUsers);
  });
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

//get users connected
app.get('/api/users', (req, res) => {
  res.json(
    { ids: currentUsers}
  );
});




instrument(socketIO, {
  auth: false,
  //mode: "development"
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
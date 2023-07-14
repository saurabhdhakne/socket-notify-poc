const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Set up a route for socket connection
app.get('/notify', (req, res) => {
  // Emit a socket event called 'notification' with the message
  io.emit('notification', 'Hello, client! This is a notification from the server.');
  res.send('Notification sent');
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


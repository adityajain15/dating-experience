// Create server
let port = process.env.PORT || 8000;
let express = require('express');
let app = express();
let server = require('http').createServer(app).listen(port, function () {
  console.log('Server listening at port: ', port);
});

// Tell server where to look for files
app.use(express.static('public'));

// Create socket connection
let io = require('socket.io').listen(server);

// Clients in the output namespace
/*var outputs = io.of('/output');
// Listen for output clients to connect
outputs.on('connection', function(socket){
  // add this output client to the game
  game.addOutputClient(socket)
  // send this output client a list of all current output clients (which includes itself)
  outputs.emit('outputClients', game.getOutputClients())
  // send this output client a list of all current input clients
  socket.emit('inputClients', game.getInputClients())

  // Listen for this output client to disconnect
  socket.on('disconnect', function() {
    console.log("An output client has disconnected " + socket.id);
    game.removeOutputClient(socket.id)
    // send the remaining output clients a notification that this output client has dropped out
    outputs.emit('outputClients', game.getOutputClients())
  });
});
*/
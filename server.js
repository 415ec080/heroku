//var app = require('express')();
var http = require('http');//.Server(app);
var io = require('socket.io')(http);
var x=http.createServer(function(req,res){
    res.writeHead(200);
    res.end("hai");
     io();
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('A user connected');

   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

x.listen(3000, function() {
   console.log('listening on *:3000');
});
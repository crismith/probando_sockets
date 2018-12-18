var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 6677;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/chat-privado', function(req, res){
	res.send('este sera un chat super privado');
	// res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.on('chat_message_send', function(msg){
		io.emit('chat_message', msg);
	});
});

server.listen(port, function(){
	console.log('puerto usando:' + port);
});

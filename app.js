const app = require('./config/server');
const port = 3000;
const address = 'localhost';

const server = require('http').createServer(app);
const io = require('socket.io')(server);

let messages = [];

io.on('connection', sokect => {
    console.log('usuario conenctado : ' + sokect.id);

    sokect.emit('previousMessage', messages);

    sokect.on('sendMessage', data => {
        console.log(data);
        messages.push(data);
        sokect.broadcast.emit('receivedMessage', data);

    });
});

server.listen(port, address, function () {
    console.log("Servidor ON");
});

module.exports = io;
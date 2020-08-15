module.exports = function(app){
    app.get('/chatPublic', function(req,res){
        res.render('chat/chatPublic');

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

        // Salvando menssagens no banco de dados:
        conn.query("INSERT INTO messages(message) VALUES ('" + data + "')", function(error, result){
          
        });
    });
});
    });
}
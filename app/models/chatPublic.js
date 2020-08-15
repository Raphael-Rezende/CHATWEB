const moongose = require('mongoose');
const { Timestamp } = require('mongodb');

const Schema = moongose.Schema;

const ChatPublicShema = new Schema({
    nome: String,
    mensage: String,
    datahora: Timestamp,
     
});

module.exports = moongose.model('chatPublic', ChatPublicShema);
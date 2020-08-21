const mongoose = require('mongoose');
//const { Timestamp } = require('mongodb');
const Schema = mongoose.Schema;

//const Schema = moongose.Schema;
mongoose.connect('mongodb://localhost:27017/ChatWeb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const UserSchema = new Schema({
    nome: String
   
    //datahora: Timestamp,
     
}, { collection: 'Users' });

module.exports = { mongoose, UserSchema }
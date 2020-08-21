 const moongose = require('mongoose');
const { MongoClient } = require('mongodb');

moongose.connect('mongodb://localhost:27017/Chatweb', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});



module.exports = moongose;


const moongose = require('mongoose');

moongose.connect('mongodb://localhost:27017/Chatweb', {
    useMongoClient: true
});

module.exports = moongose;
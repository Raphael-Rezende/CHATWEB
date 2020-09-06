module.exports.chatPublic = function(app, req, res){
    if(req.session.authorized){
        res.render('chat/chatPublic', {});
        }else{
            res.redirect('/login');
        }
}

//const chatPublicModel = require('../models/chatPublic');
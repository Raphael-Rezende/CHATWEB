const auth = require('../routes/middleware/auth');

module.exports = function (app) {

    app.get('/chatPublic', function(req, res){

        app.app.controllers.chatPublic.chatPublic(app, req, res);
    });


    /*
    app.get('/chatPublic',  function (req, res, next) {

        
        //const { user } = req.body
        //res.render('chat/chatPublic', {user: user });
    });

    */

}
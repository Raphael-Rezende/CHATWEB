

module.exports = function(app){

    app.get('/login', function(req, res){

        app.app.controllers.User.login(app, req, res);
    });

    app.post('/validator', function(req, res){
        app.app.controllers.User.validator(app, req, res);
    });

    app.get('/register_user', function(req, res){
        app.app.controllers.User.register_user(app, req, res);
    }); 

    app.post('/signup', function(req, res){
        app.app.controllers.User.signup(app, req, res);
    });

    app.get('/read_user', function(req, res){
        app.app.controllers.User.read_user(app, req, res);
    }); 

    
}
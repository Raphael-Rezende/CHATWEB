module.exports = function(app){

    app.get('/login', function(req, res){
        app.app.controllers.user.login(app, req, res);
    });

    app.post('/validator', function(req, res){
        app.app.controllers.user.validator(app, req, res);
    });

    app.get('/register_user', function(req, res){
        app.app.controllers.user.register_user(app, req, res);
    }); 

    app.post('/signup', function(req, res){
        app.app.controllers.user.signup(app, req, res);
    });

    app.get('/read_user', function(req, res){
        app.app.controllers.user.read_user(app, req, res);
    }); 

    
}
module.exports = function(app){
    app.get('/', function(req,res){
        res.render('login/login');
    });

    app.post('/aunth', function(req, res){
        
    })
}
const { JsonWebTokenError } = require("jsonwebtoken");

module.exports.login = function(app, req, res){
    res.render('user/login', {});
}

module.exports.validator = function(app, req, res){
    const dbUser = require('../models/User');
    const User = dbUser.mongoose.model('Users', dbUser.UserSchema, 'Users');
    const { user } = req.body;
    const user_db = User.find({nome : user} , (err, users) => {
        if (err) return console.log(err);
       //res.json(users);
    });

    if(req.body === user_db){
        //auth ok
        const form_id = User.findById(id); //esse id viria do banco de dados
        const token = jwt.sign({ form_id }, process.env.SECRET, {
          expiresIn: 300 // expires in 5min
        });

        return res.json({ auth: true, token: token });
      }else{
          res.status(500).json({message: 'Login inválido!'});
      }

      
}

module.exports.register_user = function(app, req, res){

    res.render('user/register_user', {});

}

module.exports.signup = function(app, req, res){

    const dbUser = require('../models/User');
    const User = dbUser.mongoose.model('Users', dbUser.UserSchema, 'Users');
    const { user } = req.body;
    const user_db = User.find({nome : user} , (err, users) => {
        if (err) return console.log(err);
       //res.json(users);
    });

 

}

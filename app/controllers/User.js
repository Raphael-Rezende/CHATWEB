//const jwt = require("jsonwebtoken");
const { MongoClient } = require("mongodb");

module.exports.login = function(app, req, res){
  
    res.render('user/login', {});
}

module.exports.validator = function(app, req, res){
    const dbUser = require('../models/User');
    const User = dbUser.mongoose.model('Users', dbUser.UserSchema, 'Users');
    const { user, password } = req.body;
    //console.log(req.body);
    User.findOne({nome : user} , (err, users) => {
        if (err) return console.log(err);
        //res.json(users);
 
         if(users){
            req.session.authorized = true;
            req.session.usuario = users;
            if(req.session.authorized)
                res.redirect('/chatPublic');
             
         }else{
             res.status(400).json({message: 'Usuário não encontrado!'});
         }

         
         if(users.password != password)
             res.status(400).json({message: 'Senha inválida!'});
 
         
        
        
         
         
         
    });
    

       
    


    /*
    User.findOne({nome : user} , (err, users) => {
        if (err) return console.log(err);
       //res.json(users);

        if(!users)
            res.status(400).json({message: 'Usuário não encontrado!'});
       
        console.log(password);
        if(users.password != password)
            res.status(400).json({message: 'Senha inválida!'});

        const token = jwt.sign({ users }, process.env.SECRET, {
           expiresIn: 300 // expires in 5min
        });

        
        res.redirect('/chatPublic')
      
        //return res.status(200).json({ auth: true, user: users, token: token });                          
     

    });

    */

      
}

module.exports.register_user = function(app, req, res){

    res.render('user/register_user', {});

}

module.exports.signup = function(app, req, res){

    const dbUser = require('../models/User');
    const User = dbUser.mongoose.model('Users', dbUser.UserSchema, 'Users');
    const { user, password } = req.body;
    User.findOne({nome : user} , (err, users) => {
        if (err) 
            res.status(500).json({ message: "Erro ao buscar informações de usuário!"});

        if(users){           
            if(users.nome == user )
                res.status(400).json({message: "Usuário já cadastrado!"})
            
        }

    
        const item = {  
            nome: user,
            password : password
        };  

        const data = new User(item);  
        data.save();
        res.redirect('/login');
        return;

    });

      
    
}

module.exports.read_user = function(app, req, res){
    const dbUser = require('../models/User');
    const User = dbUser.mongoose.model('Users', dbUser.UserSchema, 'Users');
    User.find({} , (err, users) => {
        if (err) return console.log(err);
       res.json(users);
    }); 

   

    

}

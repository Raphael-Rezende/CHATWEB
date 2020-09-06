

/*
const jwt = require('jsonwebtoken');

module.exports = {

 verifyJWT(req, res, next){
     console.log(res.headers)
     const token = req.header['x-access-token'] ? req.header['x-access-token'] : req.header['Authorization'];

    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(400).json({ auth: false, message: 'Failed to authenticate token.' });

      // se tudo estiver ok, salva no request para uso posterior
      req.body.user = decoded.users;
      next();
    });
}
}
*/
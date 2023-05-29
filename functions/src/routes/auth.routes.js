const controller = require('../controllers/auth.controllers');

module.exports = (app) => {
      app.use(function(_, res, next){
            res.header("Access-Contol-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

            next();
      });

      app.post('/auth/login', controller.login);
      app.post('/auth/signup', controller.signup);
}
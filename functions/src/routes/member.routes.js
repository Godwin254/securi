const controller = require('../controllers/members.controllers');

module.exports = (app) => {
      app.use(function(req, res, next){
            res.header("Access-Contol-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

            next();
      });

      app.get('/members/', controller.allMembers);
      app.get('/members/:id', controller.singleMember);
      app.put('/members/:id', controller.updateMember);
      app.delete('/members/:id', controller.deleteMember);
}
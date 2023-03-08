const controller = require('../controllers/user.controllers');
const members = require('../controllers/members.controllers')

module.exports = (app) => {
      app.use(function(req, res, next){
            res.header("Access-Contol-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

            next();
      });

      //user operations
      app.get('/users/', controller.allUsers);
      app.get('/users/:id', controller.singleUser);
      app.patch('/users/:id', controller.updateUser);
      app.delete('/users/:id', controller.deleteUser);

      //member operations
      app.get('/users/:id/members', members.allMembers);
      app.get('/users/:id/members/mId', members.singleMember);
      app.post('/users/:id/members', members.createMember);
      app.patch('/users/:id/members/mId', members.updateMember);
      app.delete('/users/:id/members/mId', members.deleteMember);


}
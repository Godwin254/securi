const controller = require('../controllers/resident.controllers');
const {authToken} = require('../middleware/authToken')

module.exports = (app) => {
      app.use(function(req, res, next){
            res.header("Access-Contol-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

            next();
      });

      //user operations
      app.get('/residents/', controller.allResidents);
      app.get('/residents/:residentId',[authToken], controller.singleResident);
      app.patch('/residents/:residentId',[authToken], controller.updateResident);
      app.delete('/residents/:residentId',[authToken], controller.deleteResident);

      //member operations
      //app.post('/residents/:residentId/members', controller.singleUser);


}
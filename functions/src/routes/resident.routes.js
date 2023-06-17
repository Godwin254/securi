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
      app.get('/residents/', controller.getAllResidents);
      app.get('/residents/estates/:estateId', controller.getAllResidentsByEstate); //get all residents by estate
      app.get('/residents/:residentId',  controller.getResident);
      app.put('/residents/:residentId', controller.updateResident);
      app.delete('/residents/:residentId', controller.deleteResident);

      //member operations
      app.post('/residents/:residentId/members', controller.createMember);
      app.put('/residents/:residentId/members/:memberId', controller.updateMember);
      app.delete('/residents/:residentId/members/:memberId', controller.deleteMember);


}
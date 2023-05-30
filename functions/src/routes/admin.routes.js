const controller = require('../controllers/admin.controller');

module.exports = (app) => {
      app.use(function(_, res, next){
            res.header("Access-Contol-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

            next();
      });

      app.get('/admin/:adminId', controller.getAdminData);
      app.put('/admin/:adminId', controller.updateAdminData);
      app.delete('/admin/:adminId', controller.deleteAdminData);


      app.post('/admin/:adminId/estate', controller.createNewEstate);
      app.put('/admin/:adminId/estate', controller.updateEstateConfig);
      app.delete('/admin/:adminId/estate', controller.deleteEstateConfig);
}
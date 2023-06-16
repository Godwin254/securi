const controller = require('../controllers/estate.controller');

module.exports = (app) => {
      app.use(function(_, res, next){
            res.header("Access-Contol-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

            next();
      });

      app.get('/estates', controller.getAllEstates);
      app.get('/estate-config/:userId', controller.getEstateConfig);
      app.get('/estates/:estateId', controller.getEstate);
}
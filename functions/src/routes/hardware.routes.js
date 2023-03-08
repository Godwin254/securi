const controller = require('../controllers/hardware.controllers');

module.exports = (app) => {
      app.use(function(req, res, next){
            res.header("Access-Contol-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

            next();
      });

      app.get('/tags/:id', controller.getTagID);
      app.post('/tags/', controller.createTag);

      app.put('/finger/:id', controller.getFingerID);
      app.delete('/fingerprint/', controller.createFingerprint);
}
const controller = require('../controllers/tag.controller');

module.exports = (app) => {
      app.use(function(_, res, next){
            res.header("Access-Contol-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

            next();
      });

      app.post('/tags', controller.createTag);
      app.get('/tags/:tagId', controller.getTag);
      app.get('/tags/estate/:estateId', controller.getAllTags);
};
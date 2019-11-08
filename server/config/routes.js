var controllers = require('../controllers/controllers.js');
var path = require('path');

module.exports = function(app){
  app.post('/user/register', function(req, res) {
    controllers.register(req, res);
  })
 
  app.post('/user/login', function(req, res) {
    controllers.login(req,res);
  })

  app.get('/report/:index', function(req, res) {
    controllers.report(req,res);
  })

  app.get('/delete/:index', function(req, res) {
    controllers.delete(req,res);
  })

  app.get('/message', function(req, res) {
    controllers.getAllMessages(req,res);
  })

  app.post('/message', function(req, res) {
    controllers.post(req,res);
  })

  app.all("*", (req,res,next) => {
    console.log("in catch all")
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
}

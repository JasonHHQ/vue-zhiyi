const Test = require("../controllers/test.js")

module.exports = function(app) {

  app.use(function(req, res, next) {
    next()
  })

  app.post('/test', Test.test)
}
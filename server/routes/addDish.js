let addDish = require('../controllers/addDish/addDish.js');

module.exports = function (app) {
  app.get("/addDish", addDish);
};

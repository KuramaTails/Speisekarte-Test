let requestDishes = require('../controllers/requestDishes/requestDishes.js');

module.exports = function (app) {
  app.get("/requestDishes", requestDishes);
};

const route = require("express").Router(); // Declarando router da express diretamente
const userController = require('../controllers/user.controller');

route.post("/", userController.create);

module.exports = route;
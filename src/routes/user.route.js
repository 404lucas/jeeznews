const route = require("express").Router(); // Declarando router da express diretamente
const userController = require('../controllers/user.controller');

route.post("/", userController.create); //Método post da route para executar função post na nossa API...
route.get("/", userController.findAll);
route.get("/:id", userController.findById);

module.exports = route; // Exportar função geral
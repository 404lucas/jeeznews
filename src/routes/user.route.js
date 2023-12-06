const route = require("express").Router(); // Declarando router da express diretamente
const userController = require('../controllers/user.controller');

route.post("/", userController.create); // Método post da route para executar função post na nossa API...
route.get("/", userController.findAll); // Get de todos os usuários cadastrados
route.get("/id/:id", userController.findById); // Achar único por id
route.get("/mail/:email", userController.findByEmail); // Achar único por id

module.exports = route; // Exportar função geral
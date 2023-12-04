 // Pegando o "express (a dependência)" na node_modules e usando como variável
const express = require("express");
const app = express(); // Boa prática
const connectDatabase = require("./src/database/db");

const userRoute = require('./src/routes/user.route');
const port = 3000;

connectDatabase();
app.use(express.json()); //Usando método json pra poder usar... JSON!
app.use("/user", userRoute); //Incluindo a rota users ao index

// Express está ouvindo na porta 3000
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

//DETALHE: GERALMENTE A SEGUNDA FUNÇÃO E UMA CALLBACK, ou seja, executada em conjunto/depois da parent
 // Pegando o "express (a dependência)" na node_modules e usando como variável
const express = require("express");
const app = express(); // Boa prática

const userRoute = require('./src/routes/user.route');
const port = 3000;

app.use(express.json());
app.use("/user", userRoute);

// Express está ouvindo na porta 3000
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
 // Pegando o "express (a dependência)" na node_modules e usando como variável
const express = require("express");
const app = express(); // Boa prática

// ROUTE: 
    //HTTP METHOD
    //NAME
    //Callback (function) 
app.get("/home", (req, res) => { //Express.get (método GET, função callback)
    // res = response, req = requisition

});

// Express está ouvindo na porta 3000
app.listen(3000);
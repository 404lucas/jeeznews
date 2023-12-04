const create = (req, res) => {
    
    const { name, username, email, password, avatar, background } = req.body; //Definindo o corpo da requisição

    if (!name || !username || !email || !password || !avatar || !background) { //Revisando se TODOS os dados foram mandados
        res.status(400).send({ message: "Submit all fields for registration" });
    }

    res.status(201).send({ // Retornando a resposta
        status: 201,
        message: "User created successfully",
        user: {
            name,
            username,
            email,
            avatar,
            background
        },
    });
};

module.exports = { create }; // Exportando funcção
const userService = require('../services/user.service');
const mongoose = require('mongoose');

const create = async (req, res) => {

    const { name, username, email, password, avatar, background } = req.body; //Definindo o corpo da requisição

    if (!name || !username || !email || !password || !avatar || !background) { //Revisando se TODOS os dados foram mandados
        res.status(400).send({ message: "Submit all fields for registration" });
    }

    const user = await userService.createService(req.body);

    if (!user) {
        return res.status(400).send({ message: "Error creating user" });
    }

    res.status(201).send({ // Retornando a resposta
        status: 201,
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background
        },
    });
};

const findAll = async (req, res) => {
    const users = await userService.findAllService(); //

    if (users.lenght === 0) {
        return res.status(400).send({ message: "There are no registered users" });
    }

    res.status(200).send(users);
};

const findById = async (req, res) => {
    const id = req.params.id; //id nos parâmetros da requisição, na url

    if (!mongoose.Types.ObjectId.isValid(id)) { //se id não é um id válido do mongo
        return res.status(400).send({ message: "Invalid id" }); // id inválido
    };

    const user = await userService.findByIdService(id); // await na função finbyid do mongo

    if (!user) { //se usuário não for encontrado
        return res.status(400).send({ message: "User not found" }); //usuário não enconstrado
    }

    res.send({ message: "User found!", user });
}

const findByEmail = async (req, res) => {
    const email = req.params.email;

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    // No seu código, onde você faz a validação do e-mail
    if (!isValidEmail(email)) {
        return res.status(400).send({ message: "Invalid email" });
    }
    const user = await userService.findByEmailService(email);

    if (!user) {
        return res.status(400).send({ message: "User not found" });
    }

    res.send({ message: "User found!", user });
}

module.exports = { create, findAll, findById, findByEmail }; // Exportando funcção
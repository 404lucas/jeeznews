const User = require('../models/User');

const createService = (body) => {
    try {
        User.create(body);
    } catch (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            res.status(400).json({ erro: 'Valor duplicado' });
        } else {
            res.status(500).json({ erro: 'Erro ao salvar no banco de dados' });
        }
    }
};

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const findByEmailService = (email) => User.findOne({ email });

module.exports = {
    createService,
    findAllService,
    findByIdService,
    findByEmailService
};
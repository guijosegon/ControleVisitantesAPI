const mongoose = require('mongoose');

const ingressoSchema = new mongoose.Schema({
    descricao: String,
    valor: Number,
    dataCadastro: Date,
    ativo: Boolean
});

const Ingresso = mongoose.model('Ingresso', ingressoSchema);

module.exports = Ingresso;
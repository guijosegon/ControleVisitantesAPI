const mongoose = require('mongoose');

const visitaSchema = new mongoose.Schema({
    idvisita: Number,
    idFuncionario: Number,
    dataHoraEntrada: Date,
    dataHoraSaida: Date,
    idIngresso: String,
    dataCadastro: Date,
});

const Visita = mongoose.model('Visita', visitaSchema);

module.exports = Visita;
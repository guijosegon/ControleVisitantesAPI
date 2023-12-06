const mongoose = require('mongoose');

const visitaSchema = new mongoose.Schema({
    idFuncionario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Funcionario'
      },
      idVisitante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Visitante'
      },
      idIngresso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingresso'
      },
    dataHoraEntrada: {
        type: Date,
        default: Date.now
      },
    dataHoraSaida: {
        type: Date
      },
    dataCadastro: {
        type: Date,
        default: Date.now
      }
});

const Visita = mongoose.model('Visita', visitaSchema);

module.exports = Visita;
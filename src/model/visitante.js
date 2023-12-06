const mongoose = require('mongoose');

const visitanteSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: false
  },
  telefone: {
    type: String,
    require: true
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  },
  ativo: {
    type: Boolean,
    default: true
  }
});

const Visitante = mongoose.model('Visitante', visitanteSchema);

module.exports = Visitante;

const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
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

const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

module.exports = Funcionario;

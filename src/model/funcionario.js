const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
  dataCadastro: Date,
  ativo: Boolean
});

const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

module.exports = Funcionario;

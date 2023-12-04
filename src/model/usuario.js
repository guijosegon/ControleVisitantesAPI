const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
  dataCadastro: Date,
  ativo: Boolean
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;

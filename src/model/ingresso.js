const mongoose = require('mongoose');

const ingressoSchema = new mongoose.Schema({
    descricao: {
        type: String,
        require: true
      },
    valor: {
        type: Number,
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

const Ingresso = mongoose.model('Ingresso', ingressoSchema);

module.exports = Ingresso;
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
const dbName = 'BellaVista';

const connectDatabase = () => {
  mongoose.connect(`${url}/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;

  db.on('connected', () => {console.log('MongoDB conectado');});

  db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
};

module.exports = connectDatabase;

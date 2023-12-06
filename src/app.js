const express = require('express');


const funcionarioRouter = require('../src/route/funcionarioRoute');
const visitanteRouter = require('../src/route/visitanteRoute');
const ingressoRouter = require('../src/route/ingressoRoute');
const visitaRouter = require('../src/route/visitaRoute');

const connectDatabase = require('./mongodb');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/funcionario', funcionarioRouter);
app.use('/visitante', visitanteRouter);
app.use('/ingresso', ingressoRouter);
app.use('/visita', visitaRouter);

connectDatabase();
app.listen(port, () => {
  console.log(`Servidor na porta ${port}`);
});
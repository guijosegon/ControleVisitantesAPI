const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const funcionarioRouter = require('../src/route/funcionarioRoute');
const usuarioRouter = require('../src/route/usuarioRoute');
const ingressoRouter = require('../src/route/ingressoRoute');
const visitaRouter = require('../src/route/visitaRoute');

const connectDatabase = require('./mongodb');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/funcionario', funcionarioRouter);
app.use('/usuario', usuarioRouter);
app.use('/ingresso', ingressoRouter);
app.use('/visita', visitaRouter);

connectDatabase();
app.listen(port, () => {
  console.log(`Servidor na porta ${port}`);
});
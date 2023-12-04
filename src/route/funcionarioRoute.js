const express = require('express');
const router = express.Router();
const funcionarioController = require('../controller/funcionarioController');

router.get('/consultar', funcionarioController.getAllFuncionario);

router.get('/consultar/:id', funcionarioController.getFuncionarioById);

router.post('/salvar', funcionarioController.createFuncionario);

router.put('/editar/:id', funcionarioController.updateFuncionario);

router.delete('/deletar/:id', funcionarioController.deleteFuncionario);

module.exports = router;

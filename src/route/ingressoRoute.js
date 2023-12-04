const express = require('express');
const router = express.Router();
const ingressoController = require('../controller/ingressoController');

router.get('/consultar', ingressoController.getAllIngresso);

router.get('/consultar/:id', ingressoController.getIngressoById);

router.post('/salvar', ingressoController.createIngresso);

router.put('/editar/:id', ingressoController.updateIngresso);

router.delete('/deletar/:id', ingressoController.deleteIngresso);

module.exports = router;
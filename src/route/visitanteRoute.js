const express = require('express');
const router = express.Router();
const visitanteController = require('../controller/visitanteController');

router.get('/consultar', visitanteController.getAllVisitante);

router.get('/consultar/:id', visitanteController.getVisitanteById);

router.post('/salvar', visitanteController.createVisitante);

router.put('/editar/:id', visitanteController.updateVisitante);

router.delete('/deletar/:id', visitanteController.deleteVisitante);

module.exports = router;
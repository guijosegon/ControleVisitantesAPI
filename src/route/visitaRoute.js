const express = require('express');
const router = express.Router();
const VisitaController = require('../controller/visitaController');

router.get('/consultar', VisitaController.getAllVisita);

router.get('/consultar/:id', VisitaController.getVisitaById);

router.post('/salvar', VisitaController.createVisita);

router.put('/editar/:id', VisitaController.updateVisita);

router.delete('/deletar/:id', VisitaController.deleteVisita);

module.exports = router;
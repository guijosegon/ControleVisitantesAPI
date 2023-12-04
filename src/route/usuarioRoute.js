const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

router.get('/consultar', usuarioController.getAllUsuario);

router.get('/consultar/:id', usuarioController.getUsuarioById);

router.post('/salvar', usuarioController.createUsuario);

router.put('/editar/:id', usuarioController.updateUsuario);

router.delete('/deletar/:id', usuarioController.deleteUsuario);

module.exports = router;
const Usuario = require('../model/usuario');

const UsuarioController = {

  getAllUsuario: async (req, res) => {
    try {
      const usuarios = await Usuario.find({ ativo: true });
      res.json(usuarios);
    } catch (usuarios) {
      res.status(500).json({ message: error.message });
    }
  },

  getUsuarioById: async (req, res) => {
    try {
      const usuario = await Usuario.findById(req.params.id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createUsuario: async (req, res) => {
    const usuario = new Usuario(req.body);
    try{
      const getusuario = await usuario.save();
      res.status(201).json(getusuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateUsuario: async (req, res) => {
    try {
      const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(usuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteUsuario: async (req, res) => {
    try {
      req.body.ativo = false;
      await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports =  UsuarioController;

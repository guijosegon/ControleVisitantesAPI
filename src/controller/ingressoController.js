const Ingresso = require('../model/ingresso');

const IngressoController = {

  getAllIngresso: async (req, res) => {
    try {
      const ingressos = await Ingresso.find();
      res.json(ingressos);
    } catch (ingressos) {
      res.status(500).json({ message: error.message });
    }
  },

  getIngressoById: async (req, res) => {
    try {
      const ingresso = await Ingresso.findById(req.params.id);
      if (ingresso) {
        res.json(ingresso);
      } else {
        res.status(404).json({ message: 'Ingresso não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createIngresso: async (req, res) => {
    const ingresso = new Ingresso(req.body);
    try{
      const getfingresso = await ingresso.save();
      res.status(201).json(getfingresso);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateIngresso: async (req, res) => {
    try {
      await Ingresso.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ message: 'Ingresso alterado com sucesso' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteIngresso: async (req, res) => {
    try {
      await Ingresso.findByIdAndDelete(req.params.id, req.body, { new: true });
      res.json({ message: 'Ingresso excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = IngressoController;

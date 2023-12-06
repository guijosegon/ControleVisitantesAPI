const Visitante = require('../model/visitante');

const visitanteController = {

  getAllVisitante: async (req, res) => {
    try {
      const visitantes = await Visitante.find({ ativo: true });
      res.json(visitantes);
    } catch (visitantes) {
      res.status(500).json({ message: error.message });
    }
  },

  getVisitanteById: async (req, res) => {
    try {
      const visitante = await Visitante.findById(req.params.id);
      if (visitante) {
        res.json(visitante);
      } else {
        res.status(404).json({ message: 'Visitante não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createVisitante: async (req, res) => {
    const visitante = new Visitante(req.body);
    try{
      const getvisitante = await visitante.save();
      res.status(201).json(getvisitante);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateVisitante: async (req, res) => {
    try {
      const visitante = await Visitante.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(visitante);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteVisitante: async (req, res) => {
    try {
      req.body.ativo = false;
      await Visitante.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ message: 'Visitante excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports =  visitanteController;

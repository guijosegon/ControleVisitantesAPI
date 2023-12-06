const Visita = require('../model/visita');

const VisitaController = {

  getAllVisita: async (req, res) => {
    try {
      const visitas = await Visita.find().populate('idFuncionario').populate('idVisitante').populate('idIngresso');
      res.json(visitas);
    } catch (visitas) {
      res.status(500).json({ message: error.message });
    }
  },

  getVisitaById: async (req, res) => {
    try {
      const visita = await Visita.findById(req.params.id).populate('idFuncionario').populate('idVisitante').populate('idIngresso');
      if (visita) {
        res.json(visita);
      } else {
        res.status(404).json({ message: 'Visita não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createVisita: async (req, res) => {
    const visita = new Visita(req.body);
    try{
      const getvisita = await visita.save();
      res.status(201).json(getvisita);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateVisita: async (req, res) => {
    try {
      await Visita.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ message: 'Visita alterado com sucesso' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteVisita: async (req, res) => {
    try {
      await Visita.findByIdAndDelete(req.params.id, req.body, { new: true });
      res.json({ message: 'Visita excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = VisitaController;

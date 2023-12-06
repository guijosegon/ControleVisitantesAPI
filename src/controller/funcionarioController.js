const Funcionario = require('../model/funcionario');

const FuncionarioController = {

  getAllFuncionario: async (req, res) => {
    try {
      const funcionarios = await Funcionario.find({ ativo: true });
      res.json(funcionarios);
    } catch (funcionarios) {
      res.status(500).json({ message: error.message });
    }
  },

  getFuncionarioById: async (req, res) => {
    try {
      const funcionario = await Funcionario.findById(req.params.id);
      if (funcionario) {
        res.json(funcionario);
      } else {
        res.status(404).json({ message: 'Funcionario não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createFuncionario: async (req, res) => {
    const funcionario = new Funcionario(req.body);
    try{
      const getfuncionario = await funcionario.save();
      res.status(201).json(getfuncionario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateFuncionario: async (req, res) => {
    try {
      await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ message: 'Funcionario alterado com sucesso' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteFuncionario: async (req, res) => {
    try {
      await Funcionario.findByIdAndDelete(req.params.id, req.body, { new: true });
      res.json({ message: 'Funcionario excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = FuncionarioController;

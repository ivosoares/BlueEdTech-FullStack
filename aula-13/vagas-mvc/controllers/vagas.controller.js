const mongoose = require('mongoose');
// importamos o nosso servico
const VagasServices = require('./../services/vagas.service');

const vagasService = new VagasServices();

class VagasController {
  
  getVagas = async (req, res) => {
    const vagas  = await vagasService.findAll();
    res.send(vagas);
  }

  getVagasById = async (req, res) => {
    const id = req.params.id;

    // tratamento de erro se o id é valido ou nao
    if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send('Id Invalido');
      return;
    }

    const vaga = await vagasService.findById(id);

    // tratamento de erro se existe a vaga ou nao no banco de dados.
    if(!vaga) {
      res.status(404).send('vaga não encontrada');
      return
    }

    res.status(200).send(vaga);
  }

  createVaga = async (req,res) => {
    const vaga = req.body;
    const vagaSalva = await vagasService.createVaga(vaga);
    res.send({ message: `vaga ${vagaSalva.titulo} criada com sucesso` });
  }
}

module.exports = VagasController;

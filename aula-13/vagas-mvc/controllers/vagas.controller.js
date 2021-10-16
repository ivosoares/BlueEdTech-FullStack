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
    const vagaSalva = await vagasService.createVaga(vaga)
    .then(() => {
      res.send({ message: `vaga criada com sucesso` });
    })
    .catch((err) => res.status(500).send({error: `erro no servdor: ${err}`}));
  }

  editVaga = async (req, res) => {
    const id = req.params.id;
    const vaga = req.body;
    await vagasService.editVaga(id, vaga)
    .then(() => {
      res.status(200).send({message: 'Vaga atualizada com sucesso'});
    })
    .catch((err) => res.status(500).send({error: `erro no servdor: ${err}`}));
  }

  deleteVaga = async (req, res) => {
    const id = req.params.id;
    await vagasService.deleteVaga(id)
    .then(() => res.status(200).send({message: 'Excluido com sucesso'}));
  }
}

module.exports = VagasController;

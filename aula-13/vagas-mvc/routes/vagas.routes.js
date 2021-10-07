// importa o express
const express = require('express');
const VagasController = require('./../controllers/vagas.controller');
// inicializo minha rota
const router = express.Router();
const vagasController = new VagasController();

// [GET] /vagas - Retorna a lista de vagas
router.get('/', vagasController.getVagas);

// [GET] /vagas/id - Returna uma unica vaga por id
router.get('/:id', vagasController.getVagasById);

module.exports = router;



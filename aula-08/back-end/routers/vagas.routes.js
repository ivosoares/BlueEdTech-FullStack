const express = require('express');
const router = express.Router();

const vagas = [
  {
    id: 1,
    titulo: "Desenvolvedor Front-End",
    descricao: "Vaga para desenvolvedor front-end com as tecnologias React, HTML, CSS, JS",
    salario: "R$4.000",
    senioridade: "Júnior"
  },
  {
    id: 2,
    titulo: "Desenvolvedor Full Stack",
    descricao: "Vaga para desenvolvedor front-end com as tecnologias Node, MongoDB ,React, HTML, CSS, JS",
    salario: "R$5.000",
    senioridade: "Júnior"
  }
]

// [GET] /vagas = Retorna uma lista de vagas.
router.get('/', (req, res) => {
  // envia o array de vagas como resposta da API.
  res.send(vagas);
})

// [POST] /add - Cadastrar uma nova vaga na lista
router.post('/add', (req, res) => {
  const vaga = req.body;
  console.log(vaga);
  vagas.push(vaga);
  res.send('vaga cadastrada');
})

module.exports = router;


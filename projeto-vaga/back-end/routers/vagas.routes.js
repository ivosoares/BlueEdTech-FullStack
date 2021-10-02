const express = require('express');
const router = express.Router();

const vagas = [
  {
    id: Date.now(),
    titulo: "Desenvolvedor Front-End",
    descricao: "Vaga para desenvolvedor front-end com as tecnologias React, HTML, CSS, JS",
    salario: "R$4.000",
    senioridade: "Júnior"
  },
]


// [GET] /vagas = Retorna uma lista de vagas.
router.get('/', (req, res) => {
  // envia o array de vagas como resposta da API.
  res.send(vagas);
})

// primeiro a gente faz uma requisicao buscando a vaga por id
// [GET] /vagas/id  = Returna uma unica vaga por id.
router.get('/:id', (req, res) => {
  const idParam = req.params.id;
  const index = vagas.findIndex(vaga => vaga.id == idParam);
  const vaga = vagas[index];
  res.send(vaga);
})

// depois iremos enviar o objeto atualizado para fazer o update da vaga na lista
// [PUT] /vagas/id atualiza uma vaga de acordo com o id;
// router.put('/:id', (req, res) => {
//   const idParam = req.params.id;
//   const vagaAtualizada = req.body;
//   const index = vagas.findIndex(vaga => vaga.id == idParam);

//   vagas[index] = {
//     id: vagas[index].id,
//     ...vagaAtualizada
//   }
//   res.send(vagas[index]);
// })

// [PUT] = que recebe um objeto e um id do front e atualiza os dados da vaga com esse id.
router.put('/:id', (req, res) => {
  const vagaEdit = req.body;
  const id = req.params.id;
  let vagaPreCadastrada = vagas.find((vaga) => vaga.id == id);
  
  // vagaPreCadastrada = {
  //   ...vagaPreCadastrada,
  //   ...vagaEdit
  // }

  vagaPreCadastrada.titulo = vagaEdit.titulo;
  vagaPreCadastrada.descricao = vagaEdit.descricao;
  vagaPreCadastrada.salario = vagaEdit.salario;
  vagaPreCadastrada.senioridade = vagaEdit.senioridade;

  res.send({
    message: `vaga ${vagaPreCadastrada.id} atualizada com sucesso`,
    data: vagaPreCadastrada
  })
})





// [POST] /add - Cadastrar uma nova vaga na lista
router.post('/add', (req, res) => {
  const vaga = req.body;
  vaga.id = Date.now();
  vagas.push(vaga);
  res.status(201).send({
    message: 'cadastrado com sucesso',
    data: vaga
  });
})

// [DELETE] = /id = Exclui uma vaga por id
router.delete('/:id', (req, res) => {
  // salvamos em uma variavel o id que recebemos por parametro;
  const id = req.params.id;
  // procuramos o indice da vaga na lista atraves do id que recebemos via parametro 
  const index = vagas.findIndex((vaga) => vaga.id == id);
  vagas.splice(index, 1);

  res.send({
    message: `vaga excluida com sucesso`,
  })
})



module.exports = router;


// importar o express
const express = require('express');
// importar a biblioteca mongoonse que sera responsavel pelo mongodb (banco de dados)
const mongoose = require('mongoose');

const cors = require('cors');
// importa o model vagas
const Vaga = require('./models/vaga');
// inicializa o express
const app = express();
app.use(cors());
app.use(express.json());

//importa conexao com banco
const Conn = require('./conn/conn');
Conn();

// criando estrtura inicial para vaga
// const vagaAdd = new Vaga({
//   titulo: "Devops",
//   descricao: "teste de descricao da vaga",
//   salario: 5000,
//   senioridade: "junior"
// })

// vagaAdd.save()
// .then(() => console.log('vaga salva!'))
// .catch((err) => console.log(err));

// [GET] que retorna todas as vagas do banco de dados
app.get('/vagas', (req, res) => {
  // Find --> retorna uma lista de documentos(dados) de acordo com o filtro
  Vaga.find()
  .then((vagas) => {
    console.log(vagas);
    res.send(vagas);
  })
  .catch((err) => console.log(err));
})

// [GET] que retorna todas as vagas do banco de dados
app.get('/vagaslista', async (req, res) => {
  // Find --> retorna uma lista de documentos(dados) de acordo com o filtro
  const vagas = await Vaga.find();
  console.log(vagas);
  res.send(vagas);
})

// [GET] que retorna a vaga por id
app.get('/vagas/findById/:id', async (req, res) => {
  const vagaById = await Vaga.findOne({ _id: req.params.id })
  res.send(vagaById);
})

// [GET] que retorna a vaga por titulo
app.get('/vagas/findByTitulo/:titulo', async (req, res) => {
  const vagaByTitulo = await Vaga.find({ titulo: req.params.titulo })
  res.send(vagaByTitulo);
})

// [DELETE] exclui um item por id
app.delete('/vagas/delete/:id', async (req, res) => {
  await Vaga.deleteOne({ _id: req.params.id });
  res.status(200).send({
    message: 'Excluido com sucesso',
  })
})


// [POST] adiciona uma nova vaga
app.post('/vagas/add', async (req, res) => {
  // create = cria um novo documento no banco de dados baseado com o body recebido pelo cliente
  await Vaga.create(req.body)
  .then(() => {
    res.status(201).send({
      message: 'Criado com sucesso'
    })
  })
  .catch((err) => {
    res.status(400).send({
      error: 'Algo deu errado, tente novamente'
    })
    console.log(err);
  })
})


// [PUT] atualiza uma vaga de acordo com o id e o body recebido
app.put('/vagas/update/:id', async (req, res) => {
  await Vaga.updateOne({ _id: req.params.id }, req.body)
  .then(() => {
    res.status(200).send({
      message: 'Atualizado com sucesso',
    })
    .catch((err) => {
      console.log(err),
      res.status(400).send({
        error: err
      })
    })
  })
})





const port = 3000;
app.listen(port, () => {
  console.log('App rodando na porta 3000');
})



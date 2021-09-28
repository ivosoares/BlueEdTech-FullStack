// importar o express
const express = require('express');

// inicializar o express
const app = express();

// declaracao da porta
const port = 3000;

const filmes = ['Vingadores', 'Harry Potter', 'Hulk'];

const tarefas = [
  {
    id: 968468746854,
    text: 'ir ao mercado',
    check: false,
  },
  {
    id: 16868468768,
    text: 'escovar dente',
    check: false,
  },
  {
    id: 1687168795798,
    text: 'cortar cabelo',
    check: false,
  },
  {
    id: 16846987987,
    text: 'estudar js',
    check: false,
  },
]

// estou iniciando o express e minha rota GET
// [GET] = HOME
app.get('/', (req, res)=> {
  res.send('Hello Bluemers');
})

// rota que retorna a minha lista de filmes
// [GET] /filmes - Retorna a lista de filmes
app.get('/filmes', (req, res) => {
  res.send(filmes);
})

// rota que retorna um unico filme de acordo com o numero que ele receber
// [GET] /filmes/{id} - Retorna apenas um unico filme por ID
app.get('/filmes/:id', (req, res) => {
  // request = a requisicao que vem do cliente para o servidor
  // response = a resposta que o servidor envia para o cliente
  const id = req.params.id - 1;
  const filme = filmes[id];

  res.send(filme);
})



// [GET] /tarefas - retorna a lista de tarefas
app.get('/tarefas', (req, res) => {
  res.send(tarefas);
})

// [GET] /tarefas/{id} - retorna as tarefas por id
app.get('/tarefas/:id', (req, res) => {
  // estou pegnado o id pelo parametro que vem da requisicao 
  const idParam = req.params.id;
  // estou procurando na minha lista a tarefa que contem o id igual ao id que estou recebendo no parametro
  const tarefa = tarefas.find((tarefa) => {
    return tarefa.id == idParam;
  })

  res.send(tarefa);
})



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

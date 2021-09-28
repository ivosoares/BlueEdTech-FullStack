// importar o express
const express = require('express');

// inicializar o express
const app = express();

// declaracao da porta
const port = 3000;

const filmes = ['Vingadores', 'Harry Potter', 'Hulk'];


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


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

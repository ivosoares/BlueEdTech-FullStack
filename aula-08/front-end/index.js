const urlApi = 'http://localhost:3000/vagas';
const lista = document.getElementById('lista');
// const getVagas = () => {
//   const fetchPromisse = fetch(urlApi);
//   console.log('A PROMESSA DA REQUISICAO',  fetchPromisse);
//   fetchPromisse
//   .then((response) => {
//     console.log('A RESPOSTA DA PROMESSA CASO OK', response)
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
// }


// Faz uma requisicao do tipo [GET] que recebe todas as vagas cadastradas.
const getVagas = async () => {
  const response = await fetch(urlApi);
  // data = uma lista (array de objetos) com as tarefas pre cadastra 
  const data = await response.json();
  console.log(data);

  // iteramos esse array passando item por item e renderizandop na tela
  data.map((vaga) => {
    lista.insertAdjacentHTML('beforeend', `
    <div class="col-6">
      <div class="card">
        <div class="card-header">
          ${vaga.titulo}
        </div> 
        <div class="card-body">
          <p class="card-text">Descricao: ${vaga.descricao}</p>
          <p class="card-text">Salario: R$${vaga.salario}</p>
          <p class="card-text">Seniridade: ${vaga.senioridade}</p>
        </div>
      </div>
    </div>
    `)
  })
}
getVagas();

// [POST] que cadastra as novas vagas no backend.
const postVaga = async (evento) => {
  // previne a pagina de atualizar devido ao evento de submit do botao ter sido executado
  evento.preventDefault();

  // precisamos pegar os valores que o usuario preenche no formulario
  // buscar o input e buscar o seu value.
  let titulo = document.getElementById('titulo').value;
  let descricao = document.getElementById('descricao').value;
  let salario = document.getElementById('salario').value;
  let senioridade = document.getElementById('senioridade').value;

  // adicionamos os valores dos inputs em campos do nosso objeto vaga
  const vaga = {
    titulo,
    descricao,
    salario,
    senioridade
  }
  console.log(vaga);


  // estamos configurando a nossa requisicao antes dela ser disparada
  const request = new Request(`${urlApi}/add`, {
    method: 'POST',
    body: JSON.stringify(vaga),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  
  // chamamos a funcao fetch de forma assincrona de acordo com as nossas configuracoes anteriores
  const response = await fetch(request);
  // pegamos o resultado do fetch assincrono e acessamos o body no formato json
  const result = await response.json();

  titulo = '';
  descricao = '';
  salario = '';
  senioridade = '';

  lista.innerHTML = '';

  if(result) {
    getVagas();
  }

}


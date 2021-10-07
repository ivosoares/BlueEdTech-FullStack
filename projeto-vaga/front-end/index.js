const urlApi = 'http://localhost:3000/vagas';
const lista = document.getElementById('lista');
let edicao = false;
let idEdicao = 0;



// Faz uma requisicao do tipo [GET] que recebe todas as vagas cadastradas.
const getVagas = async () => {
  const response = await fetch(urlApi); // faz um req do tipo [GET] para a api
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
          <button type="button" class="btn btn-primary" onclick="putVaga(${vaga.id})">Editar</button>
          <button type="button" class="btn btn-danger" onclick="deleteVaga(${vaga.id})">Excluir</button>
        </div>
      </div>
    </div>
    `)
  })
}
getVagas();




// Funcao generica de submit, serve para POST e PUT
const submitForm = async (evento) => {
  // previne a pagina de atualizar devido ao evento de submit do botao ter sido executado
  evento.preventDefault();

  // precisamos pegar os valores que o usuario preenche no formulario
  // buscar o input e buscar o seu value.
  let titulo = document.getElementById('titulo');
  let descricao = document.getElementById('descricao');
  let salario = document.getElementById('salario');
  let senioridade = document.getElementById('senioridade');

  // adicionamos os valores dos inputs em campos do nosso objeto vaga
  const vaga = {
    titulo: titulo.value,
    descricao: descricao.value,
    salario: parseInt(salario.value),
    senioridade: senioridade.value
  }

  // verificamos se esta ou nao no modo de edicao, se nao estiver dispara o POST
  // se estiver dispara o PUT
  if(!edicao) { 
    // estamos configurando a nossa requisicao antes dela ser disparada
    const request = new Request(`${urlApi}`, {
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

    if(result) {
      getVagas();
    }

  } else {
    // Configuramos o request do PUT
    // Nesse caso precisamos enviar o id na requisicao, repare que estamos pegando uma variavel
    // chamada idEdicao, essa variavel é atualizada com o id da vaga quando é clicado o botao editar
    const request = new Request(`${urlApi}/${idEdicao}`, {
      method: 'PUT',
      body: JSON.stringify(vaga),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })

    // chamamos a funcao fetch de forma assincrona de acordo com as nossas configuracoes anteriores
    const response = await fetch(request);
    // pegamos o resultado do fetch assincrono e acessamos o body no formato json
    const result = await response.json();

    // verifica se houve retorno da api, caso sim, manda renderizar as vagas novamente.
    if(result) {
      edicao = false;
      getVagas();
    }
  }


  //limpamos os camos atualizando os seus values no input com o valor string vazia.
  titulo.value = '';
  descricao.value = '';
  salario.value = '';
  senioridade.value = '';

  // limpa a lista do html para poder ser populada novamente com os valores do getVagas();
  lista.innerHTML = '';
}

// funcao onde enviamos um id e ela nos retorna o objeto da vaga individual por id.
const getVagaById =  async (id) => {
  const response =  await fetch(`${urlApi}/${id}`);
  return vaga = response.json();
}

// ao clicar no botao editar chamamos essa funcao putVaga
// ela habilita o modo de edicao setando true e seta o id da edicao
// alem disso ela recebe o objeto da vaga individual de acordo com esse id e popula os campos do html com esses valores
const putVaga = async (id) => {
  edicao = true;
  idEdicao = id;

  // recebemos o objeto da vaga de acordo com o seu id
  const vaga = await getVagaById(id);

  // salvamos os elementos do html para poder manipular.
  let tituloEl = document.getElementById('titulo');
  let descricaoEl = document.getElementById('descricao');
  let salarioEl = document.getElementById('salario');
  let senioridadeEl = document.getElementById('senioridade');
  
  // preenchemos os campos do html de acordo com o que estava no objeto.
  tituloEl.value = vaga.titulo;
  descricaoEl.value = vaga.descricao;
  salarioEl.value = vaga.salario;
  senioridadeEl.value = vaga.senioridade

}


// Funcao que exclui uma vaga por id 
const deleteVaga = async (id) => {
  // disparamos ums requisicao do tipo [DELETE] para a rota /vagas/id
  const request = new Request(`${urlApi}/${id}`, {
    method: 'DELETE',
  })
  const response = await fetch(request);
  const data = await response.json();
  console.log(data.message);

  lista.innerHTML = '';
  getVagas();
}


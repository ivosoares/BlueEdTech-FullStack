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

const getVagas = async () => {
  const response = await fetch(urlApi);
  const data = await response.json();
  console.log(data);
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

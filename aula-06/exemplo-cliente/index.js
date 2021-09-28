// metodo http do javascript fetch

// quero acessar a api do pokemon

// primeiro parametro = endpoint da api ou seja endereco.
// segundo endpoint(opcional) = as configuracoes da requisicao.

const chamada = fetch('https://pokeapi.co/api/v2/pokemon?limit=120');
chamada.then((response) => {
  // ela esta retornando o body da requisicao em formato de promessa 
  // porque ele esta sendo construido de forma assincrona
  return response.json();
})
.then((data) => {
  const lista = document.getElementById('lista');
  const pokemons = data.results;
  pokemons.map((pokemon) => {
    lista.insertAdjacentHTML('beforeend', `
      <li>${pokemon.name}</li>
    `)
  })
});

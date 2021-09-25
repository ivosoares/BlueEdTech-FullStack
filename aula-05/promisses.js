// a gente chega na pizzaria pede uma pizza para viagem e fica esperando ate ficar pronta.
// sincrono


// a gente chega na pizzaria pede uma pizza para viagem a gente faz outras coisas e passa depois para buscar
// assincrono


orderPizza((result) => {
  console.log(`a sua pizza sabor ${result.sabor} está pronta`)
})

// a gente chega na pizzaria pede a pizza para viagem, faz outras shopping, encontra os amigos, vai um show

orderPizza(() => {
  console.log('minha pizza esta pronta');
  esperaMeusAmigosComerem(() => {
    console.log('acabaram de comer, vamos para o show')
    FoiParaOShow(() => {
      console.log('chegamos no show');
      ligoParaAlguem(() => {
        console.log('Acabou o show me busca')
        chegueiEmCasa(() => {
          console.log('jantei')
        })
      })
    })
  })
})


orderPizza()
  .then((pizza) => {
    console.log(`minha pizza de ${pizza.sabor} esta pronta`)
    return esperaMeusAmigosComerem();
  })
  .then(() => {
    console.log('meu amigos acabaram de comer, vamos para o show');
    return FoiParaOShow()
  })
  .then(() => {
    console.log('chegamos no show');
    return ligoParaAlguem();
  })
  .then(() => {
    console.log('Acabou o show me busca');
    return 
  })
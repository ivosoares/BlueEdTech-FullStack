// FUNCOES NO JAVASCRIPT

// FUNCAO SINCRONAS

const function1 = () => {
  console.log('Primeira funcao disparada');
}
const function2 = () => {
  console.log('... Depois dispara a segunda ...');
}
const function3 = () => {
  console.log('... por ultimo dispara a terceira');
}

function1();
function2();
function3();

// PROGRAMACAO ASSINCRONA

const fun1 = () => {
  console.log('funcao 1');
}

const fun2 = () => {
  setTimeout(function(){
    console.log("Executando Callback...")
    
    setTimeout(function (){
        console.log("Executando Callback...")

        setTimeout(function(){
            console.log("Executando Callback...")
        }, 2000)
    }, 2000)
  }, 2000)
}


// exemplo ultilizando promisses
const esperarPor = (tempo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Executando a promisse...')
      resolve('foi resolvido');
    }, tempo)
  })
}

esperarPor(3000).then((result) => {
    console.log(result);
});





const fun3 = () => {
  console.log('funcao 3');
}

fun3();
fun2();
fun1();

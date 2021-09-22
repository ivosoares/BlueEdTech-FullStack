# Javascript

- Linguagem criada em 1995 por Brendan Eich
- Criou e batizou a linguagem de LiveScript, com objetivo de utilizá-la dentro de um novo navegador que estava sendo desenvolvido pela Netscape
- Posteriormente, teve o seu nome alterado para Javascript

## Características do Javascript

- Tipagem Dinâmica (Dinamically Typed) - Não precisamos especificar o TIPO de uma variável no momento de declará-la. Além disso, é possível alterar o tipo que uma variável recebe durante a execução do código.

```javascript
let number = 10;

console.log(number);
console.log(typeof number);

number = 'uma string';

console.log(number);
console.log(typeof number);
```

- Funções de Primeira Classe (First Class Functions) - No Javascript, funcões são tratadas como valores, assim como números, strings, booleans, etc. Por isso, conseguimos fazer com que variáveis recebam funções como valor e até podemos passar funções como argumento para outras funções (callback function)

```javascript
function soma(numero1, numero2) {
  return numero1 + numero2;
} // Named function

const soma2 = (num1, num2) => {
  return num1 + num2;
}; // Function expression (variável recebendo uma função como valor)
```

- Hoisting: Antes de executar um código, o javascript pega TODAS as funções e declarações de variáveis e coloca elas no início do arquivo. Isso nos permite, por exemplo, utilizar funções antes de terem sido criadas dentro do nosso arquivo

```javascript
console.log(soma(10, 5)); // 15

function soma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(soma2(10, 10)) // ReferenceError: Cannot access 'soma2' before initialization (Percebam que neste erro, o Javascript já sabe que essa variável existe graças ao Hoisting, mas ele não permite que ela seja acessada antes da linha em que ela de fato é inicializada)

const soma2 = (num1, num2) => {
  return num1 + num2;
};
```

- Declaração X Inicialização de variáveis

```javascript
const num = 10; // Declarada E Inicializada!!

let variavelDeclarada; // Declarar uma variável
variavelDeclarada = 'uma string'; // Inicializar uma variável (atribuir um valor)
variavelDeclarada = [1, 2, 3, 4]; // Reatribuir valor (mudar valor de uma variável já inicializada)
```

- Callback Functions - Funções que recebem outras funções como argumento (lembrar da característica do Javascript de trabalhar com "Funções de Primeira Classe")

  - Set Timeout

```javascript
// setTimeout é um método que recebe uma função e um número (tempo em milisegundos) como argumento. Após o tempo especificado, o setTimeout executa a função passada
setTimeout(() => {
  console.log('estou sendo chamado depois de 5 segundos!!!');
}, 5000); // Depois de 5 segundos, ele vai executar a minha callback e printar o texto acima no console
```

- For Each

```javascript
const listaDeNumeros = [1, 2, 3, 4, 5, 6];

listaDeNumeros.forEach((valor, indice, arrayCompleto) => {
  console.log(`*****INICIO DA ITERACAO ${indice + 1}*****`);
  console.log('Valor de cada Elemento do Array ===> ', valor);
  console.log('Indice de cada Elemento do Array ===> ', indice);
  console.log('Array completo ===> ', arrayCompleto);
  console.log('******************************************');
}); // método de array que itera (faz um loop) em uma lista/array
```

- Map

```javascript
const listaDeNumeros = [1, 2, 3, 4, 5, 6];
const arrayModificado = listaDeNumeros.map((valor, indice, arrayCompleto) => {
  // A CALLBACK PASSADA NO MAP SEMPRE PRECISA RETORNAR ALGUM VALOR!!!!

  console.log('Cada valor do array original -> ', valor);

  return valor + 10; // Vai pegar cara valor do meu array, somar 10 e retornar
}); // método de array que itera em uma lista/array E RETORNA UM NOVO ARRAY MODIFICADO!!!!

console.log(arrayModificado); // [11, 12, 13, 14, 15, 16]
```

- Operadores de Igualdade
  - Strict Equality (===) Verifica valor e tipo de dado na comparação

```javascript
console.log(2 === '2') // false
console.log('string' === 'string') // true
```

- Equality (==) Verifica valor, mas o javascript tenta ignorar o tipo do dado na comparação

```javascript
console.log(2 == '2') // true
console.log('' == []) // true
console.log(false == 0) // true
```

- Dica: Evitar usar o operador de Equality. Usar sempre o Strict Equals para prevenir possíveis bugs no nosso código (comparações que não deveriam ser verdadeiras acabarem dando true devido a forma de comparação ignorando o tipo do dado)

## Exercícios

- Desafio 1: Precisamos de uma lista somente com os nomes dos diretores de cada filme representado na nossa lista de filmes acima. Crie uma função de nome "getAllDirectorsNames" que receberá um array de filmes como ARGUMENTO, para então retornar esta lista de nomes. Caso o array esteja vazio, a função deverá retornar null

  - Array de Filmes

```javascript
const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  },
  {
    title: '12 Angry Men',
    year: 1957,
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    score: 8.9,
    director: 'Sidney Lumet',
  },
];
```

- Resolução do Desafio 1:

```javascript
// Versão com comentários
function getAllDirectorsNames(moviesList) {
  // Temos um array de filmes (array de OBJETOS) e precisamos transformá-lo em um array de nomes (array de STRINGS) -- Podemos utilizar o método MAP!!

  if (moviesList.length === 0) { // Se o TAMANHO do meu array for zero
    return null;
  }

  const listaDeNomes = moviesList.map((cadaFilme) => {
    // a veariável "cadaFilme" representa cada um dos filmes (cada OBJETO que está dentro do array)
    // console.log(cadaFilme.director);
    // SEMPRE PRECISA RETORNAR O QUE QUEREMOS COLOCAR NO ARRAY NOVO!!
    return cadaFilme.director; // Estou fazendo a callback do map retornar somente a propriedade "director" de cada filme
  });

  return listaDeNomes;
}

// Versão somente com a solução
function getAllDirectorsNames(moviesList) {
  if (moviesList.length === 0) {
    return null; // return da função "getAllDirectorsNames"
  }

  const listaDeNomes = moviesList.map((cadaFilme) => {
    return cadaFilme.director; // Este return é da callback
  });

  return listaDeNomes; // return da função "getAllDirectorsNames"
}

console.log(getAllDirectorsNames(movies)); // Testando nossa função passando nosso array de filmes
console.log(getAllDirectorsNames([])); // Testando nossa função passando um array vazio
```

- Desafio 2: Crie uma função "findMoviesByDirector" que receberá como argumento uma String com o nome de um Diretor, e ela deverá retornar uma lista FILTRADA (olha a dica ;-D) contendo somente o NOME dos filmes que foram dirigidos por este diretor.
  - Caso Não seja encontrado nenhum filme com o nome do diretor informado, devemos retornar a seguinte String: "Nenhum filme encontrado para o diretor <NOME_DO_DIRETOR>"
  - Ex 1: findMoviesByDirector('Henrique Mendes') ---> 'Nenhum filme encontrado para o diretor Henrique Mendes'
  - Ex 2: findMoviesByDirector('Christopher Nolan') ---> 'The Dark Knight'

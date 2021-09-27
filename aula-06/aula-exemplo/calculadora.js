const nomeProjeto = 'Meu projeto calculadora';
console.log(nomeProjeto);

// Forma de fazer funcao antiga
// function soma(num1, num2) {
//   return num1 + num2;
// }

// nova forma arrow Function
// soma
const soma = (num1, num2) => num1 + num2;

// subtracao
const sub = (num1, num2) => num1 - num2;

// multiplicacao
const mult = (num1, num2) => num1*num2;

// divisao 
const div = (num1, num2) => num1 / num2;

module.exports = {
  nomeProjeto,
  soma,
  sub,
  mult,
  div,
}
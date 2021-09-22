// variavel de escopo global
var nome = 'Ivo';
// variavel de escopo fechado
let sobrenome = 'soares';
// nao pode receber nova atribuicao de dados
const profissao = 'professor';


// console.log(nome, sobrenome, profissao);
const retornaNome = (nome) => {
  let sobrenome = 'soares'
  return nome + sobrenome;
}

sobrenome = 'santos';

console.log(retornaNome('maria'));

// Jeito velho
console.log('O nome é' + nome + ' ' + sobrenome + ' e a profissao é' + profissao);

// tamplate literals
console.log(`O nome é ${nome} ${sobrenome} e a profissão é ${profissao}`);
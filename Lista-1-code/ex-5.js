const input = require('readline-sync');

let numero1=input.questionInt("Digite um número: ");
let numero2=input.questionInt("Digite um número: ");
let resultado= (numero1 - numero2) +10;
console.log("O resultado é: ", resultado)
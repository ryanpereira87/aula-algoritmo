const input = require('readline-sync');
let numero1=input.questionInt("Digite um número: ")
let numero2=input.questionInt("Digite um número: ")
let resultado1= numero1 - 3;
let resultado2= numero2 + 2;
let resultado3= (resultado1 + resultado2) - 1;
console.log("O resultado é: ", resultado3)

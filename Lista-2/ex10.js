const input = require('readline-sync');
let numero1= input.questionInt("Digite um número para gerar a tabuada: ");
if(numero1<10)
{let resultado1= numero1 * 1;
let resultado2= numero1 * 2;
let resultado3= numero1 * 3;
let resultado4= numero1 * 4;
let resultado5= numero1 * 5;
let resultado6= numero1 * 6;
let resultado7= numero1 * 7;
let resultado8= numero1 * 8;
let resultado9= numero1 * 9;
let resultado10= numero1 * 10;
console.log("O resultado é: ", resultado1)
console.log("O resultado é: ", resultado2)
console.log("O resultado é: ", resultado3)
console.log("O resultado é: ", resultado4)
console.log("O resultado é: ", resultado5)
console.log("O resultado é: ", resultado6)
console.log("O resultado é: ", resultado7)
console.log("O resultado é: ", resultado8)
console.log("O resultado é: ", resultado9)
console.log("O resultado é: ", resultado10)
}
const input = require('readline-sync');
let numero1= input.questionInt("Digite um número: ")
let resultado= numero1+5
if(resultado>10){
    console.log("O resultado é: ", resultado)
}
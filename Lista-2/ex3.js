const input = require('readline-sync');
let numero1= input.questionInt("Digite um número: ");
let resultado= numero1-10;
if(resultado>3){
    console.log("O resultado é: ",resultado)
}
const input = require('readline-sync');
let numero1= input.questionInt("Digite um número: ")
let numero2= input.questionInt("Digite um número: ")
let numero3= input.questionInt("Digite um número: ")
let resultado1= numero1 + 5;
let resultado2= numero2 + 5;
let resultado3= numero3 + 5;
if(resultado1>10){
    console.log("O resultado1 é: ", resultado1)
}
if(resultado2>10){
    console.log("O resultado2 é: ",resultado2)
}
if(resultado3>10){
    console.log("O resultado3 é: ", resultado3)
}   
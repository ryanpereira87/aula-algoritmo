const input = require('readline-sync');
let numero1=input.questionInt("Digite um número: ");
let numero2=input.questionInt("Digite um número: ");
if(numero1+numero2<20){
    resposta1= numero1*10;
    resposta2= numero2*10;
    console.log("O resultado é: ",resposta1);
    console.log("O resposta é: ", resposta2)
}
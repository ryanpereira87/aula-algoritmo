const input = require('readline-sync');
let n1= input.questionInt("Digite um número: ");
if(n1>10){
    console.log("Número maior que dez.")
}
else{
    console.log("Número menor ou igual a dez.")
}
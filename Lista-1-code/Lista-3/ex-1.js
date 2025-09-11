const input = require('readline-sync');
let n1= input.questionInt("Digite um número: ");
let n2= input.questionInt("Digite um número: ");
if(n1>n2){
    console.log("O resultado é: ", n1)
}
else{
    console.log("O resultado é: ", n2)
}
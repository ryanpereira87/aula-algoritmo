const input = require('readline-sync');
let n1= input.questionInt("Digite um número: ");
let n2= input.questionInt("Digite um número: ");
n1= n1+5 
if(n2>n1){
    console.log("O resultado é: ", n2)
}
else{
    console.log("O resultado é: ", n1)
}
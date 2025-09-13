const input = require('readline-sync');
let n1= input.questionInt("Digite um número: ");
let n2= input.questionInt("Digite um número: ");
if(n1<n2){
    console.log("O resultado 1° é: ",n1);
    console.log("O resultado 2° é: ",n2)
}
else{
    console.log("O resultado 1° é: ",n2);
    console.log("O resultado 2° é: ",n1)
}
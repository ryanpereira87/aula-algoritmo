const input = require("readline-sync");
let n1 = input.questionInt("Digite um número final: ")
for(let i= 0;i<=n1;i++){
    if(i % 2 === 0){
        console.log(i  + " é par");
        
    }
    else{
        console.log(i  + " é ímpar");
    }
}
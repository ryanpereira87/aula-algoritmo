const input= require("readline-sync");
let n1 = input.questionInt("Digite um número para gerar sua tabuada: ");
for(let i= 1; i<=10; i++){
    console.log(i + " X " + n1 + " = " + i*n1);
    
}

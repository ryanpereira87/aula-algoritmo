const input= require("readline-sync");
let n1= input.questionInt("Digite um número para gerar sua tabuada: ");
for(i=1;i<=10;i++){
    t=n1*i
    console.log(`${n1} X ${i} =`,t)
}
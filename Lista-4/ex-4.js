const input= require("readline-sync");
let n1= input.questionInt("Digite um número para gerar a sua tabuada: ");
i=1;
while(i<11){
    t=n1*i;
    console.log(`${n1} X ${i} = ${t}`);
    i++;

}
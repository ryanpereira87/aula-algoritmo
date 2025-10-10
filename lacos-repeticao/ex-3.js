const input= require("readline-sync");
soma=0;
for(i=1;i<=5;i++){
    let n1 =input.questionInt(`Digite o ${i}° número: `);
    soma +=n1
}
console.log("Soma dos 5 números: ",soma);

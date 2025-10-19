const input= require("readline-sync"); 
let soma= 0;
for(let cont= 0;cont<5; cont++ ){
  let n1= input.questionInt("Digite o " + (cont+1) + "º número: " )
  soma += n1;
}
console.log("A soma dos 5 números é: ",soma);

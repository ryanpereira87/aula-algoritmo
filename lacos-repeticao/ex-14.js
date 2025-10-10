const input = require("readline-sync");
v=1
t=0
n1=1
while(n1!== 0){
    n1=input.questionInt(`Digite o Valor da ${v}° compra: `)
       v++
       t += n1;
       console.log("Digite zero para sair!");
       
}
console.log(`O valor total a pagar é: `,t);

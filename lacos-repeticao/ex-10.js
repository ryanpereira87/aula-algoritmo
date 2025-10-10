const input= require("readline-sync");
let n1= input.questionInt("Digite um número: ");
r=1
i=n1
while (i>1) {
      r=r*i;
      i--;
}
console.log(`Fatorial do número ${n1}!= `,r);


   

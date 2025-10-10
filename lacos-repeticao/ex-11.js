const input= require("readline-sync");
let n1= input.questionInt("Digite quantos termos da sequência de Fibonacci você quer ver: ");
a=1;
b=1;
i= 2;
f="1,1";
while(i<n1){
      c=a+b
      f+=","+c;
      a=b
      b=c
      i++
}
console.log(`Sequência de Fibonacci ${n1} termos.`);
console.log(f);


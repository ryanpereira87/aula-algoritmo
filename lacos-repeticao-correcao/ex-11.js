const input= require("readline-sync");
let n1= input.questionInt("Digite a quantidade de termos da sequência de Fibonacci: ")
a=1;
b=1;
console.log("Sequência de Fibonnaci");
if(n1>= 1 || n1>= 2){
   console.log(a);
   console.log(b);
     
}
for(let i=3; i<=n1;i++){
   let c = a + b;
   console.log(c);
   a = b;
   b = c;
}

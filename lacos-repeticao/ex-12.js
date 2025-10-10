const input= require("readline-sync");
let n1= input.questionInt("Digite um número: ");
i=1
div=0
while(i<=n1){
      if(n1 % i === 0){
        div++
      }
      i++
}
if(div === 2){
    console.log(`${n1} é um número primo!`);}
    else{
      console.log(`${n1} NÃO é um número primo!`);
      
    }
    

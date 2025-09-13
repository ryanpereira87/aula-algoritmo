const input = require('readline-sync');
let n1= input.questionInt("Digite um número: ");
let n2= input.questionInt("Digite um número: ");
if(n1>n2){
   n1=n1/2;
   n2=n2*10;
   R=n1+n2;
   if(R % 2 === 0){
    console.log("R é par")
   }
   else{
    console.log("R é impar")
   }
}
else{
    n2=n2/2;
    n1=n1*10;
    R=n2+n1;
    if(R % 2 === 0){
        console.log("R é par")
    }
    else{
        console.log("R é impar")
    }
}


const input= require("readline-sync");
let n1=input.questionInt("Digite um número: ");
while(n1>=5){
    console.log("Número inválido!");
    n1= input.questionInt("Insira outro número novamente: ");
}
if(n1==1 || n1==3){
   n1++;
   while(n1<20){
    console.log(`Resultado ${n1}`);
    n1= n1+2
    
   }
}
else{
    n1=n1+2;
    while(n1<20){
     console.log(`Resultado ${n1}`);
     n1= n1+2
    }
}
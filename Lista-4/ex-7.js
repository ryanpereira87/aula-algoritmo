const input= require("readline-sync");
let n1= input.questionInt("Digite um número: ");
let n2= input.questionInt("Digite outro número: ");
while(n1<=10){
      console.log("Número n1 inválido!");
      n1= input.questionInt("Digite novamente: ")
      
}
while(n2>=5){
   console.log("Número n2 inválido!");
    n2= input.questionInt("Digite novamente: ")
}
console.log("Resultado n1 é: ",n1);
console.log("Resultado n2 é: ",n2);


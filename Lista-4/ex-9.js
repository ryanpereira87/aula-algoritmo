const input= require("readline-sync");
let n1= input.questionInt("Digite um número: ");
while(n1<20){
    console.log("Número inválido!");
    n1= input.questionInt("Insira um número maior que 20: ")
 
}
while(n1>2){
    n1--
    console.log(n1);
    
}
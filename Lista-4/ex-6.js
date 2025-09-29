const input= require("readline-sync");
let n1= input.questionInt("Digite um número: ");
while(n1>=10){
    console.log("Número inválido! Digite novamente.");
    n1= input.questionInt("Digite um número menor que dez: ");
    
}
console.log("Resultado é: ",n1);

    




    

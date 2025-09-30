const input = require("readline-sync");
let n1= input.questionInt("Digite um número: ");
while (5>n1 || 10<n1) {
    console.log("Número ínválido! ");
    n1= input.questionInt("Insira um número entre 5 e 10: ")
}
console.log("Resultado: ",n1);

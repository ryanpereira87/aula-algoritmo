const input = require("readline-sync");
let valor= -1;
let TotalPagar=0;
while (valor !== 0) {
    valor = input.questionFloat("Digite um número (0 para sair):R$");
    TotalPagar= TotalPagar + valor;
}
console.log("Total a pagar = R$",TotalPagar.toFixed(2));

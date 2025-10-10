const input= require("readline-sync");
let n1= input.questionInt("Digite uma senha de quatro números: ");
while (n1<999.9) {
     n1= input.questionInt("Digite uma senha de quatro números: ");
}
while(n1!=1234){
     console.log("SENHA ERRADA!");
     n1= input.questionInt("Dica: quatro números consecutivos cuja soma seja igual a 10: ")
}
console.log("Acesso Permitido!");


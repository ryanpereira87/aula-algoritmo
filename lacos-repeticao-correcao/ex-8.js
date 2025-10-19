const input= require("readline-sync");
let senha = "";
while(senha !== 1234){    
    senha= input.questionInt("Digite sua senha: ")
    console.log("Ela deve ter até 4 algarismos e é consecutiva!");
    
}
console.log("-------------------------------");
console.log("-------Acesso Permitido!--------");
console.log("-------------------------------");
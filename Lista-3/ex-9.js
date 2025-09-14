const input = require('readline-sync');
let n1= input.questionInt("Digite um número: ");
let n2= input.questionInt("Digite um número: ");
let n3= input.questionInt("Digite um número: ");
let n4= input.questionInt("Digite um número: ");
r1= n1+n2;
r2= n3-n4;
r1= r1+r2;
if(r1>10){
    console.log("Resultado maior que dez.")
}
else{
    console.log("Resultado menor ou igual a dez.")
}
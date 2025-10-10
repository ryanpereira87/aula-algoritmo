const input= require("readline-sync");
console.log("(0 para parar)");
let n1= input.questionInt("Digite um número: ");
if(n1 === 0){
    console.log("Nenhum número foi digitado!"); 
}
else{
let max=n1;
let min=n1;
while (true) {
    console.log("(0 para parar)");
    n1 = input.questionInt("Digite outro número: ");
    if(n1===0){break}
    if(n1>max){
        max=n1
    }
    if(n1<min){
        min=n1
    }
    
}
console.log(`Maior número: ${max} `);
console.log(`Menor número: ${min}`);
}
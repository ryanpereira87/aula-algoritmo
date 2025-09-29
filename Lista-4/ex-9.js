const input= require("readline-sync");
let n1= input.questionInt("Digite um número: ");
if(n1>20){
    while(n1>2){
        n1--;
        console.log(`Resultado ${n1}`);
        
    }
}
else{
    console.log("Digite outro número");
    
}
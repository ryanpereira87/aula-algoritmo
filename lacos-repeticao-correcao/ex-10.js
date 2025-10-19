const input= require("readline-sync");
let n1= input.questionInt("Digite um número para gerar seu fatorial: ");
fatorial=1;
if(n1 === 0){
    fatorial=1   
}
else{
    for(i = n1;i>1;i--){
        fatorial= fatorial*i        
    } 
}
         console.log(`${n1}! = `,fatorial);

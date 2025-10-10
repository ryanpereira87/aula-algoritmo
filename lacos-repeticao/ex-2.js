const input= require("readline-sync");
let f= input.questionInt("Digite um número final: ");
qtd=1
f--
for(i=1;i<=f;i++){
    if(i % 2 === 0){
        console.log(`Resultado ${qtd}°: ${i} é PAR`);
    }
    else{
        console.log(`Resultado ${qtd}°: ${i} é IMPAR`);
        
    }
    qtd++
}
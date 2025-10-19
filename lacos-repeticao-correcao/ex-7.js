const input= require("readline-sync");
let n1= -1;
let max= null;
let min= null;
while(n1 !== 0){
    n1 = input.questionInt("Digite um número (0 para sair): ");
    if(n1!==0){
        if(max === null || n1> max){
            max=n1;
        }
         if(min === null || n1< min){
            min=n1;
        }
    }
}
if(max === null){
    console.log("Nenhum número foi digitado!");
}
else{
    console.log(`O maior número é: `,max);
     console.log(`O menor número é: `,min);

}
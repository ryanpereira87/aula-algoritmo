const input = require("readline-sync");
let n1 = -1;
let sum= 0;
let cont = 0;
let average=0;
let max=null;
let min=null;
while(n1 !== 0){
    n1 =input.questionInt("Digite um número (0 para sair): ");
    if (n1 !== 0) {
        sum +=n1;
        cont++;
        if(min === null || n1 < min ){
            min= n1
        }
        if(max === null || n1 > max ){
            max= n1
        }
    }
}
if(cont > 0){
  average = sum/ cont;
  console.log("Quantidade de número(s) digitado(s): ",cont);
  console.log("Média: ",average);
  console.log("Maior: ",max);
  console.log("Menor: ",min);
    
}
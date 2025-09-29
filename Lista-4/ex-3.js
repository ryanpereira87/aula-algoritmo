const input = require('readline-sync');
let n1=input.questionInt("Digite um número: ");
let n2=input.questionInt("Digite outro número: ");
if(n2>n1){
  n1++;
  while(n2>n1){
    console.log(`Resultado: ${n1}`);
    n1++;
  }
}
else{
  n2++;
  while(n2<n1){
    console.log(`Resultado: ${n2}`);
    n2++;
  }
}

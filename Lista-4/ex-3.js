const input = require('readline-sync');
let n1=input.questionInt("Digite um número: ");
let n2=input.questionInt("Digite outro número: ");
for(n1;n1<=n2;n2){
   if(n1<=n2) {console.log("O resultado é ",n1);
    n1++
    
}
else if(n2<=n1){
    n2++
  console.log("O resultado é ",n2);
}
else{
    console.log("O resultado é: ",n2);
    n2++
}
}

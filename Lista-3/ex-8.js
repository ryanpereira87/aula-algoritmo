const input = require('readline-sync');
let n1= input.questionInt("Digite um número: ");
if(n1>10){
    n1=n1+5
    console.log("O resultado é: ",n1)
}
else{ 
    n1=n1+20
    if(n1>25){
        console.log("O resultado é: ",n1)

    }
    
}
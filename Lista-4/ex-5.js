const input= require("readline-sync");
let n1= input.questionInt("Digite um número: ");
let n2= input.questionInt("Digite outro número: ");
let n3= input.questionInt("Digite mais um número: ");
if(n1>n2){
    if(n1>n3){
        if(n3>n2){
            n3++
            while(n1>n3){
            console.log(`Resultado: ${n3}`);
            n3++;
            }
        }
        else{
            n2++
            while(n1>n2){
                console.log(`Resultado: ${n2}`);
                n2++
            }
        }
    }
    else{
        n1++
        while(n3>n1){
            console.log(`Resultado: ${n1}`);
            n1++
            
        }
    }
}
else{
    if(n2>n3){
        if(n1>n3){
            n1++
            while(n2>n1){
                console.log(`Resultado: ${n1}`);
                n1++   
            }
        }
        else{
            n3++
            while(n2>n3){
            console.log(`Resultado: ${n3}`);
            n3++;
            }
        }
    }
    else{
        n2++
        while(n3>n2){
        console.log(`Resultado: ${n2}`);
        n2++
        }
    }
}
 
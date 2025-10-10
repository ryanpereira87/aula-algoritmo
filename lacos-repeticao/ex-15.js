const input= require("readline-sync");
console.log(`===== MENU PRINCIPAL =====
1 - Calcular Tabuada
2 - Verificar Número Primo
3 - Gerar Sequência de Fibonacci
4 - Calcular Fatorial
0 - Sair
==========================`);
op = input.questionInt("Selecione uma opção: ")
if(op === 1 ||op === 2 || op === 3 || op === 4 || op === 0){
  if(op === 1){
    n1 = input.questionInt("Digite um número para gerar sua tabuada: ");
    for(i=1;i<=10;i++){
        t=n1*i;
        console.log(`${n1} X ${i} = `,t);
        
    }
    console.log("Encerrando o programa... Obrigado!");
    
  }
  if(op === 2){
    n1 = input.questionInt("Digite um número: ");
    i=1;
    div=0
    while(i<=n1){
     if(n1 % i === 0){
        div++
     }
     i++
    }
    if(div === 2){
        console.log(`${n1} é um número primo!`);
        
    }
    else{
        console.log(`${n1} NÃO é um número primo!`);
        
    }
  console.log("Encerrando o programa... Obrigado!");
  }
  if(op === 3){
    n1 = input.questionInt("Digite quantos termos da sequência de Fibonacci você quer ver: ");
    a=1;
    b=1;
    i=2;
    f="1,1";
    while(i<n1){
        c=a+b 
        f+=","+c
        a=b
        b=c
        i++
  }
  console.log(`Sequência de Fibonacci ${n1} termos`);
  console.log(f);
 console.log("Encerrando o programa... Obrigado!");
  
  }
  if(op === 4){
    n1= input.questionInt("Digite um número para calcular seu fatorial: ");
    r=1
    i=n1
    while(i>1){
         r=r*i
         i--
    } 
    console.log(`Fatorial do número ${n1}!= `,r);
    console.log("Encerrando o programa... Obrigado!");

  }
  if(op === 0){
    console.log("Encerrando o programa... Obrigado!");

  }
}
else{
    console.log("❌ Opção Inválida! ❌");
    
}
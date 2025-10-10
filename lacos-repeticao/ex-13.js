const input= require("readline-sync");
let n1= input.questionInt("Digite um número: ");
console.log("0 para sair");
qtd=0;
sum=0;
max=n1;
min=n1;
while(n1!==0){
        sum+=n1;
        qtd++
        if(n1>max){
         max=n1
        }
        if(n1<min){
          min=n1
        }
   
   n1 = input.questionInt("Digite outro número: ");
   console.log("0 para sair");
}
if(qtd>0){
    med= sum/qtd;
    console.log(`Quantidade: ${qtd}`);
    console.log(`Média: ${med}`);
    console.log(`Maior: ${max}`);
    console.log(`Menor: ${min}`);    
}
else{
    console.log("Nenhum número foi digitado!");
    
}
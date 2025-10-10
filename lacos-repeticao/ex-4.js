const input= require("readline-sync");
let n1= input.questionInt("Digite um número: ");
qtd=1
while(n1>0){
    console.log(`Resultado ${qtd}°: `,n1);
    n1--
    qtd++
}
while(n1<1){
    console.log(`Resultado ${qtd}°: `,n1);
    n1++
    qtd++
}
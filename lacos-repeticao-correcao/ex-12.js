const input= require("readline-sync");
let n1= input.questionInt("Digite um número: ");
let primo= true;
if(n1<=1){
    primo= false
}
else{
    for(let i=2; i<n1;i++){
        if(n1 % i === 0){
            primo=false;
          break;
        }
    }
}
if(primo){
    console.log("O número " + n1 + " é primo!");

}
else{
  console.log("O número " + n1 + " não é primo!");

}
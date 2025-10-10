const input= require("readline-sync");
let p= input.question("Digite uma palavra: ");
cont=0
i=0
while(i<p.length){
    let l= p[i].toLowerCase();
    if("aeiouéúóáí".includes(l)){
        cont++
    }
    i++
}
console.log(`A palavra "${p}" tem ${cont} vogal(is)!`);

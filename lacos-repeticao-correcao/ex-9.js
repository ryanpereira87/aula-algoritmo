const input = require("readline-sync");
let p= input.question("Digite uma palavra: ").toLowerCase();
let cont= 0;
for(let i=0;i<p.length;i++){
   letra = p[i]
   if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    cont++
   }
}
console.log(`A palavra "${p}" tem ${cont} vogal(is)`);

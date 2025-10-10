const input= require("readline-sync");
qtd= input.questionInt("Digite a quantidade de alunos: ");    
for(i=1;i<=qtd;i++){
    console.log(`Aluno ${i}°: `);
let n1= input.questionInt("Digite a 1° nota: ");
let n2= input.questionInt("Digite a 2° nota: ");
let n3= input.questionInt("Digite a 3° nota: ");
    let m= ((n1+n2+n3)/3).toFixed(2);
    if(m>=7){
        console.log(`Média: ${m} → Aprovado ✅`);
    }
    else{
        console.log(`Média ${m} → Reprovado ❌`);
        
    }
}



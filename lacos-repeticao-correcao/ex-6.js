const input= require("readline-sync");
let qdtalunos= input.questionInt("Digite a quantidade de alunos: ");
for(let aluno= 0;aluno<qdtalunos;aluno++){
    console.log("------------------------------");
    console.log(" Aluno: " + (aluno + 1));
    console.log("------------------------------");
    somaNotas=0
    for(prova= 0; prova<3; prova++){
    let nota= input.questionInt(`Digite a nota da prova ${prova + 1 }º: `)
    somaNotas+=nota
    }
    let media =  somaNotas/3;
    if(media>=7){
        console.log("Aluno",aluno + 1, "Média = ",media, "Aprovado!");
        
    }
    else{
        console.log("Aluno",aluno + 1, "Média = ",media, "Reprovado!");
        
    }
}
console.log("------------------------------");

const input = require("readline-sync");

let alunos = [];
// Adicionando os alunos
function adicionarAluno() {
  let qtd = input.questionInt("Digite a quantidade de alunos: ");
  for (let i = 0; i < qtd; i++) {
    console.log("Cadastro do aluno(a)", i + 1, "°");
    nome = input.question("Digite o nome do(a) aluno(a): ");
    idade = input.questionInt("Digite a idade dele(a): ");
    nota1 = input.questionInt("Digite a 1° nota: ");
    nota2 = input.questionInt("Digite a 2° nota: ");
    alunos.push({ nome, idade, nota1, nota2 });
  }
}

// Mostrando os alunos
function mostrarAlunos() {
  for (const todosAlunos of alunos) {
    console.log(
      `Nome: ${todosAlunos.nome} | Idade: ${todosAlunos.idade} | 1° Nota: ${todosAlunos.nota1} | 2° Nota: ${todosAlunos.nota2} `
    );
  }
  console.log("-----------------------------------------------");
}

// Mostrando os alunos aprovados

function aprovados() {
  for (let i = 0; i < alunos.length; i++) {
    media = (alunos[i].nota1 + alunos[i].nota2) / 2;
    if (media >= 6) {
      console.log(
        "Parabéns 🎉 -",
        alunos[i].nome,
        "- Você foi aprovado(a): ",
        media
      );
    } else {
      console.log(
        "Infelizmente 😞 -",
        alunos[i].nome,
        "- Você NÃO foi aprovado(a): ",
        media
      );
    }
  }
}
adicionarAluno();
mostrarAlunos();
aprovados();

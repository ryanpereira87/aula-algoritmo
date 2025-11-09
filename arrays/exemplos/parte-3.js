const input = require("readline-sync");
// 1. Faça um programa que receba um array de números e mostre a soma de todos.

// let quant = input.questionInt("Digite a quantidade de número(s): ");
// let array = [];
// let sum = 0;
// for (let i = 0; i < quant; i++) {
//   let num = input.questionInt("Digite " + (i + 1) + "° número: ");
//   array.push(num);
//   sum += +num;
// }
// console.log("Soma total: ", sum);

// 2. Dado um array de nomes, mostre quantos nomes começam com a letra "A".

// let quant = input.questionInt("Digite a quantidade de nome(s): ");
// let array = [];
// let cont = 0;
// for (let i = 0; i < quant; i++) {
//   let nome = input.question("Digite " + (i + 1) + "° nome: ");
//   array.push(nome);
//   if (nome[0].toLowerCase() === "a") {
//     cont++;
//   }
// }
// console.log("Quandidade de nome(s) que começa(m) com a letra A:", cont);

// 3. Crie um array de idades e mostre a média delas.

// let quant = input.questionInt("Digite a quatidade de idade(s): ");
// let array = [];
// let sum = 0;
// for (let i = 0; i < quant; i++) {
//   idade = input.questionInt(`Digite ${1 + i}° idade: `);
//   array.push(idade);
//   sum += idade;
// }
// media = sum / quant;
// console.log(`Média de idade(s):`, media);

// 4. Faça um array de objetos representando alunos com notas. Mostre apenas os que têm nota maior ou igual a 6.

// let quant = input.questionInt("Digite a quantidade de aluno(s): ");
// let alunos = [];
// let cont = 0;
// for (let i = 0; i < quant; i++) {
//   let nome = input.question("Digite o nome do " + (i + 1) + "° aluno: ");
//   console.log("-------------------------------");
//   let nota = input.questionInt("Digite a nota do " + nome + ": ");
//   console.log("-------------------------------");
//   alunos.push({ nome: nome, nota: nota });
//   if (nota >= 6) {
//     cont++;
//   }
// }
// console.log("-------------------------------");
// console.log("Quantidade de alunos com nota maior ou igual a 6:", cont);
// console.log("-------------------------------");
// for (i = 0; i < alunos.length; i++) {
//   if (alunos[i].nota >= 6) {
//     console.log(`Nome: ${alunos[i].nome}, Nota: ${alunos[i].nota} `);
//   }
// }

// 5. Crie um array de objetos com pessoas (nome e cidade). Mostre apenas as pessoas que moram em “São Paulo”.

// let quant = input.questionInt(
//   "Digite a quantidade de pessoa(s) que você quer digitar: "
// );
// pessoas = [];
// for (let i = 0; i < quant; i++) {
//   let nome = input.question("Digite um nome: ");
//   let cidade = input.question("Digite uma cidade: ");
//   let pessoa = { nome: nome, cidade: cidade };
//   pessoas.push(pessoa);
// }
// for (i = 0; i < pessoas.length; i++) {
//   if (pessoas[i].cidade.toLowerCase() === "são paulo") {
//     console.log("-------------------------------------");
//     console.log(` ${pessoas[i].nome} mora em ${pessoas[i].cidade}`);
//     console.log("-------------------------------------");
//   }
// }

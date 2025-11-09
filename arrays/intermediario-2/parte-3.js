const input = require("readline-sync");

// 1 -Crie uma função aprovados que receba um array de alunos, onde cada aluno tem:

//     nome
//     nota1
//     nota2
// Calcule a média e mostre os alunos com média maior ou igual a 6.

// let alunos = [
//   { nome: "Paulo", nota1: 7, nota2: 5 },
//   { nome: "Caio", nota1: 4, nota2: 9 },
//   { nome: "Silvo", nota1: 3, nota2: 5 },
//   { nome: "Qino", nota1: 9, nota2: 2 },
//   { nome: "Marcos", nota1: 6, nota2: 6 },
//   { nome: "Fernanda", nota1: 10, nota2: 8 },
//   { nome: "Susan", nota1: 3, nota2: 8 },
//   { nome: "Carlota", nota1: 10, nota2: 9 },
// ];
// function alunosAprovados() {
//   for (let i = 0; i < alunos.length; i++) {
//     media = (alunos[i].nota1 + alunos[i].nota2) / 2;
//     if (media >= 6) {
//       console.log(
//         "Parabéns ," + alunos[i].nome + ", você foi Aprovado(a)! Sua média:",
//         media
//       );
//     }
//   }
// }
// alunosAprovados();

// 2 - Crie uma função totalCompra que receba um array de pedidos, onde cada pedido tem:

//     produto
//     quantidade
//     valorUnitario A função deve retornar o valor total da compra.

// let pedidos = [
//   { produto: "Caderno", quantidade: 102, valorUnitario: 7.99 },
//   { produto: "Lápis", quantidade: 50, valorUnitario: 1.99 },
//   { produto: "Borracha", quantidade: 70, valorUnitario: 0.5 },
//   { produto: "Caneta", quantidade: 200, valorUnitario: 1 },
//   { produto: "Livro", quantidade: 30, valorUnitario: 39.99 },
//   { produto: "Apontador", quantidade: 60, valorUnitario: 1.5 },
//   { produto: "Mochila", quantidade: 10, valorUnitario: 99.99 },
//   { produto: "Estojo", quantidade: 90, valorUnitario: 4.99 },
// ];
// function totalCompra() {
//   somaTotal = 0;
//   for (let i = 0; i < pedidos.length; i++) {
//     somaTotal += pedidos[i].quantidade * pedidos[i].valorUnitario;
//   }
//   console.log(`Valor Total:`, somaTotal.toFixed(2));
// }
// totalCompra();

// 3 - Faça uma função contarPorCidade que receba um array de pessoas com nome e cidade. A função deve mostrar quantas pessoas moram em cada cidade.

// let pessoas = [
//   { nome: "Mario", cidade: "São Paulo" },
//   { nome: "Luigi", cidade: "Rio de Janeiro" },
//   { nome: "Leno", cidade: "Vila Velha" },
//   { nome: "Morata", cidade: "São Paulo" },
//   { nome: "Amora", cidade: "Sorocaba" },
//   { nome: "Alan", cidade: "Mocca" },
//   { nome: "Wilma", cidade: "Diadema" },
//   { nome: "Atenas", cidade: "Vila Velha" },
//   { nome: "Matheus", cidade: "Rio de Janeiro" },
// ];
// function contarPorCidade() {
//   let cont = {};
//   for (const contPessoas of pessoas) {
//     let city = contPessoas.cidade;
//     if (cont[city]) {
//       cont[city]++;
//     } else {
//       cont[city] = 1;
//     }
//   }
//   for (const cidade in cont) {
//     console.log(cidade + ":", cont[cidade], "pessoa(s)");
//   }
// }
// contarPorCidade();

// 4 - Crie uma função calcularFolha que receba um array de funcionários (com nome e salário) e retorne o valor total da folha de pagamento.

// let funcionários = [
//   { nome: "Alvin Fêlix", salário: 1700 },
//   { nome: "Calvin Palmeiras", salário: 5100 },
//   { nome: "Walace Green", salário: 3000 },
//   { nome: "Dalva da Cruz", salário: 2000 },
//   { nome: "Reginaldo Rossi", salário: 7000 },
//   { nome: "Itamar Joker", salário: 2500 },
//   { nome: "Valdemiro Dízimo", salário: 10000 },
// ];
// function calcularFolha() {
//   somaFolha = 0;
//   for (let i = 0; i < funcionários.length; i++) {
//     somaFolha += funcionários[i].salário;
//   }
//   console.log("Soma Total: R$", somaFolha.toFixed(2));
// }
// calcularFolha();

// 5 - Faça uma função buscarAluno que receba um array de alunos e o nome de um aluno. A função deve retornar o objeto do aluno ou uma mensagem informando que ele não foi encontrado.

// let aluno = [
//   { nome: "Atenas" },
//   { nome: "Sócrates" },
//   { nome: "Platão" },
//   { nome: "Zacarias" },
//   { nome: "Zenão" },
//   { nome: "Diógenes" },
//   { nome: "Kant" },
//   { nome: "Aristóteles" },
//   { nome: "pitágoras" },
// ];
// function buscarAluno() {
//   let newAluno = input.question("Digite um nome: ");
//   for (let i = 0; i < aluno.length; i++) {
//     if (newAluno === aluno[i].nome) {
//       return aluno[i];
//     }
//   }
//   console.log("Aluno não encontrado:", newAluno);
// }
// let resultado = buscarAluno();
// console.log(resultado);

// 6 - Crie uma função filtrarProdutosCaros que receba um array de produtos e retorne apenas os que custam mais de R$100,00.

// let produtos = [
//   { nome: "Iphone 8s", valor: 7000 },
//   { nome: "Nintendo Switch 2", valor: 4000 },
//   { nome: "Camisa do Santos", valor: 30 },
//   { nome: "Mouse Gamer", valor: 150 },
//   { nome: "Smart TV 60 Polegadas", valor: 15000 },
//   { nome: "SSD 1TB", valor: 500 },
//   { nome: "Pen Drive 32GB", valor: 50 },
//   { nome: "Skate", valor: 88 },
//   { nome: "Mini Ventilador", valor: 55 },
//   { nome: "Teclado Mecânico", valor: 160 },
// ];
// function filtrarProdutosCaros() {
//   for (let i = 0; i < produtos.length; i++) {
//     if (produtos[i].valor > 100) {
//       console.log(
//         "Nome:",
//         produtos[i].nome,
//         ", Valor:",
//         produtos[i].valor.toFixed(2)
//       );
//     }
//   }
// }
// filtrarProdutosCaros();

// 7 - Crie uma função estatisticasNotas que receba um array de notas e retorne um objeto com:

//     média das notas
//     maior nota
//     menor nota

// let notas = [
//   { nota1: 6.5, nota2: 5.5 },
//   { nota1: 3.2, nota2: 7 },
//   { nota1: 8, nota2: 4.2 },
//   { nota1: 0, nota2: 6 },
//   { nota1: 7.2, nota2: 8.1 },
//   { nota1: 6.5, nota2: 5.5 },
//   { nota1: 3.3, nota2: 10 },
//   { nota1: 7, nota2: 8.2 },
// ];
// function estatisticasNotas() {
//   todasNotas = [];
//   for (let i = 0; i < notas.length; i++) {
//     todasNotas.push(notas[i].nota1, notas[i].nota2);
//   }
//   let soma = 0;
//   for (i = 0; i < todasNotas.length; i++) {
//     soma += todasNotas[i];
//   }
//   mediaGeral = soma / todasNotas.length;
//   let maiorNota = Math.max(...todasNotas);
//   let menorNota = Math.min(...todasNotas);

//   return {
//     mediaGeral: mediaGeral.toFixed(2),
//     maiorNota,
//     menorNota,
//   };
// }
// let resultado = estatisticasNotas();
// console.log(resultado);

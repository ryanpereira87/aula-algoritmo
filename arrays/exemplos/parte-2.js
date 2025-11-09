const input = require("readline-sync");
// 1. Crie um array chamado alunos, onde cada elemento é um objeto com:

// let alunos = [
//   {
//     nome: "Marcos Lima ",
//     idade: 15,
//   },
//   {
//     nome: "Josué Souza",
//     idade: 20,
//   },
// ];
// console.log(alunos[1].nome);

// // 2. Crie um array produtos com 3 objetos contendo:

// let produtos = [
//   { nome: "Bola", preço: 20 },
//   { nome: "Televisão", preço: 800 },
//   { nome: "Computador", preço: 1500 },
// ];
// console.log(
//   "Produto mais caro:",
//   produtos[2].nome,
//   "| Preço:",
//   produtos[2].preço
// );

// // 3. Faça um array livros com 3 objetos (título e autor). Mostre todos os títulos usando um for.

// let livros = [
//   { Título: "Sítio do Picapau Amarelo ", Autor: "Monteiro Lobato" },
//   { Título: "O Alquimista ", Autor: "Paulo Coelho" },
//   { Título: "O Cortiço ", Autor: "Aluíso de Azevedo" },
// ];
// for (i = 0; i <= 2; i++) {
//   console.log("Título: ", livros[i].Título);
//   console.log("Autor: ", livros[i].Autor);
//   console.log("-----------------------------");
// }
// // 4. Crie um array carros, onde cada carro tem:

// let carros = [
//   { marca: "FIAT", modelo: "TORO", ano: 2025 },
//   { marca: "Ford", modelo: "Mustang", ano: 1987 },
//   { marca: "BDY", modelo: "King", ano: 2025 },
//   { marca: "Honda", modelo: "City", ano: 2024 },
//   { marca: "Toyota", modelo: "Hylux", ano: 2020 },
// ];
// for (i = 0; i <= 4; i++) {
//   console.log(`Modelo da ${carros[i].marca}:`, carros[i].modelo);
//   console.log("---------------------------");
// }

// // 5. Crie um array usuarios com 4 objetos, cada um com:

// let usuários = [
//   { nome: "Bartolomeu Costa", email: "bartolomeu@email.com.br", idade: 15 },
//   { nome: "Rosalina Lopes", email: "rosalina@email.com.br", idade: 21 },
//   { nome: "Tício Pinto", email: "ticio@email.com.br", idade: 18 },
//   { nome: "Maria Ferreira", email: "maria@email.com.br", idade: 19 },
// ];
// for (i = 0; i <= 3; i++) {
//   if (usuários[i].idade > 18) {
//     console.log(usuários[i].idade);
//   }
// }

// // 6. Crie um array pedidos com 3 objetos:

// let pedidos = [
//   { produto: "Bola ", quantidade: 5, valorUnitario: 6.9 },
//   { produto: "Meia ", quantidade: 15, valorUnitario: 2.9 },
//   { produto: "Chuteira ", quantidade: 10, valorUnitario: 156.9 },
// ];
// for (i = 0; i <= 2; i++) {
//   total = pedidos[i].quantidade * pedidos[i].valorUnitario;
//   console.log(`Valor Total da ${pedidos[i].produto}: R$`, total.toFixed(2));
// }

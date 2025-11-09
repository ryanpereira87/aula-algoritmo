const input = require("readline-sync");

// 1 - Crie uma função chamada mostrarNomes que receba um array de nomes e mostre cada nome no console.

// function mostrarNomes() {
//   let nomes = [
//     "Luan",
//     "Vitória",
//     "Santana",
//     "Júlia",
//     "Enzo",
//     "Rosa",
//     "Gusttavo",
//   ];
//   nomes.push("Chaves");
//   for (let i = 0; i < nomes.length; i++) {
//     console.log("Nome " + (i + 1) + "° :", nomes[i]);
//   }
//   return;
// }
// mostrarNomes();

// 2 - Crie uma função chamada somarNumeros que receba um array de números e retorne a soma de todos.

// function somarNumeros() {
//   numeros = [2, 8, 7, 89, 4, 14, 6, 17, 30, 6, 4, 60, 0, 4814, 44];
//   soma = 0;
//   for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i];
//   }
//   console.log("Soma de todos os números:", soma);
//   return soma;
// }
// somarNumeros();

// 3 - Faça uma função mediaNotas que receba um array com 4 notas e retorne a média.

// notas = [];
// for (let i = 0; i < 4; i++) {
//   nota = input.questionInt("Digite a " + (i + 1) + "° nota: ");
//   notas.push(nota);
// }
// function mediaNotas() {
//   let somaTotal = 0;
//   for (let i = 0; i < notas.length; i++) {
//     somaTotal += notas[i];
//   }
//   let media = somaTotal / 4;

//   return media;
// }
// let media = mediaNotas();
// console.log("Média: ", media);

// 4 - Crie uma função maiorNumero que receba um array de números e retorne o maior valor.

// numeros = [
//   1, 9, 7, 42, 11, 567, 1, 4, 7, 91, 200, 177, 946, 740, 911, 12, 788, 445,
// ];
// numeros.unshift(10000);
// numeros.push(3000000);
// function maiorNumero() {
//   let maior = numeros[0];
//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] > maior) {
//       maior = numeros[i];
//     }
//   }
//   return maior;
// }
// let resultado = maiorNumero();
// console.log("Maior valor: ", resultado);

// 5 - Faça uma função buscarNome que receba um array de nomes e um nome a ser buscado. Ela deve retornar true se o nome estiver na lista e false caso contrário.

// let nomes = [
//   "Ryan",
//   "Homer",
//   "Fry",
//   "Quico",
//   "Guga",
//   "Fabrício",
//   "Samara",
//   "Lua",
// ];
// function buscarNome(listaNomes, nomeBuscado) {
//   for (let i = 0; i < listaNomes.length; i++) {
//     if (listaNomes[i] === nomeBuscado) {
//       return true;
//     }
//   }
//   return false;
// }
// let pessoa = input.question("Digite seu nome: ");
// if (buscarNome(nomes, pessoa)) {
//   console.log("Nome Disponível!", true);
// } else {
//   console.log("Nome Indisponível!", false);
// }

// 6 - Crie uma função contarPares que receba um array de números e conte quantos são pares.

// let numeros = [
//   2, 57, 90, 7, 2561, 21, 6, 15, 907, 7, 0, 1, 26, 4, 697, 1, 78, 9, 10, 4, 44,
//   3, 5, 6, 7, 8, 947,
// ];
// qtd = 1;
// numeros.unshift(720);
// numeros.push(360);
// function contarPares() {
//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//       console.log("Número par " + qtd + "° : ", numeros[i]);
//       qtd++;
//     }
//   }
//   return;
// }
// contarPares();

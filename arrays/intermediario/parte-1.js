const input = require("readline-sync");

// 1. Crie um array com 8 números inteiros. Faça um laço que mostre apenas os números maiores que 5.

// let numeros = [7, 8, 9, 12, -5, -9, 10, 2];
// cont = 1;
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] > 5) {
//     console.log(+cont + "° Número maior que 5: ", numeros[i]);
//     cont++;
//   }
// }

// 2. Faça um array com 10 números. Conte quantos números pares existem nesse array.

// let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// cont = 1;
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     console.log(`${cont}° Número par: `, numeros[i]);
//     cont++;
//   }
// }

// 3. Crie um array com os nomes de 6 cidades. Peça para o aluno mostrar apenas as cidades que possuem mais de 5 letras.

// let cidades = ["Sorocaba", "Recife", "Cótia", "Lima", "Cuiabá", "Mossoró"];
// cont = 1;
// for (let i = 0; i < cidades.length; i++) {
//   if (cidades[i].length > 5) {
//     console.log(`${cont}° cidade com mais de cinco letras: `, cidades[i]);
//     cont++;
//   }
// }

// 4. Faça um array notas com 5 números. Calcule a média das notas e exiba se o aluno foi aprovado ou reprovado (média ≥ 6).

// let array = [];
// cont = 0;
// media = 5;
// for (let i = 0; i < media; i++) {
//   notas = input.questionInt(`Digite ${i + 1}° nota: `);
//   array.push(notas);
//   cont += notas;
// }
// sum = cont / media;
// if (sum >= 6) {
//   console.log(`Aluno APROVADO: `, sum);
// } else {
//   console.log(`Aluno REPROVADO: `, sum);
// }

// 5. Crie um array com 5 números. Mostre o maior e o menor número contidos no array.

// let array = [];
// for (let i = 0; i < 5; i++) {
//   numeros = input.questionInt("Digite " + (i + 1) + "° número: ");
//   array.push(numeros);
// }
// let maiorNumero = array[0];
// let menorNumero = array[0];
// for (i = 1; i < array.length; i++) {
//   if (array[i] > maiorNumero) {
//     maiorNumero = array[i];
//   }
//   if (array[i] < menorNumero) {
//     menorNumero = array[i];
//   }
// }
// console.log(`Maior Número:`, maiorNumero);
// console.log(`Menor Número:`, menorNumero);

// 6. Faça um programa que receba um array de 6 nomes e uma variável busca. Mostre se o nome digitado em busca está ou não dentro do array.

// array = ["nonato", "aquarela", "morata", "ryan", "elizabete", "juliana"];
// busca = input.question("Digite o nome que deseja buscar: ");
// if (array.includes(busca)) {
//   console.log("o Nome " + busca + " está dentro do array: ");
// } else {
//   console.log("Nome " + busca + " não está dentro do array! ");
// }

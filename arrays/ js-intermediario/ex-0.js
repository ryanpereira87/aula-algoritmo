const input = require("readline-sync");

// Exercício 1
// Criar uma função somaArray(numeros) que recebe um array de números e retorna a soma.

// function somaArray(numeros = []) {
//   qtd = input.questionInt("Digite a qtd de números que você quer somar: ");
//   soma = 0;
//   if (qtd > 0) {
//     for (let i = 0; i < qtd; i++) {
//       let number = input.questionInt("Digite o " + (i + 1) + "° número: ");
//       numeros.push(number);
//       soma += numeros[i];
//     }
//   }
// }
// somaArray();
// console.log("Soma do(s) número(s): ", soma);

// Exercício 2
// Dado o array de objetos alunos = [{nome: "A", nota: 7}, {nome: "B", nota: 5}], criar função aprovados(alunos) que
// retorna um array com os nomes dos alunos com nota >= 6.

// let alunos = [
//   { nome: "Lucas", nota: 4 },
//   { nome: "Fred", nota: 7 },
//   { nome: "Vilma", nota: 9 },
//   { nome: "Barney", nota: 10 },
//   { nome: "Oscar", nota: 3 },
//   { nome: "Gepeto", nota: 8 },
//   { nome: "Dororo", nota: 6 },
// ];
// function aprovados() {
//   for (const notaAlunos of alunos) {
//     if (notaAlunos.nota >= 6) {
//       console.log(`Aluno: ${notaAlunos.nome} | Nota: ${notaAlunos.nota}`);
//     }
//   }
// }
// aprovados();

// Exercício 3
// Com base no pedido do exemplo integrado, criar função contarItens(pedido) que retorna um objeto com a quantidade por nome (mesmo formato do resumo).

// let produtos = [
//   { id: 1, nome: "Teclado", preco: 50 },
//   { id: 2, nome: "Mouse", preco: 30 },
//   { id: 3, nome: "Monitor", preco: 250 },
//   { id: 4, nome: "Gabinete", preco: 100 },
//   { id: 5, nome: "SSD de 1TB", preco: 500 },
// ];

// let pedido = [];
// function mostrarProdutos() {
//   console.log("------------Produtos----------------");
//   for (const produto of produtos) {
//     console.log(
//       `ID: ${produto.id} - Nome: ${
//         produto.nome
//       } - Preço: ${produto.preco.toFixed(2)}`
//     );
//   }
// }
// mostrarProdutos();

// function adicionarAopedido(id) {
//   for (const addProdutos of produtos) {
//     if (addProdutos.id === id) {
//       pedido.push(addProdutos);
//       console.log(`Produto ${addProdutos.nome} adicionado.`);
//       return;
//     }
//   }
//   console.log("Produto não encontrado!");
// }
// function contarItens(pedido) {
//   let resumo = {};
//   for (const item of pedido) {
//     if (resumo[item.nome]) {
//       resumo[item.nome].qtd++;
//     } else {
//       resumo[item.nome] = { qtd: 1 };
//     }
//   }
//   return resumo;
// }
// adicionarAopedido(1);
// adicionarAopedido(5);
// adicionarAopedido(5);
// console.log(contarItens(pedido));

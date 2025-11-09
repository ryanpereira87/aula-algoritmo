const input = require("readline-sync");

// 1. Crie um array pessoas com 5 objetos, cada um contendo:
//     nome
//     idade
//     profissao

// Mostre o nome de quem tem mais de 30 anos.

// array = [
//   { nome: "Lucas", idade: 37, profissão: "Sapateiro " },
//   { nome: "Marta", idade: 32, profissão: "Professora " },
//   { nome: "Gabriela", idade: 44, profissão: "Vendedora " },
//   { nome: "Flávio", idade: 22, profissão: "Analista de T.I" },
//   { nome: "Caio", idade: 33, profissão: "Mêcanico " },
// ];
// for (let i = 0; i < array.length; i++) {
//   if (array[i].idade > 30) {
//     console.log(array[i].nome + " =", array[i].idade);
//   }
// }

// 2. Faça um array produtos, com 4 objetos contendo:
//     nome
//     preco
//     estoque

// Mostre apenas os produtos com estoque acima de 10 unidades.

// produtos = [
//   { nome: "Lápis", preço: 9, estoque: 140 },
//   { nome: "Boracha", preço: 5, estoque: 30 },
//   { nome: "Livro", preço: 300, estoque: 10 },
//   { nome: "Caderno", preço: 20, estoque: 50 },
// ];
// for (let i = 0; i < produtos.length; i++) {
//   if (produtos[i].estoque > 10) {
//     console.log(produtos[i].nome + " : " + produtos[i].estoque + " UNIDADES");
//   }
// }

// 3. Crie um array filmes com objetos:
//     titulo
//     ano
//     classificacao

// Mostre apenas os filmes lançados após 2010.

// filmes = [
//   { Título: "Avatar", Ano: 2009, Classificação: "12 anos" },
//   { Título: "O Irlandês", Ano: 2019, Classificação: "18 anos" },
//   { Título: "Os Vingadores", Ano: 2012, Classificação: "10 anos" },
//   { Título: "Meu Malvado Favorito", Ano: 2010, Classificação: "Livre" },
//   { Título: "Debi & Lóide", Ano: 2014, Classificação: "12 anos" },
//   { Título: "Super Mário", Ano: 2025, Classificação: "10 anos" },
// ];
// for (let i = 0; i < filmes.length; i++) {
//   if (filmes[i].Ano > 2010) {
//     console.log(filmes[i].Título + " : " + filmes[i].Ano);
//   }
// }

// 4. Monte um array funcionarios com objetos:
//     nome
//     cargo
//     salario

// Exiba todos os funcionários que ganham mais de R$ 2.000,00.

// funcionarios = [
//   {
//     Nome: "Gustavo Rocha",
//     Cargo: "Auxiliar de Produção",
//     Salário: (1500).toFixed(2),
//   },
//   { Nome: "Joana Lima", Cargo: "Atedente", Salário: (2200).toFixed(2) },
//   { Nome: "Wanda Moacir", Cargo: "Gerente", Salário: (12000).toFixed(2) },
//   {
//     Nome: "Israel Costa",
//     Cargo: "Auxiliar de Expedição",
//     Salário: (1500).toFixed(2),
//   },
//   {
//     Nome: "Alex Bargança",
//     Cargo: "Analista de T.I",
//     Salário: (7500).toFixed(2),
//   },
//   { Nome: "Clara Lock", Cargo: "Auxiliar Geral", Salário: (2500).toFixed(2) },
// ];
// for (let i = 0; i < funcionarios.length; i++) {
//   if (funcionarios[i].Salário > 2000) {
//     console.log(`${funcionarios[i].Nome} = R$`, funcionarios[i].Salário);
//   }
// }

// 5. Crie um array clientes com:
//     nome
//     idade
//     cidade

// Peça ao aluno para exibir apenas os nomes dos clientes de “São Paulo”.

// clientes = [
//   { Nome: "Alvaro Rosa", Idade: 22, cidade: "São Paulo" },
//   { Nome: "Emanuel Pinto", Idade: 24, cidade: "Manaus" },
//   { Nome: "Tício Tabajará", Idade: 17, cidade: "São Paulo" },
//   { Nome: "Bruna Smith", Idade: 32, cidade: "Sorocaba" },
//   { Nome: "Flávia Texeira", Idade: 40, cidade: "São Paulo" },
//   { Nome: "Lorenzo Ferreira", Idade: 15, cidade: "São Paulo" },
//   { Nome: "Gloria Tamoios", Idade: 37, cidade: "Santos" },
// ];
// for (let i = 0; i < clientes.length; i++) {
//   if (clientes[i].cidade === "São Paulo") {
//     console.log(`${clientes[i].Nome} : ${clientes[i].cidade}`);
//   }
// }

// 6. Faça um array alunos com 5 objetos:
//     nome
//     nota1
//     nota2

// Calcule a média de cada aluno e mostre se ele foi aprovado (média ≥ 6) ou não.

// array = [
//   { Nome: "Tião Farinha", Nota1: 8, Nota2: 7 },
//   { Nome: "Federico Nhoque", Nota1: 3, Nota2: 10 },
//   { Nome: "Moana Pereyra", Nota1: 2, Nota2: 6 },
//   { Nome: "Diana Alvares", Nota1: 5, Nota2: 9 },
//   { Nome: "Francisco Presunto", Nota1: 2, Nota2: 7 },
// ];
// media = 2;
// sum = [];
// for (let i = 0; i < array.length; i++) {
//   calc = (array[i].Nota1 + array[i].Nota2) / media;
//   sum.push(calc);
//   if (sum[i] >= 6) {
//     console.log(`Aluno "${array[i].Nome}" Aprovado: `, sum[i]);
//   } else {
//     console.log(`Aluno "${array[i].Nome}" Reprovado: `, sum[i]);
//   }
// }

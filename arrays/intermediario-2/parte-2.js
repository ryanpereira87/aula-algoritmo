const input = require("readline-sync");

//  1 - Crie uma função mostrarPessoa que receba um objeto pessoa com:
//         nome
//         idade
//         cidade A função deve mostrar essas informações formatadas no console.

// let pessoa = { nome: "Rodrigo", idade: 17, cidade: "Santos-SP" };

// function mostrarPessoa(dadosPessoa) {
//   for (const chave in dadosPessoa) {
//     console.log(chave + ":" + dadosPessoa[chave]);
//   }
// }
// mostrarPessoa(pessoa);

//  2 - Faça uma função calcularIdadeMedia que receba um array de objetos de pessoas (com nome e idade) e retorne a idade média.

// let pessoas = [
//   { nome: "Kaká", idade: 26 },
//   { nome: "Ronaldinho", idade: 17 },
//   { nome: "Ronaldo", idade: 19 },
//   { nome: "Adriano", idade: 30 },
//   { nome: "Lúcio", idade: 33 },
//   { nome: "Dida", idade: 42 },
//   { nome: "Cássio", idade: 50 },
// ];

// function calcularIdadeMedia(mediaPessoas = []) {
//   soma = 0;
//   for (i = 0; i < mediaPessoas.length; i++) {
//     soma += mediaPessoas[i].idade;
//   }
//   media = soma / mediaPessoas.length;
//   console.log("Idade média:", media.toFixed(2));
//   return media;
// }
// calcularIdadeMedia(pessoas);

//   3 - Crie uma função filtrarMaioresDeIdade que receba um array de pessoas e retorne apenas as que têm 18 anos ou mais.

// let pessoas = [
//   { nome: "Donald Duck", idade: 27 },
//   { nome: "Mickey Mouse", idade: 24 },
//   { nome: "Pateta", idade: 30 },
//   { nome: "Luisinho", idade: 13 },
//   { nome: "Bart Simpson", idade: 14 },
//   { nome: "Pernalonga", idade: 20 },
//   { nome: "Patolino", idade: 19 },
//   { nome: "Johnny Bravo", idade: 18 },
// ];
// function filtrarMaioresDeIdade() {
//   for (i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade >= 18) {
//       console.log("Nome: " + pessoas[i].nome + " , Idade:" + pessoas[i].idade);
//       console.log("--------------------------------");
//     }
//   }
// }
// filtrarMaioresDeIdade(pessoas);

//  4 - Faça uma função mostrarProduto que receba um objeto produto com:
//         nome
//         preco
//         quantidade A função deve calcular e mostrar o valor total do estoque (preco × quantidade).

// let produto = [
//   { nome: "Refrigerante", preco: 9, quantidade: 5 },
//   { nome: "Salgadinho", preco: 5, quantidade: 15 },
//   { nome: "Sorvete", preco: 2, quantidade: 25 },
//   { nome: "Bolacha", preco: 1, quantidade: 40 },
//   { nome: "Chiclete", preco: 0.5, quantidade: 90 },
// ];
// function mostrarProduto() {
//   somaTotal = 0;
//   for (let i = 0; i < produto.length; i++) {
//     somaTotal += produto[i].preco * produto[i].quantidade;
//   }
//   console.log("Valor Total : R$", somaTotal.toFixed(2));
// }
// mostrarProduto();

//    5 - Crie uma função listarTitulos que receba um array de objetos de filmes (com título e ano) e mostre apenas os títulos no console.

// let filmes = [
//   { titulo: "Os Bons Companheiros", ano: 1988 },
//   { titulo: "Tropa de Elite", ano: 2007 },
//   { titulo: "Taxí Driver", ano: 1980 },
//   { titulo: "Sexta Feira 13", ano: 2001 },
//   { titulo: "Todo Mundo em Pânico", ano: 1999 },
//   { titulo: "Batman", ano: 2010 },
//   { titulo: "Alvin e os Esquilos", ano: 2009 },
// ];
// function listarTitulos() {
//   i = 1;
//   for (const title of filmes) {
//     console.log("Título " + i + "°:", title.titulo);
//     i++;
//   }
// }
// listarTitulos();

//    6 - Faça uma função buscarFuncionario que receba um array de objetos (funcionários) e um nome. Ela deve retornar o funcionário encontrado ou uma mensagem dizendo que não existe.

// let funcionários = [
//   { nome: "Abel" },
//   { nome: "Bruna" },
//   { nome: "Carlos" },
//   { nome: "Daville" },
//   { nome: "Edina" },
//   { nome: "Fagner" },
//   { nome: "Gilda" },
//   { nome: "Horácio" },
// ];

// function buscarFuncionario() {
//   let name = input.question("Digite um nome: ");
//   for (let i = 0; i < funcionários.length; i++) {
//     if (funcionários[i].nome === name) {
//       console.log("Funcionário encontrado:", funcionários[i].nome);
//       return;
//     }
//   }
//   console.log("Funcionário não existe!");
// }
// buscarFuncionario();

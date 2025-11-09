const input = require("readline-sync");

// 1. Crie um array de 10 números e mostre a soma dos números pares e a soma dos números ímpares separadamente.

// array = [5, 13, 9, 10, 32, 7, 36, 0, 1, 14];
// sum1 = 0;
// sum2 = 0;
// for (let i = 0; i < 10; i++) {
//   if (array[i] % 2 === 0) {
//     sum1 += array[i];
//   }
// }
// console.log(`Soma dos Números pares: `, sum1);
// console.log("------------------------------");
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 !== 0) {
//     sum2 += array[i];
//   }
// }
// console.log(`Soma dos Números ímpares : `, sum2);

// 2. Faça um array com objetos de alunos contendo:
//     nome
//     idade
//     curso

// Mostre todos os alunos que têm menos de 18 anos e estão no curso de “Informática”.

// alunos = [
//   { Nome: "Ryan Pereira", Idade: 15, Curso: "Informática" },
//   { Nome: "Reginaldo Farias", Idade: 15, Curso: "Informática" },
//   { Nome: "Wanda Casagrande", Idade: 17, Curso: "Biológia" },
//   { Nome: "Cêsar Augusto", Idade: 14, Curso: "Informática" },
//   { Nome: "Rosalina Vieira", Idade: 47, Curso: "Artes" },
//   { Nome: "Nolsen Oliveira", Idade: 18, Curso: "Informática" },
//   { Nome: "Brunna Martins", Idade: 43, Curso: "Física" },
//   { Nome: "Fagulha Gomes", Idade: 16, Curso: "Informática" },
//   { Nome: "Isabella Moraes", Idade: 23, Curso: "Direito" },
//   { Nome: "Olívia Maravilha", Idade: 17, Curso: "Informática" },
// ];
// console.log(
//   "os alunos que têm menos de 18 anos e estão no curso de Informática"
// );
// console.log(
//   "-------------------------------------------------------------------"
// );
// for (let i = 0; i < alunos.length; i++) {
//   if (alunos[i].Curso === "Informática" && alunos[i].Idade < 18) {
//     console.log(
//       `Nome: ${alunos[i].Nome}
// Idade: ` + alunos[i].Idade
//     );
//     console.log("----------------");
//   }
// }

// 3. Crie um array pedidos com:
//     produto
//     quantidade
//     valorUnitario

// Calcule o valor total de cada pedido (quantidade × valorUnitario) e mostre a soma total da compra.

// sumTotal = 0;
// sumPedido = 0;
// pedidos = [
//   { Produto: "Coca-Cola 2L", Quantidade: 15, valorUnitario: 8 },
//   {
//     Produto: "Bolacha Recheada",
//     Quantidade: 30,
//     valorUnitario: 3,
//   },
//   { Produto: "Macarrão", Quantidade: 10, valorUnitario: 6 },
//   { Produto: "Lasanha", Quantidade: 17, valorUnitario: 15 },
//   { Produto: "Pinga 51", Quantidade: 24, valorUnitario: 5 },
//   { Produto: "Dode de Leite", Quantidade: 3, valorUnitario: 4 },
//   { Produto: "Leite", Quantidade: 33, valorUnitario: 5 },
//   { Produto: "Picanha", Quantidade: 3, valorUnitario: 150 },
//   { Produto: "Tapioca", Quantidade: 300, valorUnitario: 3 },
//   {
//     Produto: "Suco de Caixinha",
//     Quantidade: 100,
//     valorUnitario: 5,
//   },
//   { Produto: "Papel Toalha", Quantidade: 7, valorUnitario: 12 },
// ];
// for (let i = 0; i < pedidos.length; i++) {
//   sumPedido = pedidos[i].Quantidade * pedidos[i].valorUnitario;
//   sumTotal += sumPedido;
// }
// console.log("Soma Total da Compra: R$", sumTotal.toFixed(2));

// 4. Crie um array veiculos com:
//     marca
//     modelo
//     ano
//     preco

// Mostre o veículo mais caro e o mais antigo.

// let veiculos = [
//   { Marca: "Ford", Modelo: "Mutang", Ano: 1987, Preco: 60 },
//   { Marca: "Chevrolet", Modelo: "Impala", Ano: 1967, Preco: 200 },
//   { Marca: "Alfa Romeu", Modelo: "Giulia", Ano: 1962, Preco: 150 },
//   { Marca: "BYD", Modelo: "King", Ano: 2024, Preco: 200 },
//   { Marca: "Toyota", Modelo: "Hilux", Ano: 2021, Preco: 250 },
//   { Marca: "Honda", Modelo: "City", Ano: 2013, Preco: 80 },
//   { Marca: "Tesla", Modelo: "Cybertruck", Ano: 2023, Preco: 600 },
//   { Marca: "Volkswagen", Modelo: "GOL", Ano: 2006, Preco: 30 },
//   { Marca: "BMW", Modelo: "M5", Ano: 1987, Preco: 500 },
//   { Marca: "Hynday", Modelo: "HB20", Ano: 2024, Preco: 150 },
// ];
// veiculoMaisCaro = veiculos[0];
// VeiculoMaisAntigo = veiculos[0];

// for (let i = 0; i < veiculos.length; i++) {
//   if (veiculos[i].Preco > veiculoMaisCaro.Preco) {
//     veiculoMaisCaro = veiculos[i];
//   }
//   if (veiculos[i].Ano < VeiculoMaisAntigo.Ano) {
//     VeiculoMaisAntigo = veiculos[i];
//   }
// }
// console.log(
//   `Veículo mais caro: Marca: ${veiculoMaisCaro.Marca} , Modelo: ${
//     veiculoMaisCaro.Modelo
//   } , Preço: ${veiculoMaisCaro.Preco.toFixed(3)}`
// );
// console.log(
//   "------------------------------------------------------------------------"
// );
// console.log("Veículo mais antigo:", VeiculoMaisAntigo);

// 5. Faça um array usuarios com:
//     nome
//     senha

// Peça para o aluno criar uma função que receba nome e senha e verifique se o usuário está cadastrado e a senha está correta.

// let usuarios = [
//   { Nome: "Lucas", Senha: "Lucas1@15" },
//   { Nome: "Sasha", Senha: "Sasha1@15" },
//   { Nome: "Wagner", Senha: "Wagner1@15" },
//   { Nome: "Natália", Senha: "Natalia1@15" },
//   { Nome: "Otávio", Senha: "Otavio1@15" },
//   { Nome: "Rosilene", Senha: "Rosa1@15" },
//   { Nome: "Val", Senha: "Val1@15" },
//   { Nome: "Quiteiria", Senha: "Quit1@15" },
//   { Nome: "Abel", Senha: "Abel1@15" },
// ];
// usuarios.push({ Nome: "Ryan", Senha: "Ryan1015" });
// function check() {
//   let user = input.question("Digite um nome: ");
//   let keyword = input.question("Digite uma senha: ");
//   for (let i = 0; i < usuarios.length; i++) {
//     if (usuarios[i].Nome === user && usuarios[i].Senha === keyword) {
//       console.log("O usuário está cadastrado e a senha está correta");
//       return;
//     }
//   }
//   console.log("O usuário não está cadastrado e a senha não está correta");
// }
// check();

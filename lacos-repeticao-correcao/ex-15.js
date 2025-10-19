const input = require("readline-sync");
opcao = -1;
while (opcao !== 0) {
  console.log("===== MENU PRINCIPAL =====");
  console.log("===== 1 - Contagem Simples =====");
  console.log("===== 2 - Pares e Ímpares =====");
  console.log("===== 3 - Soma dos Números =====");
  console.log("===== 4 - Contador Regressivo =====");
  console.log("===== 5 - Tabuada =====");
  console.log("===== 6 - Média de Notas =====");
  console.log("===== 7 - Maior e Menor Número =====");
  console.log("===== 8 - Senha Correta =====");
  console.log("===== 9 - Contar Vogais =====");
  console.log("===== 10 - Fatorial =====");
  console.log("===== 11 - Sequência de Fibonacci =====");
  console.log("===== 12 - Número Primo =====");
  console.log("===== 13 - Estatísticas =====");
  console.log("===== 14 - Caixa de Loja =====");
  console.log("===== 0 - Sair =====");
  opcao = input.questionInt("Escolha uma opção: ");
  console.clear();
  switch (opcao) {
    case 1:
      console.log("Mostre todos os números de 1 a 20.");
      for (let n = 1; n <= 20; n++) {
        console.log("O número = ", n);
      }
      break;
    case 2:
      numero1 = input.questionInt("Digite um número final: ");
      for (let i = 0; i <= numero1; i++) {
        if (i % 2 === 0) {
          console.log(i + " é par");
        } else {
          console.log(i + " é ímpar");
        }
      }
      break;
    case 3:
      let soma = 0;
      for (let cont = 0; cont < 5; cont++) {
        number1 = input.questionInt("Digite o " + (cont + 1) + "º número: ");
        soma += number1;
      }
      console.log("A soma dos 5 números é: ", soma);

      break;
    case 4:
      number1 = input.questionInt("Digite um número: ");
      for (let cont = number1; cont >= 0; cont--) {
        console.log(cont);
      }
      break;
    case 5:
      let numberTabuada = input.questionInt(
        "Digite um número para gerar sua tabuada: "
      );
      for (let i = 1; i <= 10; i++) {
        console.log(i + " X " + numberTabuada + " = " + i * numberTabuada);
      }

      break;
    case 6:
      let qdtalunos = input.questionInt("Digite a quantidade de alunos: ");
      for (let aluno = 0; aluno < qdtalunos; aluno++) {
        console.log("------------------------------");
        console.log(" Aluno: " + (aluno + 1));
        console.log("------------------------------");
        somaNotas = 0;
        for (prova = 0; prova < 3; prova++) {
          let nota = input.questionInt(
            `Digite a nota da prova ${prova + 1}º: `
          );
          somaNotas += nota;
        }
        let media = somaNotas / 3;
        if (media >= 7) {
          console.log("Aluno", aluno + 1, "Média = ", media, "Aprovado!");
        } else {
          console.log("Aluno", aluno + 1, "Média = ", media, "Reprovado!");
        }
      }
      console.log("------------------------------");

      break;
    case 7:
      numero = -1;
      let max = null;
      let min = null;
      while (numero !== 0) {
        numero = input.questionInt("Digite um número (0 para sair): ");
        if (numero !== 0) {
          if (max === null || numero > max) {
            max = numero;
          }
          if (min === null || numero < min) {
            min = numero;
          }
        }
      }
      if (max === null) {
        console.log("Nenhum número foi digitado!");
      } else {
        console.log(`O maior número é: `, max);
        console.log(`O menor número é: `, min);
      }
      break;
    case 8:
      let n1 = input.questionInt("Digite uma senha de quatro números: ");
      while (n1 < 1000 || n1 > 9999) {
        n1 = input.questionInt("Digite uma senha de quatro números: ");
      }
      while (n1 !== 1234) {
        console.log("SENHA ERRADA!");
        n1 = input.questionInt(
          "Dica: quatro números consecutivos cuja soma seja igual a 10: "
        );
      }
      console.log("Acesso Permitido!");
      console.log("-------------------------------");
      break;
    case 9:
      let p = input.question("Digite uma palavra: ").toLowerCase();
      let cont = 0;
      for (let i = 0; i < p.length; i++) {
        letra = p[i];
        if (
          letra === "a" ||
          letra === "e" ||
          letra === "i" ||
          letra === "o" ||
          letra === "u"
        ) {
          cont++;
        }
      }
      console.log(`A palavra "${p}" tem ${cont} vogal(is)`);

      break;
    case 10:
      n = input.questionInt("Digite um número para gerar seu fatorial: ");
      fatorial = 1;
      if (n === 0) {
        fatorial = 1;
      } else {
        for (i = n; i > 1; i--) {
          fatorial = fatorial * i;
        }
      }
      console.log(`${n}! = `, fatorial);

      break;
    case 11:
      fibo = input.questionInt(
        "Digite a quantidade de termos da sequência de Fibonacci: "
      );
      a = 1;
      b = 1;
      console.log("Sequência de Fibonnaci");
      if (fibo >= 1 || fibo >= 2) {
        console.log(a);
        console.log(b);
      }
      for (let i = 3; i <= fibo; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
      }

      break;
    case 12:
      num = input.questionInt("Digite um número: ");
      let primo = true;
      if (num <= 1) {
        primo = false;
      } else {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            primo = false;
            break;
          }
        }
      }
      if (primo) {
        console.log("O número " + num + " é primo!");
      } else {
        console.log("O número " + num + " não é primo!");
      }
      break;
    case 13:
      number = -1;
      let sum = 0;
      qtd = 0;
      let average = 0;
      maior = null;
      menor = null;
      while (number !== 0) {
        number = input.questionInt("Digite um número (0 para sair): ");
        if (number !== 0) {
          sum += number;
          qtd++;
          if (menor === null || number < menor) {
            menor = number;
          }
          if (maior === null || number > maior) {
            maior = number;
          }
        }
      }
      if (qtd > 0) {
        average = sum / qtd;
        console.log("Quantidade de número(s) digitado(s): ", qtd);
        console.log("Média: ", average);
        console.log("Maior: ", maior);
        console.log("Menor: ", menor);
      }
      break;
    case 14:
      let valor = -1;
      let TotalPagar = 0;
      while (valor !== 0) {
        valor = input.questionFloat("Digite um número (0 para sair):R$");
        TotalPagar = TotalPagar + valor;
      }
      console.log("Total a pagar = R$", TotalPagar.toFixed(2));

      break;
    default:
      console.log("Opção Inválida!");

      break;
  }
}
console.log(`--------Programa Encerrado!--------`);

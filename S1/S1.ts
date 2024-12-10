// ******************************************************************************************************

// ******************************************************************************************************
//
// * O que é o TypeScript?
//
// * É uma linguagem montada em cima do JavaScript, que adiciona novas funções e vantagens em relação ao
// * JS. A desvantagem é que navegadores não conseguem ler códigos de TypeScript diretamente. Todo código
// * em TypeScript é compilado em código de JavaScript, ou seja, temos ao final um código de JS com uma
// * sintaxe mais simples e com funções adicionais. No Type, conseguimos também ter uma revisão melhor
// * de erros no código.
// * Em resumo, o TypeScript nos ajuda a escrever códigos de JavaScript de uma forma melhor e mais fácil.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Instalando e usando o TypeScript
//
// * O TypeScript pode ser instalado utilizando o comando 'npm install -g typescript' no terminal após
// * termos instalado o Node.JS.
// * O TypeScript adiciona tipos e nos força a sermos mais explícitos na hora de programar. Ao executar
// * o código, ele nos retorna com um código de JavaScript.
//
// ******************************************************************************************************

const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; // Adicionando '!' para declarar que
// obrigatoriamente queremos algum input aqui, e em seguida adicionamos o 'HTMLInputElement' para definir
// o tipo do input.
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  // Declarando o tipo de cada elemento da função como número.
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value)); // Convertendo o tipo do input para número com o +.
});

// ******************************************************************************************************
//
// * As vantagens do TypeScript
//
// * O TypeScript adiciona:
// *  - Tipos
// *  - Funções adicionais ao JavaScript
// *  - Opções de configurações
// *  - Funções mais novas do JavaScript compiladas à navegadores antigos
// *  - Funções de meta-programação
// *  - Ferramentas modernas que ajudam até mesmo em projetos que não são de TypeScript
//
// ******************************************************************************************************
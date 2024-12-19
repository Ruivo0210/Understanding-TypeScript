// ******************************************************************************************************

// ******************************************************************************************************
//
// * Usando tipos
//
// * Tipos padrão:
//
// *    - Números: Todos os valores de número. Não possuem diferenças entre integer e float.
// *    - Strings: Todos os valores de texto..
// *    - Boolean: True e false
// *    - Objetos: Qualquer objeto, tipos mais específicos são possíveis.
// *    - Arrays: Qualquer array, o tipo pode ser flexível ou restrito.
//
// * O sistema de tipos do TypeScript apenas ajuda durante o desenvolvimento, nos ajudando a evitar
// * erros durante o tempo de execução.
//
// ******************************************************************************************************

function add(n1: number, n2: number) {
  // Após os elementos, podemos declarar o valor que queremos.
  return n1 + n2;
}

const number1 = 5; // Quando trabalhamos com adição e temos qualquer elemento string, o JS concatena.
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// ******************************************************************************************************
//
// * Tipos em TS vs JS
//
// * O JavaScript é uma linguagem dinâmica, ou seja, constantes e variáveis de um tipo podem ser
// * convertidas em outro tipo ao serem declaradas novamente (e podem ser redefinidas durante a execução).
// * Já o TypeScript é estático, ou seja, declaramos o tipo do elemento e ele não irá mudar (são defini-
// * das durante o desenvolvimento).
// * Diferente do JS, no TS precisamos nos referir a tipos com todas as letras minúsculas (ex: 'string').
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Trabalhando com números, strings e booleanos
//
// * Ao trabalharmos com soma de números e colocarmos algum elemento de string no meio, o JavaScript
// * automaticamente converte todos os elementos em string e nos retorna uma concatenação.
//
// ******************************************************************************************************

function add1(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2; // Podemos trabalhar dessa forma para evitar que o JS converta número em string
  if (showResult) {
    // Como o showResult é um elemento booleano, não precisamos declarar a comparação
    console.log(phrase + result);
  } else {
    return result;
  }
}

const printResult = true;
const resultPhrase = "Result is: ";

add1(number1, number2, printResult, resultPhrase);

// ******************************************************************************************************
//
// * Atribuição de tipos
//
// * Podemos especificar o tipo de uma constante ou variável na própria linha de declaração.Ao
// * declararmos uma variável sem especificarmos o seu tipo, ele será do tipo do valor armazenado nele.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Objetos
//
// * Podemos trabalhar com objetos dentro do TS atribuindo tipos aos seus atributos.
//
// ******************************************************************************************************

// Podemos trabalhar de uma maneira genérica (explícita) e atribuir da seguinte forma:

const person: {
  name: string;
  age: number;
} = {
  name: "Joao",
  age: 21,
};

// Porém, a forma ideal é:

const person1 = {
  name: "Joao",
  age: 21,
};

console.log(person1.name);

// Tipos de objetos podem ser criados também para objetos aninhados:

const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

//   Esse seria o tipo desse objeto:

//   {
//     id: string;
//     price: number;
//     tags: string[];
//     details: {
//       title: string;
//       description: string;
//     }
//   }

// ******************************************************************************************************
//
// * Arrays
//
// * Podemos trabalhar com arrays de maneira restrita ou flexível.
//
// ******************************************************************************************************

// Exemplo (restrito):

let favoriteActivities: string[]; // Aqui, declaramos que a variável será uma array de strings.

// Exemplo (flexível):

let favoriteActivities1: any[]; // Aqui, declaramos que a variável será uma array de qualquer tipo.

favoriteActivities = ["Sports", "Gaming"]; // Ao tentarmos dar um valor fora de string ou dar um valor
// de tipo errado, temos um erro.

// Ao trabalharmos com array de tipo definido, o TypeScript reconhece que, dentro do array, temos
// vários elementos diferentes do mesmo tipo, então temos a liberdade de utilizarmos, por exemplo,
// métodos de string para cada string dentro de um array de strings.

for (let hobby of favoriteActivities) {
  // Perceba que 'hobby' é tratado como string e não como array.
  console.log(hobby.toLocaleUpperCase());
}

// ******************************************************************************************************
//
// * Trabalhando com Tuplas
//
// * Um tipo exclusivo do TypeScript. Um array de tamanho fixo. Podemos declarar qual será o tipo de cada
// * valor. O TS irá aceitar somente arrays com a mesma quantidade de elementos declarada na tupla.
//
// ******************************************************************************************************

const person2: {
  name: string;
  age: number;
  role: [number, string];
} = {
  name: "Joao",
  age: 21,
  role: [1, "Student"], // Tupla de dois elementos, (Num|Str)
};

person2.role[0] = 2;

// ******************************************************************************************************
//
// * Enum
//
// * Um tipo exclusivo do TypeScript. São enumeradores automáticos globais de identificação de 
// * constantes. Serve para referenciar um grupo de constantes.
//
// ******************************************************************************************************

// Declaramos da seguinte forma:
// Podemos declarar o valor de cada constante. Caso não declarados, eles valerão um valor incrementado
// a partir da primeira constante (1).

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person3 = {
  name: 'Joao',
  age: 21,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN // Referenciando ao ENUM.
}

// ******************************************************************************************************
//
// * Any
//
// * Armazena qualquer tipo de dado. Evitar ser usado ao máximo, pois tem muitas desvantagens. Usar
// * apenas em casos que não sabemos o tipo de dado que será usado.
//
// ******************************************************************************************************

let qualquer: any[]; // Declamos uma array que aceitará qualquer tipo de dado.

let qualquer1; // Ao não declararmos o valor da variável, ela naturalmente será Any.

// ******************************************************************************************************
//
// * Tipos de União
//
// * Usado para combinar duas declarações de tipos no mesmo elemento. Utilizamos o '|' para declarar os
// * dois tipos, e em seguida precisamos declarar algum tipo de estrutura condicional para o TS entender
// * que ambos os tipos podem ser usados. Podemos também utilizar objetos.
//
// ******************************************************************************************************

function combine(input1: number | string, input2: number | string) { // Declarando dois tipos 
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') { // Validação condicional
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30,26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);

// ******************************************************************************************************
//
// * Tipos literais
//
// * Usados para declarar valores literais a uma constante, ou seja, ela poderá conter somente os valores
// * que declararmos a ela. Podemos também utilizar objetos.
//
// ******************************************************************************************************

function combined(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text' // Declarando tipos literais
) {  
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    // Fazemos uma validação condicional para checar o tipo do literal
    result = +input1 + +input2; // Utilizamos o + para converter a constante em número. Caso não seja
    // passado um número, nos retorna NaN (Not a Number). Podemos também usar o 'ParseFloat()'.
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges1 = combined(30,26,'as-number');
console.log(combinedAges1);

const combinedNames1 = combined('30', '26', 'as-number');
console.log(combinedNames1);

// ******************************************************************************************************
//
// * Tipos customizados / Atalhos
//
// * Usamos 'type' para declararmos outros tipos que declararmos dentro de um único tipo identificador. 
// * Podemos armazenar qualquer coisa dentro do Type, até mesmo objetos.
//
// ******************************************************************************************************

// Exemplo 1:

type Combinable = number | string; // Declarando o tipo customizado, combinando dois outros tipos
type ConversionDescriptor = 'as-number' | 'as-text'; // Tipo customizado com valores literais


function combined1(
  input1: Combinable, // Utilizando o tipo customizado
  input2: Combinable,
  resultConversion: ConversionDescriptor
)  { } // Bloco de código

// Exemplo 2: com objetos

type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

// ******************************************************************************************************
//
// * Retorno de funções: Void e Undefined
//
// * Ao utilizarmos funções, o TypeScript é capaz de saber através do 'Return' qual será o tipo do retorno
// * da função. Caso não tenhamos um 'Return', a função terá um retorno Void, ou seja, não irá retornar
// * nada. O Undefined é um tipo de retorno que podemos declarar caso queremos que um valor não especi-
// * ficado seja retornado, porém é utilizado em casos bem específicos.
//
// ******************************************************************************************************

function add2(n1: number, n2: number){ // :number { -> Podemos deixar explicito o retorno 
  return n1+n2; // Aqui, o TS sabe que o retorno da função será um número.
}

function printResult1(num: number) {
  console.log('Result: ' + num); // Aqui, o TS sabe que o retorno da função será Void.
}

printResult1(add2(5, 10)); // Trabalhando com duas funções

// ******************************************************************************************************
//
// * Funções como 'Types'
//
// * Podemos declarar variáveis para armazenarem funções que atendam aos requisitos que especificarmos.
//
// ******************************************************************************************************

let combinedValues: (a: number, b: number) => number; // Aqui, declaramos uma variável para uma função
// e em seguida especificamos que a função terá duas entradas do tipo Number e um retorno (apóes o =>)
// do tipo number. Qualquer função que atendam à esses requisitos poderá ser armazenada na variável.

combinedValues = add; // Aqui, declaramos a função add à variável anterior.

console.log(combinedValues(8,8)); // Trabalhando com a função armazenada na variável.

// ******************************************************************************************************
//
// * Retornos e Tipos de funções
//
// * Podemos, ao declarar uma função, atribuir um elemento à uma outra função 'type', que irá retornar 
// * um valor.
//
// ******************************************************************************************************

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { // Aqui, declaramos uma função
  // type ('cb') como um parâmetro. Ela terá que ter uma entrada de uma variável num (do tipo number), e 
  // terá que retornar void.
  const result = n1+n2;
  cb(result); // Aqui, declaramos a entrada da função 'cb'.
}

addAndHandle(10,20,(result) => { // Ao retornar a função, declaramos o terceiro elemento (uma função type)
  // com a entrada de um número e um retorno void em seguida.
  console.log(result);
});

// ******************************************************************************************************
//
// * Tipo 'Unknown' e 'Any'
//
// * O tipo 'Unknown' pode ser utilizado para atribuir um valor desconhecido a uma variável, um valor do
// * qual ainda não sabemos qual será o seu tipo. O 'Any' funciona de forma semelhante, porém é menos
// * restritivo. Enquanto o 'Unknown' ainda restringe o conteúdo ao seu tipo original, o any permite 
// * que literalmente qualquer tipo de conteúdo seja armazenado.
//
// ******************************************************************************************************

let userInput: unknown;
let userName: any;

userInput = 5;
userName = 'Max';

// ******************************************************************************************************
//
// * Tipo 'Never'
//
// * Semelhante ao 'Void', o tipo 'Never' serve para deixarmos explicito que a função nunca terá retorno.
//
// ******************************************************************************************************

function generateError(message: string, code: number): never {
  throw { message: message, erorrCode: code};
}

generateError('An error ocurred!', 500); // A função nunca terá retorno, apenas imprime a mensagem.

// ******************************************************************************************************

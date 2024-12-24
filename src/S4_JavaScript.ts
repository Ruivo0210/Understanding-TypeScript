// ******************************************************************************************************

// ******************************************************************************************************
// *                            Última geração de TypeScript & JavaScript                               *
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Diferenças entre const, let e var
//
// * Nas antigas versões do JavaScript, Var era usado para qualquer tipo de declaração de variável ou
// * cosntante. Com o ES6, temos a chegada do let e do var. O let permite a declaração de variáveis,
// * enquanto o const permite a declaração de constantes. Eles se diferenciam no fato de que uma 
// * constante não pode ter o seu valor alterado. o "Var" ficou defasado por usar um escopo global de
// * declaração de variáveis.
//
// ******************************************************************************************************

const a: number = 3;

let b: string = "Oi!";

var c: string | number = 6;

function sum(num1: number, num2: number){
    var num3 = num1+num2
    return(num3);
} 

// console.log(num3); Aqui, no JS, caso usamos "var", conseguimos acessar a variável fora de seu escopo

// ******************************************************************************************************
//
// * Funções de flecha
//
// * Quando temos uma função com apenas um único argumento de código, podemos reduzi-lá utilizando a 
// * sintaxe de flecha (=>).
//
// ******************************************************************************************************

// Exemplo 1:
// Aqui, declaramos a função a uma constante, como possui somente um argumento, reduzimos usando a flecha

const add = (a:number, b:number) => {
    return a+b;
};

// Exemplo 2:
// Como a flecha já possui a função de retorno, podemos omitir o return para encurtar mais ainda:

const add1 = (a:number, b:number) => a+b;

console.log(add1(2,4));

// No JS, quando possuimos apenas um parâmetro, podemos ainda omitir os parênteses.

// ******************************************************************************************************
//
// * Parâmetros padrões
//
// * Podemos definir valores padrões a parâmetros dentro de funções. Ao fazer isso, os parâmetros que 
// * queremos deixar com valores padrões precisam vir por último.
//
// ******************************************************************************************************

const add2 = (a:number, b:number = 1) => a+b;

console.log(add2(1)); // Passamos apenas um parâmetro pois B já está definido.

// ******************************************************************************************************
//
// * Spread Operator
//
// * O operador spread (...) nos ajuda a copiar elementos de um array ou de um objeto a outro array ou 
// * objeto.
//
// ******************************************************************************************************

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies); // Se utilizarmos o push sem o spread, teremos um erro.

console.log(activeHobbies);

// Também podemos utilizar com objetos:

const person = {
    firstName: 'Max',
    age: 30
};

const copiedPerson = {...person};

console.log(copiedPerson);

// ******************************************************************************************************
//
// * Atribuindo elementos de objetos e arrays para outros elementos
//
// * Podemos utilizar a sintaxe de retirada para atribuir elementos presentes dentro de objetos e 
// * array para outros elementos. Fazemos isso da seguinte forma:
//
// ******************************************************************************************************

const [hobby1, hobby2, ...remainingHobbies] = hobbies; // Aqui, criamos duas constantes, hobby 1 e 2,
// e armazenamos os dois elementos presentes dentro da array "hobbies" para cada constante. O operador
// rest foi usado ao final para atribuir elementos restantes à última constante.

console.log(hobbies, hobby1, hobby2);

const {firstName: userName, age} = person; // Aqui, criamos duas constantes, firstName e age, e
// armazenamos os dois elementos presentes dentro do objeto "Person" para cada constante. A constante
// "firstName" recebeu um alias, ou seja, foi renomeada para "userName".

console.log(userName, age, person);

// *****************************************************************************************************
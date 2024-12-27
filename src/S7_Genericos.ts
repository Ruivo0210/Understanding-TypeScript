// *************************************************************************************************************************

// *************************************************************************************************************************
// *                                                      Genéricos                                                        *
// *************************************************************************************************************************

// *************************************************************************************************************************
//
// * O que é um genérico?
//
// * Alguns tipos do JS podem armazenar qualquer tipo de dado dentro deles, como arrays e objetos. Um tipo genérico é a 
// * definição explícita do tipo de dado que iremos armazenar. Com isso, podemos flexibilizar o uso de alguns métodos 
// * exclusivos para tipos específicos.
//
// *************************************************************************************************************************

// Dados embutidos no JS:

const names: Array<string> = ['Max', 'Manuel']; // string[]
// Assim, podemos trabalhar com métodos de string dentro da array, como split, por exemplo.

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});

// promise.then(data => {
//     data.split(' '); // Aqui teríamos um erro, pois não existe o método split em números.
// });

// *************************************************************************************************************************
//
// * Criando uma função genérica
//
// * No TS, podemos criar funções que utilizem de tipos genéricos, para que assim, possamos utilizar de métodos que antes 
// * não conseguiriamos. Dessa forma, o TS é capaz de associar o tipo armazenado no tipo genérico de acordo com o uso.
//
// *************************************************************************************************************************

// *************************************************************************************************************************
//
// * Trabalhando com restrições
//
// * Ao criarmos nossa própria função genérica, podemos explicitar o tipo exato do dado que queremos trabalhar na função,
// * restringindo o uso daquele dado somente a aquele tipo.
//
// *************************************************************************************************************************

function merge<T extends object , U extends object>(objA: T, objB: U) { // Aqui, criamos uma função utilizando dois tipos
    // genéticos de parâmetros, T e U (pode ser qualquer identificador). Eles estão restritos ao tipo objeto, ou seja, 
    // T e U precisam ser um objeto de qualquer estrutura. Em seguida, definimos os parâmetros com os tipos genéricos.
    return Object.assign(objA, objB); // Utilizando método para concatenar os dois objetos
  }

const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age:30}); // Caso não passamos um objeto, nos retorna um erro.
console.log(mergedObj);

// *************************************************************************************************************************
//
// * Outra função genérica
//
// * Função que lê a entrada e retorna a quantidade de elementos que a entrada possui.
//
// *************************************************************************************************************************

// Aqui, criamos uma interface para atribuir ao tipo genérico da função. Fazemos isso para certificar ao TS que o elemento
// do tipo T terá o método 'length'.

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] { // Teremos dois retornos, o T e uma string.
    let descriptionText = 'Got no value.';
    if (element.length === 1){
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText]
}

console.log(countAndDescribe(['Sports', ['Cooking']]))

// *************************************************************************************************************************
//
// * A restrição "keyof"
//
// * Quando queremos certificar de que um objeto terá algum valor de um tipo genérico em específico, podemos usar o 'keyof'
// * como uma extensão do tipo em específico.
//
// *************************************************************************************************************************

function extractAndConvert<T extends object, U extends keyof T>( // Assim, nos certificamos de que U terá um elemento do tipo
    // T dentro dele.
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name')

// *************************************************************************************************************************
//
// * Classes genéricas
//
// * 
//
// *************************************************************************************************************************

// *************************************************************************************************************************
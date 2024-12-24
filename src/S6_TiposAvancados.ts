// ******************************************************************************************************

// ******************************************************************************************************
// *                                           Tipos Avançados                                          *
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Tipos de intersecção
//
// * O tipo de intersecção define a intersecção entre dois tipos de objetos diferentes.
//
// ******************************************************************************************************

// Ao usarmos intersecção em dois tipos de objeto diferentes, teremos a união entre os tipos dos objetos

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // Definindo intersecção com '&'.

const e1: ElevatedEmployee = {
  // Precisa conter name, privileges e startDate
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

// Ao usarmos intersecção em dois tipos de união diferentes, teremos o comum entre os tipos de união

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // Será do tipo numérico, pois é o comum entre os dois.

// ******************************************************************************************************
//
// * Type Guards
//
// * Ao trabalharmos com tipos combinados, Type Guards nos permite fazer a verificação de qual tipo o
// * objeto se encontra no estado atual. É a estrutura condicional que permite fazer essa verificação.
//
// ******************************************************************************************************

function add(a: Combinable, b: Combinable) {
  // Aqui, estamos trabalhando com valores de tipos combinados
  if (typeof a === "string" || typeof b === "string") {
    // Usamos o Type Guard para verificar o estado
    return a.toString() + b.toString();
  }
  return a + b; // Caso não usamos, o TS nos retorna um erro por não saber o estado do objeto.
}

type UnknownEmployee = Employee | Admin; // Ao trabalharmos com união de valores, precisamos checar
// se o objeto contém aquele valor dentro dele utilizando o 'In'.

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    // Verificando se a propriedade existe dentro do objeto
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

const e2: UnknownEmployee = {
  // Precisa conter name, privileges e startDate
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

printEmployeeInformation(e2);

// Temos também o método 'instanceof', que verifica se um objeto é uma instância de uma classe específica.

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    // Vericamos se o veículo é uma instância de 'Truck'.
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// ******************************************************************************************************
//
// * Uniões Descriminadas
//
// * São a descrição de uma propriedade que identifica um objeto ou interface. Ao usá-la, podemos
// * atribuie uma propriedade identificadora que ajudará ao trabalhar com funções em tipos combinados.
//
// ******************************************************************************************************

interface Bird {
  type: "bird"; // Definindo um identificador para o tipo do objeto/interface. Nos ajudará posteriormente.
  flyingSpeed: number; // Propriedade semelhante, porém com nome diferente.
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse; // Tipo de união

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) { // Definimos uma estrutura switch/case para fazer a verificação do tipo de obj.
    case "bird":
      speed = animal.flyingSpeed; // Dessa forma, TS consegue saber a propriedade certa que queremos usar.
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// ******************************************************************************************************
//
// * Fundiçao de tipos 
//
// * Ao trabalharmos com elementos HTML no TS, podemos especicar detalhadamente qual elemento queremos
// * selecionar. Fazemos isso utilizado o método "getElementById".
//
// ******************************************************************************************************

const userInputElement = document.getElementById('user-input'); // Selecionando o elemento pela ID.

if (userInputElement) { // Checando se o elemento não será nulo no documento
  (userInputElement as HTMLInputElement).value = 'Hi there!'; // Selecionando pelo tipo Input.
}

// ******************************************************************************************************
//
// * Propriedades de Index
//
// * Nos permite criar objetos e interfaces com tipos pré-definidos de constantes que iremos armazenar,
// * e define também de qual tipo será o valor armazenado dentro dela.
//
// ******************************************************************************************************

interface ErrorContainer { // { email: 'Not a valid email', username: '...'}
    [prop: string]: string; // Definimos uma restrição que irá dizer o tipo da constante e o tipo do
    // valor que ela irá armazenar.
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!' // string: 'String'
    // 1: 'Not a valid email!' // Aqui, o 1 seria convertido para String.
}

// ******************************************************************************************************
//
// * Sobrecarga de funções (overload)
//
// * Quanto trabalhamos com combinações dentro de funções, o TS não saberá exatamente de qual tipo será
// * o retorno daquela função. Para especificarmos, utilizamos o overload.
//
// ******************************************************************************************************

// Utilizamos o overload antes mesmo da função definida.
function add1(a:number, b:number): number; // Caso os dois parâmetros seja num, retorne num.
function add1(a:string, b:string): string; // Caso os dois parâmetros seja str, retorne str.
function add1(a: Combinable, b: Combinable) { // Aqui, para o TS, o retorno será do tipo 'Combinable',
    // o que nos causará impedimentos ao trabalharmos com tipos específicos do retorno.
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }
    return a + b;  
    }
// Isso nos permite, por exemplo, trabalharmos com string de métodos no retorno.

// ******************************************************************************************************
//
// * Encadeamento opcional
//
// * Ao trabalharmos com objetos que não estão dentro do documento, precisamos confirmar se uma 
// * propriedade existe antes de tentar acessá-la dentro do TS. Para isso, utilizamos o '?' ao tentar
// * acessar uma propriedade.
//
// ******************************************************************************************************

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};

console.log(fetchedUserData?.job?.title); // Caso job não existisse, aqui seria retornado um erro.

// ******************************************************************************************************
//
// * Coalescência Nula
//
// * Ao trabalharmos com objetos que não estão dentro do documento, precisamos confirmar se uma constante
// * é do tipo 'Null' ou 'Undefined' antes de trabalharmos nela. Para isso, utilizamos o '??' ao tentar
// * acessar o valor da constante.
//
// ******************************************************************************************************

const userInput = undefined;

const storedData = userInput ?? 'DEFAULT'; // O '??' verifica se uma constante é nula ou indefinida.

console.log(storedData);

// ******************************************************************************************************
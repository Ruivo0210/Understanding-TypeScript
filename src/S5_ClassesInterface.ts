// ******************************************************************************************************

// ******************************************************************************************************
// *                                               Classes                                              *
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Programação orientada a objeto (POO)
//
// * A programação orientada a objetos é definida como a forma de trabalhar com entidades reais dentro
// * do nosso código. Por exemplo: temos uma lista de produtos, e ela renderiza os produtos que estão
// * dentro dela, que podem ser enviados de um servidor. Em seguida, temos o produto, que renderiza
// * os detalhes do produto adicionado ao carrinho. Em seguida, temos o carrinho, que renderiza qual
// * é o total do carrinho, por exemplo.
//
// * Classes e Objetos
// * Classes são definidas como o projeto para a criação de objetos. Elas definem como o objeto será,
// * quais propriedades (variáveis) ele terá, quais métodos, etc. Eles fazem com que a criação de
// * múltiplos objetos seja mais fácil.
// * Um objeto é definido como as coisas que você trabalha dentro do código. Todo bloco de código,
// * constante, variável, etc. São instâncias de classes, ou seja, são baseadas nelas.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Criando a primeira classe
//
// * No TS, podemos criar uma classe semelhante a como criamos objetos. Aqui, precisamos definir o método
// * construtor.
//
// ******************************************************************************************************

class Department {
  // Primeira letra de classe é maiúscula
  name: string; // Aqui, podemos também definir um valor padrão ao elemento adicionando ele após o seu
  // tipo e um sinal de igual.

  constructor(n: string) {
    // Método constrtutor
    this.name = n; // Retornar o valor da constante quando formos criar o objeto.
  }
}

const accounting = new Department("Accounting"); // Utilizando método construtor definido anteriormente.

console.log(accounting);

// ******************************************************************************************************
//
// * Funções de construtor e "This".
//
// * Ao utilizarmos a função de construtor, podemos atribuir outros métodos dentro do nosso objeto.
// * Fazemos isso para conseguirmos executar este métodos dentro de outros objetos criados pela mesma
// * classe.
//
// ******************************************************************************************************

class Departments {
  name: string;

  constructor(n: string) {
    // Método constrtutor
    this.name = n; // Retornar o valor da constante quando formos criar o objeto.
  }

  describe(this: Department) {
    // Atribuindo outro método ao objeto. Aqui, utilizamos o this
    // para fazer uma checagem que garante que o método só pode ser chamado por instâncias desta classe.
    console.log("Department: " + this.name);
  }
}

const accounting1 = new Departments("Accounting");

accounting1.describe(); // Retornando um método dentro de um objeto.

const accountingCopy = { name: "DUMMY", describe: accounting1.describe }; // Utilizando método de outro
// objeto dentro de um novo objeto.

accountingCopy.describe();

// ******************************************************************************************************
//
// * Modificadores de acesso ("Privado", "Público" e "Protected")
//
// * No TS, podemos modificar o acesso de métodos e propriedades utilizando os modificadores de acesso.
// * Propriedades privadas só podem ser acessadas exclusivamente usando o método definido dentro do
// * objeto, ou seja, não podemos modificá-la externamente.
// * Propriedades protegidas podem ser acessadas não só pela classe a qual pertence, mas também a qual-
// * quer classe que a herde.
//
// ******************************************************************************************************

class Department1 {
  public name: string; // Valor padrão, não precisamos explicitar.
  protected employees: string[] = []; // Valor privado, só pode ser acessado usando o método definido
  // aqui dentro.

  constructor(private readonly id: string, n: string) {
    this.name = n;
  }

  describe(this: Department1) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting2 = new Department1("d3", "Accounting");

accounting2.addEmployee("Max");
accounting2.addEmployee("Manu");

// accounting2.employees[2] = 'Anna'; // Aqui retorna um erro pois estamos tentando modificar um valor
// privado de maneira externa, sem utilizar o método.

accounting2.describe();
accounting2.name = "NEW NAME"; // Modificando externamente um valor público. Sem erros aqui.
accounting2.printEmployeeInformation();

// ******************************************************************************************************
//
// * Inicialização encurtada
//
// * Podemos encurtar a inicialização de elementos de uma classe ao atribuirmos o tipo e o acesso dentro
// * do método construtor. Fazendo isso, elas serão iniciadas no construtor:
//
// ******************************************************************************************************

class Exemplo {
  // private id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // Atribuindo tudo dentro do construtor
    //   this.id = id;
    //   this.name = n;
  }
}

// ******************************************************************************************************
//
// * Modificador readonly
//
// * Ao definirmos o tipo dos elementos, podemos também definir que ele seja apenas para leitura, ou
// * seja, ele não poderá ser modificado após ser definido.
//
// ******************************************************************************************************

class Exemplo1 {
  constructor(private readonly id: string, public name: string) {
    // ID não poderá ser alterado.
  }
}

// ******************************************************************************************************
//
// * Herança
//
// * Herança é o processo de herdar características de outras classes para dentro de uma nova classe.
//
// ******************************************************************************************************

class ITDepartment extends Department1 {
  // Aqui, utilizamos o "extends" para herdar as características
  // de "Department1" para a classe "ITDepartment". Assim, "ITDepartment" terá tudo que "Department1"
  // tem (até mesmo o método construtor), e o que adicionarmos aqui será adicionado somente à nova classe.
  admins: string[];
  constructor(id: string, admins: string[]) {
    // Sempre que adicionarmos um construtor a uma classe que
    // herda características de uma outra classe, precisamos adicionar o Super para referenciar ao
    // método construtor da classe original (neste caso, "Department1"), e precisamos passar os argumentos
    // referentes a ele.
    super(id, "IT");
    // Precisamos chamar o super sempre antes do this.
    this.admins = admins;
  }
}

const it = new ITDepartment("d1", ["Max"]); // Criando a classe herdada

it.addEmployee("Max");
it.addEmployee("Manu"); // Utilizando métodos da classe original na classe herdada

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

// ******************************************************************************************************
//
// * Substituindo propriedades
//
// * Podemos, ao herdar propriedades de outra classe, substituir essas propriedades dentro da nova
// * classe.
//
// ******************************************************************************************************

class AccountingDepartment extends Department1 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    // Aqui, substituímos o método "addEmployee", antes presente em "Department1".
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

// ******************************************************************************************************
//
// * Get & Set
//
// * Get é basicamente uma propriedade onde você executa uma função ou método que irá retornar um valor.
// * Podemos usá-lo para adicionar uma lógica mais complexa a um retorno.
// * Set funciona de forma semelhante, porém nele, atribuímos um parâmetro que recebemos no método.
//
// ******************************************************************************************************

class AccountingDepartment1 extends Department1 {
  private lastReport: string;

  get mostRecentReport() {
    // Get sendo utilizado para ler propriedade
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    // Set sendo utilizado para alterar propriedade
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

const accounting3 = new AccountingDepartment1("d2", []);

accounting3.addReport("Something went wrong...");
accounting3.mostRecentReport = "Year End Report"; // Set sendo utilizado para alterar propriedade
console.log(accounting3.mostRecentReport);

// ******************************************************************************************************
//
// * Métodos e propriedades estáticas
//
// * Métodos e propriedades estáticas são formas de acessarmos a métodos presentes dentro de classes,
// * sem que tenhamos a necessidade de criarmos outra classe para poder acessá-los. O JS possui alguns
// * embutidos, como o Math. É importante citar que não funcionam dentro de instâncias.
//
// ******************************************************************************************************

class Department2 {
  static fiscalYear = 2020; // Propriedade estática

  constructor(private readonly id: string, public name: string) {
    // ...
    console.log(Department2.fiscalYear);
  }

  static createEmployee(name: string) { // Método estático
    return { name: name };
  }
}

const employee1 = Department2.createEmployee('Max'); // Perceba que, ao criar um novo objeto, não 
// utilizamos o "new".
console.log(employee1);

// ******************************************************************************************************
//
// * Classes abstratas
//
// * Usamos classes abstratas quando queremos forçar os desenvolvedores a usarem um método específico 
// * em todas as instâncias de uma classe. Nele, não especificamos a execução do método, apenas
// * definimos o seu retorno. Fazemos da seguinte forma:
//
// ******************************************************************************************************

abstract class ExemploAbstrato{ // Quando usamos um método abstrato, precisamos definir que a classe
  // é abstrata.
  //...
  constructor(protected readonly id: string, public name: string){
    //...
  }
  abstract describe (this: ExemploAbstrato): void; // Aqui, definimos um método abstrato. Perceba que
  // não definimos seu comportamento, apenas seu retorno e a classe.
}

class ExemploHerdadoAbstrato extends ExemploAbstrato{ // Caso não usamos o método describe, temos erro.
  describe() {
    console.log('O ID é: ' + this.id) // Retorno void.
  }
}

// ******************************************************************************************************
//
// * Singletons e Construtor privado
//
// * Singletons são definidos dentro da POO como classes que possuem apenas uma instância. Quando
// * queremos reforçar que uma classe é um singleton, utilizamos um construtor privado. Ele faz com
// * que possamos criar somente uma única instância de uma classe.
//
// ******************************************************************************************************

class ExemploPrivado{
  private static instance: ExemploPrivado; // Definimos a instância
  private constructor(protected readonly id: string, public name: string){ // Como o construtor é 
    // Privado, então precisamos acessá-lo aqui dentro através de um método.
    //...
  }
  static getInstance() { // Definimos o método para retornar uma nova instância ou a mesma caso ja tenha
    if (ExemploPrivado.instance) {
      return this.instance;
    }
    this.instance = new ExemploPrivado('d2', 'TI'); // Criando nova instância
    return this.instance;
  }
}

const priv = ExemploPrivado.getInstance(); // Criando uma instância do construtor privado
const priv2 = ExemploPrivado.getInstance(); // Ao tentarmos criar uma segunda instância, temos o mesmo
// retorno da primeira.

console.log(priv, priv2);

// ******************************************************************************************************
// *                                            Interfaces                                              *
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Primeira interface
//
// * Uma interface nos permite descrever a estrutura de um objeto.
//
// ******************************************************************************************************

interface Person { // Por convenção, definimos uma interface com a primeira letra sempre maiúscula.
  name: string; // Definimos os objetos que a interface terá e seus tipos
  age: number;

  greet(phrase: string): void; // Definimos somente entrada e retorno dos métodos que a interface terá.
}

let user1: Person; // Criamos uma constante/variável baseada na interface, como um tipo.

user1 = { // Como interface define estrutura de um objeto, precisamos de um objeto seguindo sua estrutura
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet('Hi! I am') // Utilizando o método do objeto.

// ******************************************************************************************************
//
// * Interface vs tipos customizados
//
// * O uso dos dois é semelhante. Enquanto um tipo customizado é mais flexível em outras aplicações,
// * uma interface define as características de um objeto, o que significa que, neste caso, podemos
// * utilizar interface dentro de classes.
//
// ******************************************************************************************************

interface Greetable{
  name: string; // Podemos definir propriedades como readonly caso não queremos alterações nela.

  greet(phrase: string): void;
}

class Person implements Greetable{ // Construindo uma classe baseada na interface anterior
  name: string; // Precisamos seguir a estrutura da interface
  age = 30; // Porém podemos adicionar mais coisas (princípios da herança)
  
  constructor(n: string){ // Definindo o método construtor
    this.name = n;
  }

  greet(phrase: string){ // Definindo um método à classe
    console.log(phrase + ' ' + this.name);
  }
}

let user2: Greetable; // Criando constante baseada na interface

user2 = new Person('Max'); // Utilizando método construtor da classe

console.log(user2);
user2.greet('Hi! I am')

// ******************************************************************************************************
//
// * Por que interfaces?
//
// * Utilizamos interfaces quando, ao trabalharmos com classes dentro do código, queremos reforçar que, 
// * algumas destas classes contenham uma estrutura pré-definida dentro da interface. Isso permite que
// * várias classes compartilhem de um mesmo método, por exemplo.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Heranças em interfaces
//
// * Podemos trabalhar com heranças dentro de interfaces. Herdamos a restrição definida anteriormente.
//
// ******************************************************************************************************

interface Named { // Aqui, segmentamos a interface dos exemplos anteriores em duas.
  readonly name: string;
}

interface Greetable1 extends Named{ // Em seguida, criamos a segunda e extendemos a primeira nela.
  // Ao fazer isso, temos agora as restrições definidas na primeira também dentro da segunda.
  greet(phrase: string): void;
}

class Person1 implements Greetable1{ // Ao criar uma classe baseada na segunda interface, ela possui todas
  // as restrições definidas para as duas interfaces.
  name: string;

  constructor(n:string){
    this.name = n;
  }

  greet(phrase: string){
    console.log(phrase + ' ' + this.name)
  }
}

// ******************************************************************************************************
//
// * Interfaces como tipos de funções
//
// * Podemos usar interfaces de maneira semelhante a como utilizamos tipos em funções.
//
// ******************************************************************************************************

interface AddFn{ // Aqui, definimos os parâmetros e retorno da função de interface.
  (a: number, b: number): number;
}

let add: AddFn; // Criamos uma variável baseada na interface

add = (n1: number, n2: number) => { // Utilizando a função que acabamos de criar.
  return n1+n2;
};

// ******************************************************************************************************
//
// * Parâmetros e propriedades opcionais
//
// * Ao definirmos parâmetros e propriedades dentro de uma interface, podemos marcar eles também como
// * opcionais. Fazemos isso adicionando um ponto de interrogação a eles ou definindo um valor padrão.
//
// ******************************************************************************************************

interface Named1 {
  readonly name?: string; // Adicionando parâmetro opcional com o ?
  outputName?: string; // Ao marcar um parâmetro como opcional, precisamos marcar ele com interrogação
  // todas as vezes que aparecer novamente.
}

interface Greetable2 extends Named1 {
  greet(phrase: string): void;
}

class Person2 implements Greetable2 {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) { // Adicionando condição para caso o parâmetro não seja passado.
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) { // Adicionando condição para caso o parâmetro não seja passado.
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

// ******************************************************************************************************
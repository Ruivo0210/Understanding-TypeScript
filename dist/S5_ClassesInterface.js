"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
}
const accounting = new Department("Accounting");
console.log(accounting);
class Departments {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
}
const accounting1 = new Departments("Accounting");
accounting1.describe();
const accountingCopy = { name: "DUMMY", describe: accounting1.describe };
accountingCopy.describe();
class Department1 {
    constructor(id, n) {
        this.id = id;
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
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
accounting2.describe();
accounting2.name = "NEW NAME";
accounting2.printEmployeeInformation();
class Exemplo {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
}
class Exemplo1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class ITDepartment extends Department1 {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();
console.log(it);
class AccountingDepartment extends Department1 {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
}
class AccountingDepartment1 extends Department1 {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
}
const accounting3 = new AccountingDepartment1("d2", []);
accounting3.addReport("Something went wrong...");
accounting3.mostRecentReport = "Year End Report";
console.log(accounting3.mostRecentReport);
class Department2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(Department2.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
Department2.fiscalYear = 2020;
const employee1 = Department2.createEmployee('Max');
console.log(employee1);
class ExemploAbstrato {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class ExemploHerdadoAbstrato extends ExemploAbstrato {
    describe() {
        console.log('O ID é: ' + this.id);
    }
}
class ExemploPrivado {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static getInstance() {
        if (ExemploPrivado.instance) {
            return this.instance;
        }
        this.instance = new ExemploPrivado('d2', 'TI');
        return this.instance;
    }
}
const priv = ExemploPrivado.getInstance();
const priv2 = ExemploPrivado.getInstance();
console.log(priv, priv2);
let user1;
user1 = {
    name: 'Max',
    age: 30,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi! I am');
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user2;
user2 = new Person('Max');
console.log(user2);
user2.greet('Hi! I am');
class Person1 {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person2 {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}

/**
 * JSDesignPatterns
 * composite.js
 * Created by Sıdıka ÇAY on 2019-05-15
 */

"use strict";

/* when we need to treat a group of object as a single object(Tree) */
const Employee = function (name, salary) {
    this.name = name;
    this.salary = salary;
    this.subordinates = [];
};

Employee.prototype.add = function (employee) {
    this.subordinates.push(employee);
};

Employee.prototype.remove = function (employee) {

    for (let i = 0, length = this.subordinates.length; i < length; i++) {
        if (this.subordinates[i] === employee) {
            this.subordinates.splice(i, 1);
        }
    }
};

Employee.prototype.toString = function () {
    console.log(this.name + " " + this.salary);
};

Employee.prototype.getSubordinates = function () {
    for (let i = 0, length = this.subordinates.length; i < length; i++) {
        this.subordinates[i].toString();
    }
};

const CEO = new Employee("Sıdıka ÇAY", 50000);
const director = new Employee("Jane Doe", 20000);
const projectManager = new Employee("John Doe", 20000);
const developer1 = new Employee("Sam Winchester", 9000);
const developer2 = new Employee("Dean Winchester", 10000);

CEO.add(director);
director.add(projectManager);
projectManager.add(developer1);
projectManager.add(developer2);

projectManager.getSubordinates();
CEO.getSubordinates();
projectManager.remove(developer1);
projectManager.getSubordinates();

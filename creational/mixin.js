/**
 * js-design-patterns
 * mixin.js
 * Created by Sıdıka ÇAY on 2019-07-06
 */

/* Use to define functions which are shared among the objects */
/* and to avoid strict relationship(using inheritance) */

const Person = function (name, lastName) {
    this.name = name;
    this.lastName = lastName;
};

const mixinForFullName = {
    getFullName: function () {
        return this.name + " " + this.lastName;
    }
};

/* A simple Object.assign() function */
const assign = function (destination, source) {
    for (let methodName in source) {
        destination[methodName] = source[methodName];
    }

    return destination;
};

assign(Person.prototype, mixinForFullName);

const person = new Person("Sıdıka", "Çay");
console.log("Full Name: ", person.getFullName());

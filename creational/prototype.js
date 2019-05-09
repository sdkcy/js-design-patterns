/**
 * JSDesignPatterns
 * prototype.js
 * Created by Sıdıka ÇAY on 2019-04-27
 */

/* clone object prototype */
/*
const Human = function () {
    this.name = "Sidika";
};

Human.prototype.sayMyName = function () {
    console.log("My name is: ", this.name);
};

function clone(source, destination) {
    for (let attr in source) {
        destination[attr] = source[attr];
    }

    return destination;
}
*/


/* inheritance and override */
const Human = function (name) {
    this.name = name;
};

Human.prototype.sayMyName = function () {
    console.log("My name is ", this.name);
};

const Sidika = function (name) {
    Human.call(this, name);
};

Sidika.prototype = Object.create(Human.prototype);

Sidika.prototype.sayMyName = function () {
    console.log("New line for inheritance");
    Human.prototype.sayMyName.call(this);
};

const sidika = new Sidika("Sidika");
sidika.sayMyName();


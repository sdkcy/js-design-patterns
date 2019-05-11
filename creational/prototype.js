/**
 * JSDesignPatterns
 * prototype.js
 * Created by Sıdıka ÇAY on 2019-04-27
 */

"use strict";

/* inheritance and override */

//Base class
const Human = function (name) {
    this.name = name;
};

Human.prototype.sayMyName = function () {
    console.log("My name is ", this.name);
};

//Inheritance from Human
const Sidika = function (name, job) {
    Human.call(this, name);
    this.job = job;
};

Sidika.prototype = Object.create(Human.prototype);

Sidika.prototype.constructor = Sidika;

Sidika.prototype.sayMyName = function () {
    console.log("New line for inheritance");
    Human.prototype.sayMyName.call(this);
    console.log("and my job is", this.job);
};

const sidika = new Sidika("Sidika", "Developer");
sidika.sayMyName();


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
/**
 * JSDesignPatterns
 * basic.js
 * Created by Sıdıka ÇAY on 2019-05-08
 */

"use strict";

/* use to prepare object for use and accept parameters to set values to variables*/
const  Car = function (model, color) {
    this.model = model;
    this.color = color;

    //to define a function using this, causes new function defining every instance
    this.toString = function () {
        return "This " + this.model + " is " + this.color;
    }
};

const peugeout = new Car("Peugeout", "black");
const bmw = new Car("BMW", "red");

console.log(peugeout.toString());
console.log(bmw.toString());
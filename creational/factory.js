/**
 * JSDesignPatterns
 * factory.js
 * Created by Sıdıka ÇAY on 2019-05-01
 */

"use strict";

/* use to build the concrete objects */
/* Factory pattern: Obj creation process => to factory */

const Food = function (name) {
    this.name = name;
};

Food.prototype.getName = function () {
    console.log("This food name is ", this.name);
};
const Fruit = function (name) {
    Food.call(this, name);
};
Fruit.prototype = Object.create(Food.prototype);
Fruit.prototype.constructor = Fruit;

const Vegetable = function (name) {
    Food.call(this, name);
};
Vegetable.prototype = Object.create(Food.prototype);
Vegetable.prototype.constructor = Vegetable;

const Meat = function (name) {
    Food.call(this, name);
};
Meat.prototype = Object.create(Food.prototype);
Meat.prototype.constructor = Meat;

const Factory = function () {
    this.products = {};
};

Factory.prototype.register = function (Product, type) {
    if (!this.products[type]) {
        this.products[type] = Product;
    }
};

Factory.prototype.create = function (type, name) {
    if (this.products[type]) {
        return new this.products[type](name);
    }
    return null;
};

const factory = new Factory();
factory.register(Fruit, "fruit");
factory.register(Vegetable, "vegetable");
factory.register(Meat, "meat");
const fruit = factory.create("fruit", "banana");
const veg = factory.create("vegetable", "vegetable");
const meat = factory.create("meat", "entrecote");
fruit.getName();
veg.getName();
meat.getName();
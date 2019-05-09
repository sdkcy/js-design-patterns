/**
 * JSDesignPatterns
 * factory.js
 * Created by Sıdıka ÇAY on 2019-05-01
 */

"use strict";

/* use to build the concrete objects */
const Factory = function () {};

Factory.prototype.create = function (Product) {
    this.types = {};
    let product;
    if(this.types[Product]){
        return this.types[Product];
    }else {
        product = new Product();
        this.types[Product] = product
    }
    return product;
};

const Fruit = function () {
    console.log("Fruit is created");
};
const Vegetable = function () {
    console.log("Vegetable is created");
};
const Meat = function () {
    console.log("Meat is created");
};

const factory = new Factory();
const fruit = factory.create(Fruit);
const veg = factory.create(Vegetable);
const meat = factory.create(Meat);
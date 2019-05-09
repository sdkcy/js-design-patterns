/**
 * JSDesignPatterns
 * abstractFactory.js
 * Created by Sıdıka ÇAY on 2019-04-29
 */

"use strict";

/* concrete factory, concrete product */
/* to make easier complex obj creation and for changing obj in different environment */
/* Factory pattern: Obj creation process => to factory */
/* Factory pattern: Obj creation process => to factories => to abstract factories */

const Fruit = function (name) {
    this.name = name;
    this.getName = function () {
        console.log("The name of Product is", this.name);
    };
};

const FruitFactory = function () {
};

FruitFactory.prototype.check = function (options) {
    if (options.noInsect && options.fresh) {
        return true;
    }
};

FruitFactory.prototype.package = function (taftPackage, options) {
    return taftPackage && this.check(options)
};

FruitFactory.prototype.create = function (name, taftPackage, options) {
    return this.package(taftPackage, options) ? new Fruit(name) : null;
};


const Vegetable = function (name) {
    this.name = name;
    this.getName = function () {
        console.log("The name of product is", this.name);
    }
};

const VegetableFactory = function () {
};

VegetableFactory.prototype.check = function (options) {
    if (options.noInsect && options.fresh) {
        return true;
    }
};

VegetableFactory.prototype.package = function (taftPackage, options) {
    return taftPackage && this.check(options)
};

VegetableFactory.prototype.create = function (name, taftPackage, options) {
    return this.package(taftPackage, options) ? new Fruit(name) : null;
};


const FactoryProducer = function () {
    this.types = {};
    this.factories = {};
    this.registerFactory = function (factory, type) {
        if (factory.prototype["check"] && factory.prototype["package"] && factory.prototype["create"]) {
            this.factories[type] = factory;
        }
    };

    this.createFactory = function (type) {
        if (this.types[type]) {
            return this.types[type];
        }
        let Factory = this.factories[type];

        this.types[type] = new Factory();
        return this.types[type];
    }
};

const factoryProducer = new FactoryProducer();
factoryProducer.registerFactory(FruitFactory, "fruit");
const fruitFactory = factoryProducer.createFactory("fruit");
const fruitFactory2 = factoryProducer.createFactory("fruit");
const fruitFactory3 = factoryProducer.createFactory("fruit");
const fruit = fruitFactory.create("Banana", true, {noInsect: true, fresh: true});
fruit.getName();

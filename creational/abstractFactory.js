/**
 * JSDesignPatterns
 * abstractFactory.js
 * Created by Sıdıka ÇAY on 2019-04-29
 */

"use strict";

/* concrete factory, concrete product */
/* to make easier complex obj creation and for changing obj in different environment */
/* Abstract factory pattern: Obj creation process => to factories => to abstract factories */


//Factory Interface
const Factory = function () {
};
Factory.prototype.check=function () {
};
Factory.prototype.package=function () {
};
Factory.prototype.create=function () {
};

//Abstract Food
const Food = function () {
};
Food.prototype.getName = function () {
};

//Concrete product which implements Food
const Fruit = function (name) {
    this.name = name;
};

Fruit.prototype = Object.create(Food.prototype);

Fruit.prototype.constructor = Fruit;

Fruit.prototype.getName = function () {
    console.log("The name of Product is", this.name);
};


//Concrete product which implements Food
const Vegetable = function (name) {
    this.name = name;
};

Vegetable.prototype = Object.create(Food.prototype);

Vegetable.prototype.constructor = Vegetable;

Vegetable.prototype.getName = function () {
    console.log("The name of product is", this.name);
};

//Concrete Factory which implements Factory
const FruitFactory = function () {
};

FruitFactory.prototype = Object.create(Factory.prototype);

FruitFactory.prototype.constructor = FruitFactory;

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


//Concrete Factory which implements Factory
const VegetableFactory = function () {
};

VegetableFactory.prototype = Object.create(Factory.prototype);

VegetableFactory.prototype.constructor = VegetableFactory;

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
    this.factories = {};
};
FactoryProducer.prototype.registerFactory = function (factory, type) {
    //Force to implement the required methods of the interface
    if (factory.prototype["check"] && factory.prototype["package"] && factory.prototype["create"]) {
        this.factories[type] = factory;
    }
};
FactoryProducer.prototype.createFactory = function (type) {
    const Factory = this.factories[type];
    if(!Factory){
        return null;
    }

    return new Factory();
};

const factoryProducer = new FactoryProducer();
factoryProducer.registerFactory(FruitFactory, "fruit");
const fruitFactory = factoryProducer.createFactory("fruit");
const fruit = fruitFactory.create("Banana", true, {noInsect: true, fresh: true});
fruit.getName();

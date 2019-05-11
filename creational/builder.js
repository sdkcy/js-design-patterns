/**
 * JSDesignPatterns
 * builder.js
 * Created by Sıdıka ÇAY on 2019-05-01
 */

"use strict";

/* use to save complex constructors */

//Interface Farm
const Farm = function () {
};
Farm.prototype.create = function () {
};
Farm.prototype.plant = function () {
};
Farm.prototype.fertilize = function () {
};
Farm.prototype.crop = function () {
};
Farm.prototype.get = function () {
};


const Fruit = function (name) {
    this.name = name;
};
const Vegetable = function (name) {
    this.name = name;
};


//Implemented from Farm
const FruitFarm = function () {
    Farm.call(this);
    this.fruit = null;
};

FruitFarm.prototype = Object.create(Farm.prototype);

FruitFarm.prototype.constructor = FruitFarm;

FruitFarm.prototype.create = function (name) {
    this.fruit = new Fruit(name);
};

FruitFarm.prototype.plant = function () {
    console.log(this.fruit.name, " is planted");
};

FruitFarm.prototype.fertilize = function () {
    console.log(this.fruit.name, " is fertilized");
};

FruitFarm.prototype.crop = function () {
    console.log(this.fruit.name, " is cropped");
};

FruitFarm.prototype.get = function () {
    return this.fruit;
};


//Implemented from Farm
const VegetableFarm = function () {
    this.vegetable = null;
};

VegetableFarm.prototype = Object.create(Farm.prototype);

VegetableFarm.prototype.constructor = VegetableFarm;

VegetableFarm.prototype.create = function (name) {
    this.vegetable = new Vegetable(name);
};

VegetableFarm.prototype.plant = function () {
    console.log(this.vegetable.name, " is planted");
};

VegetableFarm.prototype.fertilize = function () {
    console.log(this.vegetable.name, " is fertilized");
};

VegetableFarm.prototype.crop = function () {
    console.log(this.vegetable.name, " is cropped");
};

VegetableFarm.prototype.get = function () {
    return this.vegetable;
};


//Builder class
const PlantBuilder = function () {
};

PlantBuilder.prototype.build = function (builder, name) {
    builder.create(name);
    builder.plant();
    builder.fertilize();
    builder.crop();

    return builder.get();
};

const plantBuilder = new PlantBuilder();
const fruitFarm = new FruitFarm();
const banana = plantBuilder.build(fruitFarm, "banana");
const vegetableFarm = new VegetableFarm();
const onion = plantBuilder.build(vegetableFarm, "onion");

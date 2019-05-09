/**
 * JSDesignPatterns
 * builder.js
 * Created by Sıdıka ÇAY on 2019-05-01
 */

"use strict";

/* use to save complex constructors */
const Fruit = function (name) {
    this.name = name;
};
const FruitBuilder = function () {
    this.fruit = null;
};

FruitBuilder.prototype.create = function (name) {
    this.fruit = new Fruit(name);
};

FruitBuilder.prototype.plant = function () {
    console.log(this.fruit.name, " is planted");
};

FruitBuilder.prototype.fertilize = function () {
    console.log(this.fruit.name, " is fertilized");
};

FruitBuilder.prototype.crop = function () {
    console.log(this.fruit.name, " is cropped");
};

FruitBuilder.prototype.get = function () {
    return this.fruit;
};

const Vegetable = function (name) {
    this.name = name;
};

const VegetableBuilder = function () {
    this.vegetable = null;
};

VegetableBuilder.prototype.create = function (name) {
    this.vegetable = new Vegetable(name);
};

VegetableBuilder.prototype.plant = function () {
    console.log(this.vegetable.name, " is planted");
};

VegetableBuilder.prototype.fertilize = function () {
    console.log(this.vegetable.name, " is fertilized");
};

VegetableBuilder.prototype.crop = function () {
    console.log(this.vegetable.name, " is cropped");
};

VegetableBuilder.prototype.get = function () {
    return this.vegetable;
};

const PlantBuilder = function () {
};

PlantBuilder.prototype.build = function (Builder, name) {
    const builder = new Builder();
    builder.create(name);
    builder.plant();
    builder.fertilize();
    builder.crop();

    return builder.get();
};

const plantBuilder = new PlantBuilder();
const fruit = plantBuilder.build(FruitBuilder, "banana");
const vegetable = plantBuilder.build(VegetableBuilder, "tomato");
console.log("fruit name", fruit.name);

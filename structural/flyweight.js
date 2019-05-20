/**
 * JSDesignPatterns
 * flyweight.js
 * Created by Sıdıka ÇAY on 2019-05-15
 */

"use strict";

/* to reduce number of object and increase performance */

const Flyweight = function (brand, model, processor) {
    this.brand = brand;
    this.model = model;
    this.processor = processor;
};

const FlyweightFactory = function () {
};
FlyweightFactory.flyweights = {};
FlyweightFactory.count = 0;
FlyweightFactory.get = function (brand, model, processor) {
    if (!FlyweightFactory.flyweights[brand + model + processor]) {
        FlyweightFactory.flyweights[brand + model + processor] = new Flyweight(brand, model, processor);
        FlyweightFactory.count++;
    }
    return FlyweightFactory.flyweights[brand + model + processor];
};

const Computer = function (brand, model, processor, memory, tag) {
    this.flyweight = FlyweightFactory.get(brand, model, processor);
    this.memory = memory;
    this.tag = tag;
};

const ComputerCollection = function () {
    this.computers = {};
    this.count = 0;
};
ComputerCollection.prototype.add = function (brand, model, processor, tag) {
    this.computers[tag] = new Computer(brand, model, processor, tag);
    this.count++;
};

const collection = new ComputerCollection();
collection.add("Apple", "iMac", "Intel", "8GB", "Retina 5K, 27 inch, 2019");
collection.add("Apple", "iMac", "Intel", "8GB", "Retina 4K, 21,5 inch, 2019");
collection.add("Apple", "iMac", "Intel", "8GB", "Retina 5K, 27 inch, 2017");
collection.add("Apple", "MacBook Air", "Intel", "8GB", "Retina 5K, 13 inch, 2019");

console.log(collection.count);
console.log(FlyweightFactory.count);
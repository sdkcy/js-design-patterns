/**
 * JSDesignPatterns
 * classic.js
 * Created by Sıdıka ÇAY on 4.10.2019
 */

"use strict";

(function () {
    const Animal = function (name) {

    };
    Animal.prototype.eat = function () {
        console.log(this.name + " is eating");
    };

    const Dog = function (name) {
        Animal.call(this);
        this.name = name;
    };
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;

    const dog1 = new Dog("Fındık");
    const dog2 = new Dog("Zeytin");
    dog1.eat();

    console.log("Does inheritance define just one function in every instance? The answer is ", dog1.eat === dog2.eat );
    console.log("So, maybe classic inheritance is expensive for modification and needs more code. But, in classic inheritance, " +
        "it creates just one reference point for inherited function and uses it for every instance. In too many object creation, it will save life");
})();

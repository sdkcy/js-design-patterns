/**
 * JSDesignPatterns
 * singleton.js
 * Created by Sıdıka ÇAY on 2019-05-01
 */

"use strict";

/* use to: if an instance does not exist, create an instance of a class or */
/*         if an instance already exist, return reference of the instance */
const Person = function () {
    if(Person._instance) {
        return Person._instance;
    }
};

Person._instance = null;

Person.getInstance = function () {
    if (!Person._instance) {
        Person._instance = new Person();
    }

    return Person._instance;
};

const ins1 = Person.getInstance();
const ins2 = Person.getInstance();
console.log("", ins1 === ins2);

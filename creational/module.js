/**
 * JSDesignPatterns
 * module.js
 * Created by Sıdıka ÇAY on 2019-04-28
 */

"use strict";

/* encapsulation using Object Literal */
/* every key/value is public */
const Counter1 = {
    counter: 0,
    incrementCounter: function () {
        this.counter++;
        this.log("Increase: ");
    },
    startCounter: function (to) {
        this.counter = 0;
        console.log("Counter started: ");
        for (let i = 0; i < to; i++) {
            this.incrementCounter();
        }
    },
    log: function (msg) {
        console.log("Counter with Object Literal. \n", msg,  this.counter);
    }
};

Counter1.incrementCounter();
Counter1.counter = 3; //counter value can be achieve and reassign
Counter1.log("Counter is set to ");


//Revealing Module Pattern
/* public&private encapsulation using closure(IIFE) and return Object Literal*/
const Counter2 = (function () {
    let counter = 0;

    const incrementCounter = function () {
        counter++;
        log("Increase: ");
    };

    const startCounter = function (to) {
        counter = 0;
        console.log("Counter started: ");
        for (let i = 0; i < to; i++) {
            incrementCounter();
        }
    };

    const decrementCounter = function () {
        counter--;
        log("Decrease: ");
    };

    const resetCounter = function () {
        counter = 0;
        log("Reset: ");
    };

    const log = function (msg) {
        console.log("Counter with Module Pattern.\n", msg, counter);
    };

    return {
        incrementCounter,
        startCounter,
        decrementCounter,
        resetCounter
    }
})();


Counter2.incrementCounter();
Counter2.decrementCounter();
Counter2.startCounter(8);
Counter2.resetCounter();


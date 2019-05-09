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
        this.log();
    },
    incrementCounterTo: function (to) {
        for (let i = 0; i < to; i++) {
            this.incrementCounter();
        }
    },
    log: function () {
        console.log("Counter with Object Literal", this.counter);
    }
};

Counter1.incrementCounter();
Counter1.counter = 3; //counter value can be achieve and reassign
Counter1.log();


/* public&private encapsulation using closure(IIFE) and return Object Literal*/
const Counter2 = (function () {
    let counter = 0;

    const incrementCounter = function () {
        counter++;
        log();
    };

    const incrementCounterTo = function (to) {
        for (let i = 0; i < to; i++) {
            incrementCounter();
        }
    };

    const decrementCounter = function () {
        counter--;
        log();
    };

    const resetCounter = function () {
        counter = 0;
        log();
    };

    const log = function () {
        console.log("Counter with Module Pattern", counter);
    };

    return {
        incrementCounter,
        incrementCounterTo,
        decrementCounter,
        resetCounter
    }
})();


Counter2.incrementCounter();
Counter2.decrementCounter();
Counter2.incrementCounterTo(8);
Counter2.resetCounter();


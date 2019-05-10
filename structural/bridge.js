/**
 * JSDesignPatterns
 * bridge.js
 * Created by Sıdıka ÇAY on 2019-05-10
 */

"use strict";

/* use to allow to work together two components which have own interface */

const Gesture = function (output) {
    this.output = output;
};

Gesture.prototype.tap = function () {
    this.output.click();
};
Gesture.prototype.swipe = function () {
    this.output.move();
};
Gesture.prototype.pan = function () {
    this.output.drag();
};
Gesture.prototype.pinch = function () {
    this.output.zoom();
};


const Screen = function () {
};

Screen.prototype.click = function () {
    console.log("Screen clicked");
};
Screen.prototype.move = function () {
    console.log("Screen moved");
};
Screen.prototype.drag = function () {
    console.log("Screen drag");
};
Screen.prototype.zoom = function () {
    console.log("Screen zoomed");
};

const screen = new Screen();
const gesture = new Gesture(screen);

gesture.tap();
gesture.swipe();
gesture.pan();
gesture.pinch();
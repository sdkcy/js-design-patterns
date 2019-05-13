/**
 * JSDesignPatterns
 * bridge.js
 * Created by Sıdıka ÇAY on 2019-05-10
 */

"use strict";

/* decouple abstraction from it's implementations */

//Refined abstraction
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


const Output = function () {
};
Output.prototype.click = function () {
};
Output.prototype.move = function () {
};
Output.prototype.drag = function () {
};
Output.prototype.zoom = function () {
};


//Concrete bridge implementer class
const Screen = function () {
    Output.call(this);
};
Screen.prototype = Object.create(Output.prototype);
Screen.prototype.constructor = Screen;

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


//Concrete bridge implementer class
const Audio = function () {
};
Audio.prototype = Object.create(Output.prototype);
Audio.prototype.constructor = Audio;

Audio.prototype.click = function () {
    console.log("Sound oink");
};
Audio.prototype.move = function () {
    console.log("Sound waves");
};
Audio.prototype.drag = function () {
    console.log("Sound screetch");
};
Audio.prototype.zoom = function () {
    console.log("Sound volume up");
};


const screen = new Screen();
const audio = new Audio();
const screenGesture = new Gesture(screen);
const audioGesture = new Gesture(audio);

screenGesture.tap();
screenGesture.swipe();
screenGesture.pan();
screenGesture.pinch();

audioGesture.tap();
audioGesture.swipe();
audioGesture.pan();
audioGesture.pinch();
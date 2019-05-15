/**
 * JSDesignPatterns
 * facade.js
 * Created by Sıdıka ÇAY on 2019-05-15
 */

"use strict";

/* to hide complexity of system and supply an interface to client for accessing the system */
const Shape = function () {
};
Shape.prototype.draw = function () {
};

const Rectangular = function () {
    Shape.call(this);
};
Rectangular.prototype = Object.create(Shape.prototype);
Rectangular.prototype.constructor = Rectangular;
Rectangular.prototype.draw = function () {
    console.log("Drawing rectangular");
};

const Circle = function () {
    Shape.call(this);
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function () {
    console.log("Drawing circle");
};

const ShapeMaker = function () {
  this.rectangular = new Rectangular();
  this.circle = new Circle();
};
ShapeMaker.prototype.drawRectangular = function () {
    this.rectangular.draw();
};
ShapeMaker.prototype.drawCircle = function () {
    this.circle.draw();
};


const shapeMaker = new ShapeMaker();
shapeMaker.drawCircle();
shapeMaker.drawRectangular();
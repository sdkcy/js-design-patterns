/**
 * JSDesignPatterns
 * builder2.js
 * Created by Sıdıka ÇAY on 2019-05-01
 */

"use strict";

/* use to save complex constructors */
const Car = function () {
    console.log("Car is created", );
};

const CarBuilder = function () {
};

CarBuilder.prototype.create = function () {
    console.log("Car created");
};
CarBuilder.prototype.step1 = function () {
    console.log("step1 done for Car");
};
CarBuilder.prototype.step2 = function () {
    console.log("step2 done for Car");
};
CarBuilder.prototype.get = function () {
    return new Car();
};

const Track = function () {};

const TrackBuilder = function () {};

TrackBuilder.prototype.create = function () {
    console.log("Car created");
};
TrackBuilder.prototype.step1 = function () {
    console.log("step1 done for Car");
};
TrackBuilder.prototype.step2 = function () {
    console.log("step2 done for Car");
};
TrackBuilder.prototype.get = function () {
    return new Track();
};

const VehicleBuilder = function (builder) {
    builder.create();
    builder.step1();
    builder.step2();
    return builder.get();
};

const carBuilder = new CarBuilder();
const vehicleBuilder = new VehicleBuilder(carBuilder);
console.log("vehicle", vehicleBuilder);
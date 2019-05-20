/**
 * JSDesignPatterns
 * proxy.js
 * Created by Sıdıka ÇAY on 2019-05-20
 */

"use strict";

/* Provides an interface similar to real object */
/* Manage a reference which lets the proxy access to real object */
const GeoCoder = function () {
};

GeoCoder.prototype.getLatLng = function (address) {

    if (address === "Amsterdam") {
        return "52.3700° N, 4.8900° E";
    } else if (address === "London") {
        return "51.5171° N, 0.1062° W";
    } else if (address === "Paris") {
        return "48.8742° N, 2.3470° E";
    } else if (address === "Berlin") {
        return "52.5233° N, 13.4127° E";
    } else {
        return "";
    }
};


const GeoProxy = function () {
    this.geoCoder = new GeoCoder();
    this.geoCache = {}
};

GeoProxy.prototype.getLatLng = function (address) {
    if (!this.geoCache[address]) {
        this.geoCache[address] = this.geoCoder.getLatLng(address);
    }
    console.log(address + " " + this.geoCache[address]);
    return this.geoCache[address];
};

GeoProxy.prototype.getCacheCount = function () {
    return Object.keys(this.geoCache).length;
};


const geo = new GeoProxy();
geo.getLatLng("Paris");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("London");
geo.getLatLng("London");

console.log("Cache count", geo.getCacheCount());


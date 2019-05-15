/**
 * JSDesignPatterns
 * decorator.js
 * Created by Sıdıka ÇAY on 2019-05-15
 */

"use strict";

/* when need to add new functionality to existing object without altering its structure */
const User = function (name) {
    this.name = name;
};

User.prototype.sayName = function () {
    console.log("The user name: ", this.name);
};


const DecoratedUser = function (user, address) {
  this.user = user;
  this.name = user.name; //***
  this.address = address;
};

DecoratedUser.prototype.sayName = function () {
    console.log("The decorated user name: ", this.name);
};


const user = new User("Sıdıka");
const decoratedUser = new DecoratedUser(user, "my address");

user.sayName();
decoratedUser.sayName();

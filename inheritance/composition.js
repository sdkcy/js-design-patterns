/**
 * JSDesignPatterns
 * composition.js
 * Created by Sıdıka ÇAY on 4.10.2019
 */

"use strict";

(function () {
    const eat = function (state) {
        return {
            eat: function () {
                console.log(state.name + " is eating");
            }
        }
    };

    const Dog = function (name) {
        let state = {
            name,
            bark: function () {
                console.log(this.name + " is barking");
            }
        };

        return Object.assign(state, eat(state));
    };

    const dog1 = new Dog("Fındık");
    const dog2=new Dog("Pekmez");
    dog1.bark();
    dog2.eat();

    console.log("Does composition define just one function in every instance? The answer is ", dog1.eat === dog2.eat );
    console.log("So maybe composition supplies easy modification and less code when we need inheritance. But, in every new instance, " +
        "composition creates new reference point for inherited function. In too many object creation, it will cause to need more memory");
})();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("../src/type");
var num = 5;
var myName = "Max";
var hasHobbies = true;
var nullValue = null;
var undefinedValue = undefined;
var hobbies = ["Sports", "Cooking"];
var logName = function (name) {
    console.log(name);
};
var PersonClass = (function () {
    function PersonClass(name, age) {
        this.name = name;
        this.age = age;
    }
    return PersonClass;
}());
var person = {
    name: "Max"
};
var point = {
    x: 1, y: 2
};
var car = new type_1.Car("BMW");
console.log(car.carName);
//# sourceMappingURL=variables.js.map
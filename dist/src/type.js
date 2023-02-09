"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = (function () {
    function Car(name) {
        this.car_name = name;
    }
    Object.defineProperty(Car.prototype, "carName", {
        get: function () {
            return this.car_name;
        },
        set: function (value) {
            this.car_name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=type.js.map
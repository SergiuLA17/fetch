//types in typescript

import {Car} from "../src/type";

const num: number = 5; //we can assign float number, integer number, negative number, positive number
const myName: string = "Max";
const hasHobbies: boolean = true; //true or false
const nullValue: null = null; //it's mean this variable is null
const undefinedValue: undefined = undefined; //it's mean this variable is not defined

//array
const hobbies: string[] = ["Sports", "Cooking"];

//function
const logName = (name: string): void => {
    console.log(name);
}

//type
type Person = {
    name: string;
}

//class
class PersonClass {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

//object
const person: Person = {
    name: "Max"
}

let point: { x: number, y: number } = {
    x: 1, y: 2
};

let car: Car = new Car("BMW");
console.log(car.carName);
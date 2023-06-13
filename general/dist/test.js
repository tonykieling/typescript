"use strict";
// https://www.youtube.com/watch?v=BCg4U1FzODs&t=1255s
let n = 500;
n++;
const word = "TK";
let state;
let any = true;
console.log("number: ", n);
console.log("word is: ", word);
state = true;
console.log("state: ", state);
any = 123;
any = "anything";
console.log("any:: ", any);
let arr = [1, 11, 2, 345];
arr = [...arr, 789];
// arr.push("text"); // it thorws an error, but still compiles it
console.log("array is: ", arr);
// Tuple
let example1;
example1 = [123, true, "Tony"];
console.log("example= ", example1);
// Tuple array
let example2 = [[1, true], [2, true], [3, false]];
console.log("example2= ", example2);
// Union - it allows a variable to be more than one type
let uExampl = 123;
uExampl = "123a";
console.log("uExampl::: ", uExampl);
// Enum - it allows to define a set of constant values for a variable
var directions1;
(function (directions1) {
    directions1[directions1["Up"] = 10] = "Up";
    directions1[directions1["Down"] = 11] = "Down";
    directions1[directions1["Left"] = 12] = "Left";
    directions1[directions1["Right"] = 13] = "Right";
})(directions1 || (directions1 = {}));
; // by default, the first item is ZERO
console.log("directions1.Up: ", directions1.Up, "directions1.Right: ", directions1.Right);
var directions2;
(function (directions2) {
    directions2["up"] = "UP";
    directions2["down"] = "DOWN";
    directions2["left"] = "LEFT";
    directions2["right"] = "RIGHT";
})(directions2 || (directions2 = {}));
; // by default, the first item is ZERO
console.log("directions2.down: ", directions2.down, "directions2.left: ", directions2.left);
const user = {
    id: 11,
    name: "TK"
};
// user.name = "asd"; // it errors
console.log("user - ", user);
// Type Assertion says to the compiler we want treat a variable in a diff type
let cid = 1;
let customerId = cid; // OR let customerId = cid as boolean;
console.log("customerId: ", customerId);
cid = "anything is OK";
// customerId = "it is NOT OK";
// it is okay do not define a varaible type, but in a functioon, it is MANDATORY specify them
// the return type is optional
const sumUp = (a, b) => a + b;
console.log("sumUp(1, 2) = ", sumUp(1, 2));
// Void
function logMessage(message) {
    console.log(`logMessage is "${message}"`);
}
logMessage("test");
;
const userInterfaceExample = {
    id: 1122,
    name: "TK-Jr"
};
// userInterfaceExample.name = "TK"; // it's NOT OK
console.log("userInterfaceExample - ", userInterfaceExample);
;
const addNum = (x, y) => x + y;
const subNum = (x, y) => x - y;
console.log("addNum(10, 20): ", addNum(10, 20), "subNum(20, 10): ", subNum(20, 10));
let numArr = [1, 2, 3];
numArr[0];
numArr[1];
console.log("numArr::: ", numArr);
let strArr = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
console.log("strArr::: ", strArr);
// Classes
// attributes can be private, public or protected
//  - private attribute is accessed (read or written) only within the class
//  - protected can be acessed only from whitin the origin class or an extended one
//  - public is the default way of protection
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.age = 30;
        this.address = "Burnaby";
        console.log(" constructor is running - object created: ", this.age, this.address);
    }
    getInfo() {
        return `all data for this object is: ${JSON.stringify(this)}`;
    }
}
const user1 = new Person(123, "TK");
console.log("user1.name is ok: ", user1.name); // this.age or this.address is not possible
console.log("info about user1: ", user1.getInfo());
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const std1 = new Student(1, "Test Student");
console.log("student name is: ", std1.name);
// Subclasses
// extend an existing class
class Alumni extends Student {
    constructor(id, name, yearGrad) {
        super(id, name); // it calls the method from the parent class
        // it is also possible to call methods from the extended class
        this.yearGraduation = Number(yearGrad);
    }
    getData() {
        return JSON.stringify(this);
    }
}
const alumni1 = new Alumni(11, "Alumni Std", "2020");
console.log("Alumni info::: ", alumni1, alumni1.getName());
// Generics allows the creation of reusable components
// instead of
// function reverseArray(arr: any[]): any[] {
//     const temp: any[] = [];
//     for (let i = arr.length - 1; i >= 0; i--)
//         temp.push(arr[i]);
//     return temp;
// }
// console.log(" original array: ", ["a", "b", "c", "d", "e"], "- string array reversed: ", reverseArray(["a", "b", "c", "d", "e"]));
// console.log(" original array: ", [1, 22, 333, 4444, 55555], "- number array reversed: ", reverseArray([1, 22, 333, 4444, 55555]));
// we go
function reverseArray(arr) {
    const temp = [];
    for (let i = arr.length - 1; i >= 0; i--)
        temp.push(arr[i]);
    return temp;
}
console.log(reverseArray(["a", "b", "c", "d", "e"]));
console.log(reverseArray([1, 22, 333, 4444, 55555]));
// the type right before the array sets the type of array being passed

"use strict";
//! Basic Types
let id = 5;
let company = 'Media';
let isPublished = true;
let x = 'Hello';
let a;
a = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//^ Tuple
let person = [1, 'Vadim', true];
//& Tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Vadim'],
    [3, 'Jill'],
];
//* Union
let pid;
pid = '22';
//~ Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
//& Type assertion
let cid = 1;
// 1
// let customerId = <number>cid;
// 2
let customerId = cid;
//* Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 5));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// console.log(sub(2, 3));
//^ Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const vadim = new Person(1, 'Vadim');
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const vadim1 = new Person1(1, 'Vadim');
//^ Subclasses
class Employee extends Person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// console.log(emp.register());
//& Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'John', 'Jill']);
// strArray.push(1);

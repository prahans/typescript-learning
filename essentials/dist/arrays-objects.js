"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hobbies = ["sport", "cooking"];
//hobbies.push(10);
// let user: (string | number)[]; //both are same 
let user;
user = [1, "prahans"];
user = ["anurag", "panuhar"];
user = [1, 5];
// Tuples
let possibleResult; // [-1, 1]
possibleResult = [1, -1];
// possibleResult = [1, 3, 5];
let engineer = {
    name: "prahans",
    age: 20,
    hobbies: ["coding", "cooking", "sport"],
    role: {
        description: "web developer",
        id: 5
    }
};
// it could be anything string, empty string, number, array, object or even empty array or object but not a null or undefined value.
let val = "is a value";
//flexible objects with the Record Type
let data;
data = {
    enter1: 1,
    enter2: "some string",
};

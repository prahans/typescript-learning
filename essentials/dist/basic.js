"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userName;
let age = 21;
userName = "prahans";
age = 32;
console.log(userName);
function add(a, b = 5) {
    return a + b;
}
add(5, 4); // 9
add(5); //10
console.log(age);

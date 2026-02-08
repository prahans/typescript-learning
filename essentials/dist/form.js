"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputEl = document.querySelector("#user-name"); // type casting
//type narrowing
// if(!inputEl){
//     throw new error("Element not fount!");
// }
console.log(inputEl?.value); // ? try to check value if inputEl is not null otherwise not 

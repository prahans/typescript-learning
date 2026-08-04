let userName;
let userAge = 38;
userName = "John Doe";
console.log(typeof userName); // Output: string
// userAge = "38"; // This will cause a TypeScript error because userAge is declared as a number
console.log(typeof userAge); // Output: number
function add(a, b = 5) {
    return a + b;
}
add(10); // output: 15
add(10, 20); // output: 30
// add("10"); // This will cause a TypeScript error because the first argument is not a number
// add(10, '20'); // This will cause a TypeScript error because the second argument is not a number
// understand union types
let age = 37;
age = "38"; // this is valid because age can be a string
let hobbines = ["Reading", "Traveling", "Cooking"];
// let hobbines: string[] = ["Reading", "Traveling", "Cooking"];
// hobbines.push(10); // this will cause a typescript error because hobbines is an array of strings
// let user: (string | number)[];
let user;
user = [1, 5];
user = ["John", "Doe"];
user = [1, "John", 5, "Doe"]; // this is valid because user can be an array of strings and numbers
export {};

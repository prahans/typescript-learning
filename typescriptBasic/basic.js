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
export {};

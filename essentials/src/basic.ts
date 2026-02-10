let userName: string;
let age = 21;

userName = "prahans";
age = 32;
console.log(userName);

function add(a: number, b = 5){
    return a + b;
}

let firstName = "anurag";

add(5,4); // 9
add(5); //10

console.log(age);
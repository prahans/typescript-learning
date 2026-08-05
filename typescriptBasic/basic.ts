let userName: string;
let userAge = 38;

userName = "John Doe";
console.log(typeof userName); // Output: string
// userAge = "38"; // This will cause a TypeScript error because userAge is declared as a number
console.log(typeof userAge); // Output: number

function add(a: number, b = 5) {
  return a + b;
}

add(10); // output: 15
add(10, 20); // output: 30
// add("10"); // This will cause a TypeScript error because the first argument is not a number
// add(10, '20'); // This will cause a TypeScript error because the second argument is not a number

// understand union types
let age: number | string = 37;

age = "38"; // this is valid because age can be a string

let hobbines = ["Reading", "Traveling", "Cooking"];
// let hobbines: string[] = ["Reading", "Traveling", "Cooking"];
// hobbines.push(10); // this will cause a typescript error because hobbines is an array of strings

// let user: (string | number)[];
let user: Array<string | number>;

user = [1, 5];
user = ["John", "Doe"];
user = [1, "John", 5, "Doe"]; // this is valid because user can be an array of strings and numbers

// tuples types

// let possibleResult: [number, number];

// possibleResult = [1, 2]; // thi is valid because possibleResult is a tuple of two numbers
// possibleResult = [1, 2, 3]; // this will cause a typescript error because possibleResult is a tuple of two numbers
// possibleResult = [1, "2"]; // this will cause a typescript error because possibleResult is a tuple of two numbers

let userInfo: {
  name: string;
  age: number | string;
  hobbines: string[];
  role: {
    discription: string;
    id: number;
  };
} = {
  name: "max",
  age: 38,
  hobbines: ["Reading", "Traveling", "Cooking"],
  role: {
    discription: "Admin",
    id: 1,
  },
};

let val: {} = "Hello World"; // this is valid because val can be any type of value
val = 10; // this is valid because val can be any type of value
val = true; // this is valid because val can be any type of value
val = { name: "John Doe" }; // this is valid because val can be any type of value
val = ["Reading", "Traveling", "Cooking"]; // this is valid because val can be any type of value
// val = null; // this is invalid because val cannot be null
// val = undefined; // this is invalid because val cannot be undefined

let data: Record<string, string | number>;

// data = "hello"; // this will cause a typescript error because data is a record of string keys and string or number values

data = {
  record1: 1,
  record2: "hello",
  record3: 3,
  // record4: false, // this will cause a typescript error because data is a record of string keys and string or number values
  // record5: ["Reading", "Traveling", "Cooking"], // this will cause a typescript error because data is a record of string keys and string or number values
};

// working with emums

// enum role {
//   Admin = "ADMIN",
//   User = "USER",
//   Guest = "GUEST",
// }

// let userRole: role;

// userRole = role.User; // this is valid because userRole is of type role
//  userRole = "guest"; // this will cause a typescript error because userRole is of type role

// popular way to use enums

type role = "Admin" | "User" | "Guest";

type User = {
  name: string;
  id: number | string;
  role: role;
  permissions: string[];
};

let userRole: role = "Admin";

userRole = "User"; // this is valid because userRole is of type role
userRole = "Guest"; // this is valid because userRole is of type role

let possibleResult: [1 | -1, 1 | -1];
possibleResult = [1, -1]; // this is valid because possibleResult is a tuple of two numbers
possibleResult = [-1, 1]; // this is valid because possibleResult is a tuple of two numbers
possibleResult = [1, 1]; // this is valid because possibleResult is a tuple of two numbers
possibleResult = [-1, -1]; // this is valid because possibleResult is a tuple of two numbers
// possibleResult = [1, 0]; // this will cause a typescript error because possibleResult is a tuple of two numbers
// possibleResult = [5, 1]; // this will cause a typescript error because possibleResult is a tuple of two numbers

function access(userRole: role) {}

function addNumbers(a: number, b: number) {
  return a + b;
}

function log(message: string) {
  console.log(message);
}

function logAndThrowError(message: string): never {
  console.log(message);
  throw new Error(message);
}

const logMsg = (msg: string) => {
  console.log(msg);
};

function perfromJob(cb: (msg: string) => void, message: string) {
  cb(message);
}

perfromJob(logMsg, "Hello World"); // this is valid because logMsg is a function that takes a string as an argument and returns void

type UserInfo = {
  name: string;
  age: number;
  greet: () => string;
};

let userInfoObj: UserInfo = {
  name: "John Doe",
  age: 38,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

let a: null | string = "hi";
// ..
a = null; // this is valid because a can be null

let b: undefined | string = "hi";
// ..
b = undefined; // this is valid because b can be undefined

function process(val: unknown) {
  if (
    typeof val === "object" &&
    !!val &&
    "log" in val &&
    typeof val.log === "function"
  ) {
    val.log();
  }
}

function generateError(msg?: string) {
  throw new Error(msg);
}

generateError("This is an error message");
generateError();

type employee = {
  name: string;
  age: number;
  role?: role;
};

const person: employee = {
  name: "John Doe",
  age: 38,
  role: "Admin",
};

const person2: employee = {
  name: "John Doe",
  age: 38,
};

// nullish coalescing operator

let input = "";

// const didProvideInput = input || false;
// console.log(didProvideInput); // output: false

const didProvideInput = input ?? false;
console.log(didProvideInput); // output: '' here only returns false if input is null or undefined

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

new Person("John Doe", 38);

export {};

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
// let user: Array<string | number>;
// user = [1, 5];
// user = ["John", "Doe"];
// user = [1, "John", 5, "Doe"]; // this is valid because user can be an array of strings and numbers
// tuples types
// let possibleResult: [number, number];
// possibleResult = [1, 2]; // thi is valid because possibleResult is a tuple of two numbers
// possibleResult = [1, 2, 3]; // this will cause a typescript error because possibleResult is a tuple of two numbers
// possibleResult = [1, "2"]; // this will cause a typescript error because possibleResult is a tuple of two numbers
let userInfo = {
    name: "max",
    age: 38,
    hobbines: ["Reading", "Traveling", "Cooking"],
    role: {
        discription: "Admin",
        id: 1,
    },
};
let val = "Hello World"; // this is valid because val can be any type of value
val = 10; // this is valid because val can be any type of value
val = true; // this is valid because val can be any type of value
val = { name: "John Doe" }; // this is valid because val can be any type of value
val = ["Reading", "Traveling", "Cooking"]; // this is valid because val can be any type of value
// val = null; // this is invalid because val cannot be null
// val = undefined; // this is invalid because val cannot be undefined
let data;
// data = "hello"; // this will cause a typescript error because data is a record of string keys and string or number values
data = {
    record1: 1,
    record2: "hello",
    record3: 3,
    // record4: false, // this will cause a typescript error because data is a record of string keys and string or number values
    // record5: ["Reading", "Traveling", "Cooking"], // this will cause a typescript error because data is a record of string keys and string or number values
};
// type User = {
//   name: string;
//   id: number | string;
//   role: role;
//   permissions: string[];
// };
let userRole = "Admin";
userRole = "User"; // this is valid because userRole is of type role
userRole = "Guest"; // this is valid because userRole is of type role
let possibleResult;
possibleResult = [1, -1]; // this is valid because possibleResult is a tuple of two numbers
possibleResult = [-1, 1]; // this is valid because possibleResult is a tuple of two numbers
possibleResult = [1, 1]; // this is valid because possibleResult is a tuple of two numbers
possibleResult = [-1, -1]; // this is valid because possibleResult is a tuple of two numbers
// possibleResult = [1, 0]; // this will cause a typescript error because possibleResult is a tuple of two numbers
// possibleResult = [5, 1]; // this will cause a typescript error because possibleResult is a tuple of two numbers
function access(userRole) { }
function addNumbers(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
function logAndThrowError(message) {
    console.log(message);
    throw new Error(message);
}
const logMsg = (msg) => {
    console.log(msg);
};
function perfromJob(cb, message) {
    cb(message);
}
perfromJob(logMsg, "Hello World"); // this is valid because logMsg is a function that takes a string as an argument and returns void
let userInfoObj = {
    name: "John Doe",
    age: 38,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
};
let a = "hi";
// ..
a = null; // this is valid because a can be null
let b = "hi";
// ..
b = undefined; // this is valid because b can be undefined
function process(val) {
    if (typeof val === "object" &&
        !!val &&
        "log" in val &&
        typeof val.log === "function") {
        val.log();
    }
}
function generateError(msg) {
    throw new Error(msg);
}
// generateError("This is an error message");
// generateError();
// type employee = {
//   name: string;
//   age: number;
//   role?: role;
// };
// const person: employee = {
//   name: "John Doe",
//   age: 38,
//   role: "Admin",
// };
// const person2: employee = {
//   name: "John Doe",
//   age: 38,
// };
// nullish coalescing operator
let input = "";
// const didProvideInput = input || false;
// console.log(didProvideInput); // output: false
const didProvideInput = input ?? false;
console.log(didProvideInput); // output: '' here only returns false if input is null or undefined
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
class Person {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p1 = new Person("John Doe", 38);
const p2 = new Person("max", 34);
console.log(p1, p2);
console.log(p1.name, p2.name);
console.log(p1.age, p2.age);
p1.hobbies.push("Reading");
// p1.hobbies = ["Traveling"]; // this will cause a typescript error because hobbies is a readonly property
// class User {
//   constructor(private firstName: string, private  lastName: string) {
//   }
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// const user = new User("John", "Doe");
// console.log(user.fullName); // output: John Doe
class User {
    _firstName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim().length === 0) {
            throw new Error("First name cannot be empty");
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim().length === 0) {
            throw new Error("Last name cannot be empty");
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    static eid = "User-001";
    static greet() {
        console.log("Hello from User class");
    }
}
User.greet(); // output: Hello from User class
console.log(User.eid); // output: User-001
const max = new User();
max.firstName = "Max";
max.lastName = "Smith";
console.log(max.fullName); // output: Max Smith
class Employee extends User {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
        // super.firstName = "John";
    }
}
export {};

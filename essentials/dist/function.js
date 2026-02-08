"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
const logMsg = (msg) => {
    console.log(msg);
};
function performJob(cb) {
    cb("job done");
}
performJob(logMsg);
let user = {
    name: "prahans",
    age: 20,
    greet() {
        return "hello";
    }
};

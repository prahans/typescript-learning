"use strict";
// type FileData = {
//   path: string;
//   content: string;
// };
const fileSource = { type: "file", path: "/some/path/to/file.csv" };
const dbSource = { type: "db", connectionUrl: "connection-url" };
function isFile(source) {
    return source.type === "file";
}
function loadData(source) {
    //   if ("path" in source) {
    //   if (source.type === "file") {
    if (isFile(source)) {
        // source.path
        // source.path;
        return;
    }
    //   source.connectionUrl
    //   source.connectionUrl;
}
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    join() {
        // ...
    }
}
class Admin {
    constructor(permissions) { }
    scan() {
        // ...
    }
}
const user = new User("max");
const admin = new Admin(["ban", "restore"]);
function init(entity) {
    if (entity instanceof User) {
        entity.join();
        return;
    }
    entity.scan();
    return;
}
function getLength(val) {
    if (typeof val === "string") {
        const numberOfWords = val.split(" ").length;
        return `${numberOfWords} words`;
    }
    return val.length;
}
const numOfWords = getLength("does this work?");
numOfWords.length;
const numOfItems = getLength(["sport", "cookies"]);
console.log(typeof numOfWords); // string
console.log(typeof numOfItems); // number
let store = {};
// ...
store.id = 5;
store.isOpen = true;
// store.name = "max";

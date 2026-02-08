"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateError(msg) {
    throw new Error(msg);
}
// now msg become optional either we pass it or not. it will not show error.
generateError();
// let input = '';
// const didProvideInput = input || false;           // false
// const didProvideInput = input ?? false;              // ''
let user = {
    name: "prahans",
    age: 20,
    role: 'guest'
};

"use strict";
// function process(val: any){ // it is like javascript
//     val.log();
// }          
Object.defineProperty(exports, "__esModule", { value: true });
function process(val) {
    if (typeof val === 'object' &&
        !!val &&
        'log' in val &&
        typeof val.log === 'function') {
        val.log();
    }
}
let greet = {
    log() {
        console.log(greet);
    }
};
process(greet);

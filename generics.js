let names = ["spiderman", "iron man"];
let store = {};
store.name = "max";
store.isInstructor = true;
let nameStore = {};
// nameStore.id = 134;  // Type 'number' is not assignable to type 'string'.
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 2);
export {};

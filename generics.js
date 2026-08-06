let names = ["spiderman", "iron man"];
let store = {};
store.name = "max";
store.isInstructor = true;
let nameStore = {};
// nameStore.id = 134;  // Type 'number' is not assignable to type 'string'.
// function merge<T>(a: T, b: T) {
//   return [a, b];
// }
// const ids = merge<number, number>(1,2)
// const ids = merge(1, 2);
function merge(a, b) {
    return [a, b];
}
// const ids = merge<number, string>(1, "max");
const ids = merge(1, "max");
function mergeObj(a, b) {
    return { ...a, ...b };
}
const merged = mergeObj({ name: "max" }, { age: 34 });
export {};

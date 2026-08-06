let names: Array<string> = ["spiderman", "iron man"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = "max";
store.isInstructor = true;

let nameStore: DataStore<string> = {};
// nameStore.id = 134;  // Type 'number' is not assignable to type 'string'.

// function merge<T>(a: T, b: T) {
//   return [a, b];
// }

// const ids = merge<number, number>(1,2)
// const ids = merge(1, 2);

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

// const ids = merge<number, string>(1, "max");
const ids = merge(1, "max");

function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

const merged = mergeObj({ name: "max" }, { age: 34 });

export {};

let names: Array<string> = ["spiderman", "iron man"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = "max";
store.isInstructor = true;

let nameStore: DataStore<string> = {};
// nameStore.id = 134;  // Type 'number' is not assignable to type 'string'.

function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge(1, 2);

export {};

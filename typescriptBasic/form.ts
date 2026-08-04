// type casting
const inputEl = document.getElementById("name") as HTMLInputElement | null;

// if(!inputEl) {
//   throw new Error("Element not found");
// }

console.log(inputEl?.value);

export {};

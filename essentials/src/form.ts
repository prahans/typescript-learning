const inputEl = document.querySelector("#user-name") as HTMLInputElement | null; // type casting

//type narrowing
// if(!inputEl){
//     throw new error("Element not fount!");
// }

console.log(inputEl?.value); // ? try to check value if inputEl is not null otherwise not 
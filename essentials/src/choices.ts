// enum Role {
//     Admin,
//     Editor,
//     Guest
// }

// type MyNumber = number;   
type Role = 'admin' | 'editor' | 'guest';

type user = {
    name: string;
    age: number;
    role: Role;
    permission: string[];
}

let person: user = {
    name : "prahans",
    age : 21,
    role: 'editor',
    permission: ["hello"]
}

console.log(person.name);

let userRole: Role = 'admin';

// ...

userRole = 'guest';

let possibleResult: [-1 | 1, -1 | 1]; // [-1, 1]

possibleResult = [1, -1];

function access(role: Role){

}
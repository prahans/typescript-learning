function generateError(msg?: string){
    throw new Error(msg);
}

// now msg become optional either we pass it or not. it will not show error.
generateError();

type user = {
    name : string;
    age : number;
    role? : 'admin' | 'guest';
};

let input = '';
// const didProvideInput = input || false;           // false
const didProvideInput = input ?? false;              // ''

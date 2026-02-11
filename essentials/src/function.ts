function add(a: number, b: number){
    return a + b;
}

function log(message: string){
    console.log(message);
}

function logAndThrow(errorMessage: string): never{
    console.log(errorMessage);
    throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
    console.log(msg);
}

function performJob(cb: (msg: string) => void){
    cb("job done");
}

performJob(logMsg);

type User = {
    name: string;
    age: number;
    greet: () => string;
}

let user: User = {
    name : "prahans",
    age : 20,
    greet (){
        return "hello";
    }
}

user.greet();
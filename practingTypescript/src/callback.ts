// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     console.log(one() + two());
// }

// three();


let h1 = document.querySelector("h1") as HTMLElement;

// function changeColor(color: string, delay: number, nextColorChange?: () => void){
//     setTimeout(() => {
//     h1.style.color = color;
//     if(nextColorChange) nextColorChange();
// }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("pink", 1000);
//             })
//         })
//     })
// })


// function savetoDb(data: string, success: () => void, failure: () => void): void{
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//        success();
//     }else{
//         failure();
//     }
// }

// savetoDb(
//     "anurag",
//     () => {
//         console.log("data1 was saved.");
//         savetoDb("anurag", () => {
//             console.log("data2 was saved.");
//             savetoDb("javaScript", () => {
//                 console.log("data3 was saved");
//                 savetoDb("typescript", () => {
//                     console.log("data4 was saved");
//                     savetoDb("react", () => {
//                         console.log("data5 was saved");
//                         savetoDb("node js", () => {
//                             console.log("data6 was saved");
//                             savetoDb("express js", () => {
//                                 console.log("data7 was saved");
//                                 savetoDb("mongoDb", () => {
//                                     console.log("data8 was saved");
//                                     savetoDb("postgresql", () => {
//                                         console.log("data9 was saved");
//                                     }, () => {
//                                         console.log("weak connection. data not saved");
//                                     })
//                                 }, () => {
//                                     console.log("weak connection. data not saved");
//                                 })
//                             }, () => {
//                                 console.log("weak connection. data not saved");
//                             })
//                         }, () => {
//                             console.log("weak connection. data not saved");
//                         })
//                     }, () => {
//                         console.log("weak connection. data not saved");
//                     })
//                 }, () => {
//                     console.log("weak connection. data not saved");
//                 })
//             }, () => {
//                 console.log("weak connection. data not saved");
//             })
//         }, () => {
//             console.log("weak connection. data not saved");
//         })
//     },
//     () => {
//         console.log("weak connection. data not saved");
//     }
// )


// function savetoDb(data: string){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("success : data was saved");
//         }else {
//             reject("failure : weak connection");
//         }
//     });
// }

// savetoDb("anurag")
// .then((result) => {
//     console.log(result);
//     console.log("data saved");
//     return savetoDb("javaScript");
// })
// .then((result) => {
//     console.log(result);
//     console.log("data2 saved");
//     return savetoDb("typescript");
// })
// .then((result) => {
//     console.log(result);
//     console.log("data3 saved");
//     return savetoDb("react");
// })
// .then((result) => {
//     console.log(result);
//     console.log("data4 saved");
//     return savetoDb("node js");
// })
// .then((result) => {
//     console.log(result);
//     console.log("data5 saved");
//     return savetoDb("express js");
// })
// .then((result) => {
//     console.log(result);
//     console.log("data6 saved");
//     return savetoDb("mongoDB");
// })
// .then((result) => {
//     console.log(result);
//     console.log("data7 saved");
//     return savetoDb("postgresql");
// })
// .then((result) => {
//     console.log(result);
//     console.log("data8 saved");
// })
// .catch((error) => {
//     console.log(error);
//     console.log("promis is rejected");
// })
 
 
// // refactoring old code

// function changeColor(color: string, delay: number){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         let num = Math.floor(Math.random() * 10) + 1;
//         if(num < 5){
//             reject("promise is rejected.");
//         }

//         h1.style.color = color;
//         console.log(`color changed to ${color}`)
//         resolve("color changed");
//     }, delay);
// });
// }

// async function demo(){
//     try{
//         await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("purple", 1000);
//     }catch(err){
//         console.log("error caught");
//         console.log(err);
//     }

//     let a = 5;
//     console.log(a);
//     console.log("new number : ", a + 3);
// }

// demo();


// changeColor("red", 1000)
// .then((result) => {
//     console.log(result);
//     return changeColor("orange", 1000);
// })
// .then((result) => {
//     console.log(result);
//     return changeColor("green", 1000);
// })
// .then((result) => {
//     console.log(result);
//     return changeColor("blue", 1000);
// })
// .then((result) => {
//     console.log(result);
//     return changeColor("pink", 1000);
// })
// .then((result) => {
//     console.log(result);
//     return changeColor("purple", 1000);
// }).then((result) => {
//     console.log(result);
// })

// async function

// async function greet(){
//     throw "some random error"
//     return "hello";
// }

let url = "https://catfact.ninja/fact";

fetch(url)
.then((res) => {
    console.log(res)
    console.log(res.json);
})
.catch((err) => {
    console.log(err);
})
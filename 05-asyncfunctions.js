// setTimeout(()=>{
//     console.log("Hi");
// },2000)


// setTimeout(() => {
//     console.log("3");
//     setTimeout(() => {
//         console.log("2");
//         setTimeout(() => {
//             console.log("1");
//             setTimeout(() => {
//                 console.log("Start");
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

let fs = require("fs")
// fs.readFile("04-demo.js", "utf-8", (err, data) => {
//     if (err) {
//         console.error("ERROR:" + err)
//     } else {
//         console.log(data);
//     }
// })

// PROMISES

// fs.promises.readFile("04-demo.js", 'utf-8').then((data) => {
//     console.log(data)
// })
//     .catch((err) => {
//         console.log("ERROR" + err);
//     })

// let samplePromise = new Promise((resolve, reject) => {
//     let a=124
//     if(a==12){
//         resolve()
//     }else{
//         reject()
//     }
// })
// samplePromise.then(()=>{console.log("Success")})
//             .catch(()=>{console.log("Error")})

async function reading(){
    try{
        let data=await fs.promises.readFile("01-intro.js","utf-8")
    console.log(data)
    }catch(error){
        console.log(error)
    }
}
reading()
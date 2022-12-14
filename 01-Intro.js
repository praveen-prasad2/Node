console.log("Node")

function findSum(a, b) {
    console.log(a + b)
}
findSum(1, 2)

console.log(__dirname)

let myFunction = require("./02-samplemodule")
myFunction.productNumber(5, 4)
myFunction.printHi()
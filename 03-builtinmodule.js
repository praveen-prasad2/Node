let path = require("path")
console.log(path.sep)

let newpath = path.join(__dirname, "02-samplemodule.js")
console.log(newpath)

const fs = require("fs")

async function readMyFile() {
    fs.readFile("02-samplemodule.js", "utf-8", (err, data) => {

        console.log(data)
    })
}
readMyFile()

async function writeMyFile() {
    fs.writeFile("04-demo.js", "Hi from Praveen", () => {
        console.log(data_writed)
    })
}
writeMyFile()
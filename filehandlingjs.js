const fs = require("fs")

// console.log(fs)

console.log("starting")
// fs.writeFileSync("file.txt","harry is developer",()=>{
//     console.log("done")
//
// fs.readFile("file.txt",(error,data)=>{
//     console.log(error,data.toString())
// })
fs.appendFile("file.txt","harryyy",(error,data)=>{
    console.log(error,data)
})
console.log("ending")
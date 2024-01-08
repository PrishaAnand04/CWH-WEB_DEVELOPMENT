const { error } = require("console")
const fs =require("fs")

console.log(fs)

console.log("starting")
// fs.writeFileSync("prisha.txt","prisha is the besttt")
// fs.writeFile("prisha2.txt","pri the beastttt",()=>{
//     console.log("done")
//     fs.readFile("prisha2.txt",(error,data)=>{
//         console.log(error,data.toString())
//     })
// })

fs.appendFile("prisha.txt"," and beautifulll",(e,d)=>{
    console.log(d)
})
console.log("ending")
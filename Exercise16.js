import mongoose from "mongoose";
import express from "express";
import { DaGe } from "./models/datagenerator.js";

let con=await mongoose.connect("mongodb://localhost:27017/DATA")
const app=express()
const port=3000


function getRandomInt(min, max) {
    min = Math.ceil(min);   
    max = Math.floor(max);  
    return Math.floor(Math.random() * (max - min)) + min;
}
function generated(){
   let name=["harry","prisha","abc"];
   let city=["delhi","mumbai","jaipur"];
   let lan=["hindi", "english","german"];
   let salary=[1000,2000,3000];
   let idx=getRandomInt(0,3)

   let arr=[name[idx],lan[idx],city[idx],salary[idx]]

   return arr
}

app.get('/',(req,res)=>{
    let c=generated()
    const dg=new DaGe({name: c[0],lang:c[1],city:c[2],salary: c[3]})
    dg.save()
    res.send("done saving")
})

app.get('/a',async (req,res)=>{
    let dg= await DaGe.findOne({})
    res.json({name: dg.name,lang:dg.lang,city:dg.city,salary:dg.salary})
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
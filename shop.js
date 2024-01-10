const express=require('express')
const router= express.Router()

router.get('/',(req,res)=>{
    res.send("shop home page")
})

router.get('/about',(req,res)=>{
    res.send("shop page")
})

module.exports=router
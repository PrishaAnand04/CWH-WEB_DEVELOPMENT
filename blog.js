const express=require('express')
const router= express.Router()

router.use((req,res,next)=>{
    console.log('time : ',Date.now())
    next()
})

router.get('/',(req,res)=>{
    res.send("blog home page")
})

router.get('/about',(req,res)=>{
    res.send("about page")
})

router.get('/blogpost/:slug',(req,res)=>{
    res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports=router
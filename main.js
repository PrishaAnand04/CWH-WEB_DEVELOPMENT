const express = require('express')
// const shop=require('./routes/shop')
const blog=require('./routes/blog')


const app = express()
const port = 3000
const fs=require("fs")

app.use(express.static('public'))
app.use('/blog',blog)
// app.use('/shop',shop)

app.use((req,res,next)=>{
  console.log(req.headers)
  req.prisha='i am here';
  fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
  // res.send("hacked by middleware 1")
  next()
})

app.use((req,res,next)=>{
  console.log("M2")
  console.log(req.header)
  req.prisha="yoo";
  next()
})

app.get('/', (req, res) => {
  // console.log("hey its a get request")
  res.send('Hello Worldddd!')
})
app.get('/about', (req, res) => {
  res.send('About '+ req.prisha)
})

app.get('/contact', (req, res) => {
  res.send('Contact Us')
})

// app.post('/',(req,res)=>{
//   console.log("hey its a post request")
//   res.send('hello world post')
// })

// app.put('/',(req,res)=>{
//   console.log("hey its a put request")
//   res.send("helloo world put")
// })

// app.get("/index",(req,res)=>{
//   console.log("hey its a get i")
//   res.sendFile('templates/index.html',{root:__dirname})
//   // res.send("henloo from index")
// })

// app.get("/api",(req,res)=>{
//   res.json({a:1,b:2,c:3,d:4})
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
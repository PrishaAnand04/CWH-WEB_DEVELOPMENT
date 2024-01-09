const express = require('express')
const app = express()
const port = 5500

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/contct', (req, res) => {
    res.send('Contact Us')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
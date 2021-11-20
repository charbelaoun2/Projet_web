const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/', (req, res) => {
    res.send('post Hello World!')
  })


app.get('/donations', (req, res) => {
    res.send('Donation word')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
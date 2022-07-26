const express = require('express')

// express initialization
const app = express()

const port = 8000

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

app.get('/check', (req, res) => {
  res.send('Hello World');
})

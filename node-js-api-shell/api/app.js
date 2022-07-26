const express = require('express')
const { exec } = require('child_process')
// express initialization
const app = express()

const port = 8000

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

app.get('/check', (req, res) => {
  //   res.send('Hello World')
  exec('node --version', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    res.send(`Node version : ${stdout}`)
    console.log(`Node version : ${stdout}`)
  })
})

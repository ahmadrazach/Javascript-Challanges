import express from 'express'
import { exec } from 'child_process'
import fetch from 'node-fetch'
import fs, { appendFile } from 'fs'

// express initialization
const app = express()

// saving as a variable
const port = 8000

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/changedata', function (req, res) {
  const accountTokenAddress = req.body.token
  const updatedUri = req.body.uri
  const tempDataFile = `./temp/${accountTokenAddress}.json`

  if (!fs.existsSync('./temp')) fs.mkdirSync('./temp')

  const updateFile = (updatedDataUri) => {
    //fetching updatedDataUri, retreving data and updating it in the data
    fetch(updatedDataUri)
      .then((response) => {
        return response.json()
      })
      .then((updatedData) => {
        //reading a metadata file and updating data
        const tokenData = JSON.parse(fs.readFileSync(tempDataFile))
        tokenData.name = updatedData.name
        tokenData.symbol = updatedData.symbol
        tokenData.uri = updatedDataUri
        fs.writeFileSync(tempDataFile, JSON.stringify(tokenData))
        console.log(`${tempDataFile} File updated with new Data`)
      })
  }

  // command execution function
  const runCommand = (command, option) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }
      if (option === 0) {
        updateFile(updatedUri)
        const shellCommand_updateTokenData = `metaboss update data -a ${accountTokenAddress} -k ./configs/wallet.json -n ${tempDataFile}`
        runCommand(shellCommand_updateTokenData, 1)
      } else {
        res.send(`${stdout}`)
        console.log(`${stdout}`)
      }
    })
  }

  const shellCommand_makeFile = `metaboss decode mint --account ${accountTokenAddress} -o ./temp`
  runCommand(shellCommand_makeFile, 0)
})

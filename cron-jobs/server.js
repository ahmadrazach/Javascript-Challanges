import { appendFile, write } from 'fs'
import cron from 'node-cron'
import fetch from 'node-fetch'
import express from 'express'

const app = express()
const port = 5000

fetch('https://testnet.binance.vision/api/v3/ticker/price')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    cron.schedule('* * * * * *', function () {
      //reading a metadata file and updating data
      console.log('Binance, latest prices = >\n', data)
    })
  })

app.listen(port, () => console.log(`Server started on port ${port}`))
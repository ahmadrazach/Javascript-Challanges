const { Spot } = require('@binance/connector')

const apiKey =
  'xMNMR3tQAoDn4XGEC8WrtVkD4FPIjoSTSoCZaIILMqhUvbyy9KYIKNYtHyBF2sR5'
const apiSecret =
  '7gycwSpkCyQ20vfpMhoIypshrivzPtdy4UU9L7ioLVig5BMS2BxzuwO2GQFXI5NG'
// provide the testnet base url
const client = new Spot(apiKey, apiSecret, {
  baseURL: 'https://testnet.binance.vision',
})

//options

for (let option = 0; option != -1; ) {
  console.log('\n1-Buy BNB USDT\n2-See all orders\3-Quit ')
  if (option === 1) {
    client
      .newOrder('BNBUSDT', 'BUY', 'LIMIT', {
        price: '490',
        quantity: 0.1,
        timeInForce: 'GTC',
      })
      .then((response) => client.logger.log(response.data))
      .catch((error) => client.logger.error(error))
  } else if (option === 2) {
    // Get all the orders
    client
      .allOrders('BNBUSDT', {
        orderId: 52,
      })
      .then((response) => client.logger.log(response.data))
      .catch((error) => client.logger.error(error))
  } else if (option === 3) {
    break
  }
}
console.log('by')

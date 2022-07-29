const { Spot } = require('@binance/connector')

const apiKey =
  'xMNMR3tQAoDn4XGEC8WrtVkD4FPIjoSTSoCZaIILMqhUvbyy9KYIKNYtHyBF2sR5'
const apiSecret =
  '7gycwSpkCyQ20vfpMhoIypshrivzPtdy4UU9L7ioLVig5BMS2BxzuwO2GQFXI5NG'
// provide the testnet base url
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision'})

// // Get account information
// client.account({ recvWindow: 6000 }).then((response) => client.logger.log(response.data))

// Get all the orders
client.allOrders('BNBUSDT', {
  orderId: 52
}).then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))

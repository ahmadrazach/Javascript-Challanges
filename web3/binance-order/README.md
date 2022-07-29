# Buy and see the Binance crypto coins with Binance Testnet API

( only for testing purpose !)

## Working

- taking latest crypto prices using binance api https://testnet.binance.vision/api/v3/ticker/price
- refreshing server result after every second to refresh the price rates

## Run the project

- setup

```
npm init
npm install
```

- Buy USDT

```
node buyOrder.js
```

- See all the Orders in your account:

```
node checkOrders.js
```

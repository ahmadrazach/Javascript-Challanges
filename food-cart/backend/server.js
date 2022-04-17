import express from 'express'
// const axios = require('axios')
// import products from './data/products'
import products from './data/products.js'
const app = express()


//nodemon app.js to start the server

// const products=[
//   {
//     _id: '1',
//     name: 'Cherries',
//     image: '/images/cherry.jpg',
//     description:
//       'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
//     brand: 'Apple',
//     category: 'Electronics',
//     price: 200,
//     countInStock: 10,
//     rating: 4.5,
//     numReviews: 12,
//     isChecked: false 
//   },
//   {
//     _id: '2',
//     name: 'Warermellons',
//     image: '/images/watermellon.jpg',
//     description:
//       'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
//     brand: 'Apple',
//     category: 'Electronics',
//     price: 599.99,
//     countInStock: 7,
//     rating: 4.0,
//     numReviews: 8,
//     isChecked: false 
//   },
//   {
//     _id: '3',
//     name: 'Apples',
//     image: '/images/apples.jpg',
//     description:
//       'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
//     brand: 'Cannon',
//     category: 'Electronics',
//     price: 929.99,
//     countInStock: 5,
//     rating: 3,
//     numReviews: 12,
//     isChecked: false 
//   },
//   {
//     _id: '4',
//     name: 'Oranges',
//     image: '/images/oranges.jpg',
//     description:
//       'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
//     brand: 'Sony',
//     category: 'Electronics',
//     price: 399.99,
//     countInStock: 11,
//     rating: 5,
//     numReviews: 12,
//     isChecked: false 
//   },
//   {
//     _id: '5',
//     name: 'Mangoes',
//     image: '/images/mangoes.jpg',
//     description:
//       'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
//     brand: 'Logitech',
//     category: 'Electronics',
//     price: 49.99,
//     countInStock: 7,
//     rating: 3.5,
//     numReviews: 10,
//     isChecked: false 
//   },
//   {
//     _id: '6',
//     name: 'Bananas',
//     image: '/images/bananas.jpg',
//     description:
//       'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
//     brand: 'Amazon',
//     category: 'Electronics',
//     price: 29.99,
//     countInStock: 0,
//     rating: 4,
//     numReviews: 12,
//     isChecked: false 
//   },
// ]

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hii!')
})

//getting all the products
app.get('/api/products', (req, res) => {
  res.json(products);
})

//getting one product
app.get('/api/products/:id',(req,res)=>{
  const course=products.find(product=>product.id===parseInt(req.params.id));
  if(!course) res.status(404).send('Did not found the product')
  res.send(course)
})

//PORT
const port =process.env.PORT||5000;
app.listen(port, () => console.log(`Listening on port ${port}...`))
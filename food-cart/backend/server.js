import express from 'express'
// const axios = require('axios')
// import products from './data/products'
import products from './data/products.js'
const app = express()


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
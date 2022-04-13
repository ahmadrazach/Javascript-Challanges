const express = require('express')
const axios = require('axios')


const app = express()

const products=[
  {id:1,name:'product1'},
  {id:2,name:'product2'},
  {id:3,name:'product3'},
]

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hi!')
})

//getting all the products
app.get('/api/products', (req, res) => {
  res.send(products);
})

//getting one product
app.get('/api/products/:id',(req,res)=>{
  const course=products.find(product=>product.id===parseInt(req.params.id));
  if(!course) res.status(404).send('Did not found the product')
  res.send(course)
})
//PORT
const port =process.env.PORT||3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))
//nodemon app.js to start the server

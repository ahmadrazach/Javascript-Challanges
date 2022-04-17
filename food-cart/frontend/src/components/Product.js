import React, { useState } from 'react'
import {Card} from 'react-bootstrap'
import products from '../products'
const Product = ({product}) => {
    //writing data in json file
    
    const fs = require("fs");
    
    console.log(products)
    const [items,saveItems]=useState(0)
  return (
    <Card  className='my-3 m-3 rounded'>
        <Card.Img src={product.image} variant='top'/>
        <Card.Body>
            <Card.Title as='div'>
            <input 
            type='checkbox'
            onChange={e=>console.log(product._id)}
            /> <strong>{product.name}</strong>   
            </Card.Title>

            <Card.Text as='div'>
                <div className='my-3'>
                
                </div>
            </Card.Text>
            <Card.Text as='h5'>Rs {product.price}  
            </Card.Text>

        </Card.Body>
    
    </Card>

  )
}

export default Product
import React from 'react'
import {Card} from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <Card className='my-3 m-3 rounded'>
        <Card.Img src={product.image} variant='top'/>
        <Card.Body>
            <Card.Title as='div'>
            <input type='checkbox'/> <strong>{product.name}</strong>   
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
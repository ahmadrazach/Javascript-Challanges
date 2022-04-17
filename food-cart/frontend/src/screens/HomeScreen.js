import React from 'react'
import {Row,Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
const HomeScreen = () => {
  return (
    <>
    <h1>Fresh Products</h1>
    <Row>
        {products?
        (
          products.map((product)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))):
        <h3>Loading...</h3>
        }
    </Row>
    </>
  )
}

export default HomeScreen
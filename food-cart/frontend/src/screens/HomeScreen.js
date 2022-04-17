import React,{useEffect, useState} from 'react'
import {Row,Col} from 'react-bootstrap'
// import products from '../products'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  //memoization
  const MProduct=React.memo(Product)

  const [products,setProducts]=useState([])
  
  useEffect(()=>{
    const fetchProducts=async()=>{
      const {data}=await axios.get('/api/products')
      setProducts(data)
     
    }
    fetchProducts()
  },[])


  return (
    <>
    <h1>Fresh Products</h1>
    <Row>
        {
          products.map((product)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
                <MProduct product={product}/>
            </Col>
        ))
        }
    </Row>
    </>
  )
}

export default React.memo(HomeScreen)
import React,{useEffect, useState,Suspense} from 'react'
import {Row,Col} from 'react-bootstrap'
// import Product from '../components/Product'
import axios from 'axios'

import { Ring } from '@uiball/loaders'
import Loader from '../components/Loader'
import {ErrorBoundary} from 'react-error-boundary'

//lazy loading
const Product=React.lazy(()=>import ('../components/Product'))

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
      
      <ErrorBoundary FallbackComponent={Loader} onReset={()=>{}}>
        <Suspense fallback={
          <>
            <Ring/>
            <h3> Fetching Products ...</h3>
          </>
        }>
        <Row>
            {
              products.map((product,key)=>(
                <Col sm={12} md={6} lg={4} xl={3} key={key}>              
                    <Product product={product}/>
                </Col>
            ))
            }
        </Row>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default React.memo(HomeScreen)
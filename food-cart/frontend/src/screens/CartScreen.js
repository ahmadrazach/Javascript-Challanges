
import React,{useState} from 'react'
import {Row,Col,ListGroup,Image,Form,Button,Card} from "react-bootstrap"
import {Link} from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import 

const CartScreen = ({product}) => {
  const [cartItems,setCartItems]=useState(0)
    return (
    <div>
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems===0?(
                    <h4>Your Cart is Empty <Link to='/'>Go Back</Link></h4>
                ):(
                    <ListGroup variant='flush'>
                    {
                        cartItems.map(item=>(
                            <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>$ {item.price}</Col>
                                
                            </Row>
                        </ListGroup.Item>
                        ))
                    }
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup vairant="flush">
                        <ListGroup.Item>
                            <h2>
                                Subtotal
                                {/* Subtotal({cartItems.reduce((acc,item)=>acc+item.qty,0)}) items */}
                            </h2>
                            $ Price
                            {
                                // cartItems.reduce((acc,item)=>acc+item.qty*item.price,0).toFixed(2)
                            }
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default CartScreen
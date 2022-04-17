
import React,{useState} from 'react'
import {Row,Col,ListGroup,Image,Card} from "react-bootstrap"
import {Link} from 'react-router-dom'



const CartScreen = () => {
    
    //extracting products from the localStorage
    const [cartItems, setcartItems] = useState(JSON.parse(localStorage.getItem("allEntries")) ?? 0);

    return (
    <div>
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length===0?(
                    <h4>Your Cart is Empty <Link to='/'>Go Back</Link></h4>
                ):(
                    <ListGroup variant='flush'>
                    {
                        cartItems.map((item,i)=>(
                            <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={3}>
                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                </Col>
                                <Col md={3}>
                                    <h6>{item.name}</h6>
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
                                Subtotal ({cartItems.length}) items
                            </h2>
                            Price : 
                            {
                                cartItems.reduce((acc,item)=>acc+item.price,0).toFixed(2)
                            } Rs
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default CartScreen
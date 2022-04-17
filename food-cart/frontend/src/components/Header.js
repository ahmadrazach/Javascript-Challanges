import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark'expand='lg' collapseOnSelect>
            <Container>
            <Navbar.Brand href='/'>Food Cart</Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link href='/cart'>Cart  <i className='fas fa-shopping-cart'></i></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
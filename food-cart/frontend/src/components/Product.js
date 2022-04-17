import React from 'react'
import {Card} from 'react-bootstrap'
// import products from '../products'
const Product = ({product}) => {


    const saveItem=(e)=>{
      
      var existingEntries = JSON.parse(localStorage.getItem("allEntries"))||[];
      localStorage.setItem("entry", JSON.stringify(product));

      //save the value into localStorage if user clicks
      if(e.target.checked){
        console.log('checked',e.target.value,e.target.name)
        existingEntries.push(product);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));
      }
      else{
        console.log('unchecked',e.target.value,e.target.name)
      }
      
    }
  return (
    <Card  className='my-3 m-3 rounded'>
        <Card.Img src={product.image} variant='top'/>
        <Card.Body>
            <Card.Title as='div'>
            <input 
            type='checkbox'
            name={product.name}
            value={product.price}
          
            onClick={saveItem}
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
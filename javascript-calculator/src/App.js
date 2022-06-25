
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import {useState} from 'react';

function App() {

  // saving value of the number
  const [nvalue,setNvalue]=useState("");

  //function to add all the clicked buttons into
  const addValue=(e)=>{

    //checking if one condition is already present
    // if(nvalue.indexOf('/')!==-1||nvalue.indexOf('x')!==-1||nvalue.indexOf('+')!==-1||nvalue.indexOf('-')!==-1)
    if(nvalue.length===1 && nvalue[0]==0 && e.target.value==0)
     alert('2 0s at start not allowed!')
     else
     setNvalue(nvalue+e.target.value);
    // else
    // alert('an action is already present.Please calculate it first');
  }

  //calculating result
  const calculateResult=(valueString)=>{

    //checking which calulation value(+,-,X,/) is present
    if(valueString.indexOf('/')!==-1)
    {
        let arr=valueString.split('/');
        if(arr[1].length>0)
          setNvalue((arr[0]/arr[1]).toFixed(3))
        else
          alert('give value after action');

    }
    else if(valueString.indexOf('x')!==-1)
    {
      let arr=valueString.split('x');
      if(arr[1].length>0)
          setNvalue(arr[0]*arr[1])
      else
        alert('give value after action');
    }
    else if(valueString.indexOf('+')!==-1)
    {
      let arr=valueString.split('+');
      if(arr[1].length>0)
         setNvalue(parseFloat(arr[0])+parseFloat(arr[1]))
      else
        alert('give value after action');
    }
    else if(valueString.indexOf('-')!==-1)
    {
      let arr=valueString.split('-');
      if(arr[1].length>0)
          setNvalue(arr[0]-arr[1])
      else
        alert('give value after action');
    }else{
      alert('please add an action')
    }
  }
  return (
    <Container className="w-50 m-auto">
          {/* Heading */}
          <h1 style={{textDecoration:'underline'}} className="text-center">React Javascript Calculator</h1>
          {/* Body */}
          <div className="mt-5 w-50 m-auto"  style={{border:'1px solid black',backgroundColor:"black",height:"",borderRadius:'5px'}}>
            {/* 6 rows */}
            {/* R1- input */}
            <input className="w-100" value={nvalue} style={{color:'white',backgroundColor:'black',border:'none',borderBottom:'1px solid grey',height:'7vh'}} type="text" readOnly/>
            <div className="m-1" >
              {/* R2 - actions (/,x,-,+)*/}
              <div className="d-flex justify-evenly">
                <Button variant="secondary" className="w-25 m-1"  value='/' onClick={e=>addValue(e)}>/</Button>
                <Button variant="secondary" className="w-25 m-1"  value='x' onClick={e=>addValue(e)}>X</Button>
                <Button variant="secondary" className="w-25 m-1"  value='-' onClick={e=>addValue(e)}>-</Button>
                <Button variant="secondary" className="w-25 m-1"  value='+' onClick={e=>addValue(e)}>+</Button>
              </div>
              
              {/* R3 - actions (=,AC)*/}
              <div className="d-flex justify-evenly">
                <Button variant="danger" className="w-50 m-1" onClick={e=>setNvalue([])}>AC</Button>
                <Button variant="primary" className="w-50 m-1" onClick={e=>calculateResult(nvalue)}>=</Button>
              </div>
              {/* R4 - btns (9,0,.)*/}
              <div className="d-flex justify-evenly">
                <Button variant="primary" className="w-25 m-1" value='9' onClick={e=>addValue(e)}>9</Button>
                <Button variant="primary" className="w-25 m-1" value='0' onClick={e=>addValue(e)}>0</Button>
                <Button variant="primary" className="w-75 m-1" value='.' onClick={e=>addValue(e)}>.</Button>
              </div>
              {/* R5 - btns (5,6,7,8) */}
              <div className="d-flex justify-evenly">
                <Button variant="primary" className="w-25 m-1" value='5' onClick={e=>addValue(e)}>5</Button>
                <Button variant="primary" className="w-25 m-1" value='6' onClick={e=>addValue(e)}>6</Button>
                <Button variant="primary" className="w-25 m-1" value='7' onClick={e=>addValue(e)}>7</Button>
                <Button variant="primary" className="w-25 m-1" value='8' onClick={e=>addValue(e)}>8</Button>
              </div>
              {/* R6 - btns (1,2,3,4) */}
              <div className="d-flex justify-evenly">
                <Button variant="primary" className="w-25 m-1" value='1' onClick={e=>addValue(e)}>1</Button>
                <Button variant="primary" className="w-25 m-1" value='2' onClick={e=>addValue(e)}>2</Button>
                <Button variant="primary" className="w-25 m-1" value='3' onClick={e=>addValue(e)}>3</Button>
                <Button variant="primary" className="w-25 m-1" value='4' onClick={e=>addValue(e)}>4</Button>
              </div>
            </div>
          </div>
    </Container>
  );
}

export default App;

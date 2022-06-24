
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
function App() {
  return (
    <Container className="w-50 m-auto">
          {/* Heading */}
          <h1 style={{textDecoration:'underline'}} className="text-center">React Javascript Calculator</h1>
          {/* Body */}
          <div className="mt-5 w-50 m-auto"  style={{border:'1px solid black',backgroundColor:"black",height:"50vh",borderRadius:'5px'}}>
            {/* 6 rows */}
            {/* R1- input */}
            <input className="w-100" style={{backgroundColor:'black',border:'none',borderBottom:'1px solid grey',height:'7vh'}} type="text" readOnly/>
            <div className="m-1" >
              {/* R2 - actions (/,x,-,+)*/}
              <div className="d-flex justify-evenly">
                <Button variant="secondary" className="w-25 m-1">/</Button>
                <Button variant="secondary" className="w-25 m-1">X</Button>
                <Button variant="secondary" className="w-25 m-1">-</Button>
                <Button variant="secondary" className="w-25 m-1">+</Button>
              </div>
              
              {/* R3 - actions (=,AC)*/}
              <div className="d-flex justify-evenly">
                <Button variant="primary" className="w-50 m-1">=</Button>
                <Button variant="danger" className="w-50 m-1">AC</Button>
              </div>
              {/* R4 - btns (9,0,.)*/}
              <div className="d-flex justify-evenly">
                <Button variant="primary" className="w-25 m-1">9</Button>
                <Button variant="primary" className="w-25 m-1">0</Button>
                <Button variant="primary" className="w-75 m-1">.</Button>
              </div>
              {/* R5 - btns (5,6,7,8) */}
              <div className="d-flex justify-evenly">
                <Button variant="primary" className="w-25 m-1">8</Button>
                <Button variant="primary" className="w-25 m-1">7</Button>
                <Button variant="primary" className="w-25 m-1">6</Button>
                <Button variant="primary" className="w-25 m-1">5</Button>
              </div>
              {/* R6 - btns (1,2,3,4) */}
              <div className="d-flex justify-evenly">
                <Button variant="primary" className="w-25 m-1">4</Button>
                <Button variant="primary" className="w-25 m-1">3</Button>
                <Button variant="primary" className="w-25 m-1">2</Button>
                <Button variant="primary" className="w-25 m-1">1</Button>
              </div>
            </div>
          </div>
    </Container>
  );
}

export default App;

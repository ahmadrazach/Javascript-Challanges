
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
          <div className="mt-5 w-50 m-auto"  style={{border:'1px solid black',backgroundColor:"black",height:"50vh"}}>
            {/* 6 rows */}
            {/* R1- input */}
            <input className="w-100" style={{backgroundColor:'black',border:'none',borderBottom:'1px solid grey',height:'5vh'}} type="text" readOnly/>
            <div className="m-2" >
              {/* R2 - actions (/,x,-,+)*/}
              <Row >
                <Col sm={"auto"}>
                   <Button variant="primary">/</Button>
                </Col>
                <Col sm={"auto"}>
                   <Button variant="primary">/</Button>
                </Col>
                <Col sm={"auto"}>
                   <Button variant="primary">/</Button>
                </Col>
                <Col sm={"auto"}>
                   <Button variant="primary">/</Button>
                </Col>
                
              </Row>
              {/* R3 - actions (=,AC)*/}
              {/* R4 - btns (9,0,.)*/}
              {/* R5 - btns (4,5,6,8) */}
              {/* R6 - btns (1,2,3,4) */}
            </div>
          </div>
    </Container>
  );
}

export default App;

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';



//function for the Drum Buttons
function DrumRow()
{
       <p>Hy</p>
}

function App() {

  //sounds
const sounds = [
  {
    id: 1,
    btn:"Q",
    src:
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },

  {
    id: 2,
    btn:"W",
    src:
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },

  {
    id: 3,
    btn:"E",
    src:
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },

  {
    id: 4,
    btn:"A",
    src:
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },

  {
    id: 5,
    btn:"S",
    src:
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },

  {
    id: 6,
    btn:"D",
    src:
      "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },

  {
    id: 7,
    btn:"Z",
    src:
      "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },

  {
    id: 8,
    btn:"X",
    src:
      "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },

  {
    id: 9,
    btn:"C",
    src:
      "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];
  
  
  return (
    <Container fluid>

      {/* Header */}
      <Row className='bg-dark text-white'>
        <Col md={{ span: 8, offset: 4 }}>
          <h1>React Drum Machine</h1>
        </Col>
      </Row>

      {/* Body */}
      <Row className="mx-auto mt-5 bg-secondary" style={{width:'50%'}}>
        <Row className='m-2'>
          <Col className="">
            <Row className='card-row' style={{}}>
              {/* column for the buttons  */}
              <Col >
                {/* sounds.map((btn)=>(
                  <DrumRow src={btn.id}/>
                )); */}
                {/* <Row className='m-2'>
                  <Col className="d-flex justify-content-around">
                    <Button as="input" type="button" value="Q" style={{width:"70px"}}/>
                    <Button as="input" type="button" value="W" style={{width:"70px"}}/>
                    <Button as="input" type="button" value="E" style={{width:"70px"}}/>
                  </Col>
                </Row>
                <Row className='m-2'>
                  <Col className="d-flex justify-content-around">
                    <Button as="input" type="button" value="A" style={{width:"70px"}}/>
                    <Button as="input" type="button" value="S" style={{width:"70px"}}/>
                    <Button as="input" type="button" value="D" style={{width:"70px"}}/>
                  </Col>
                </Row>
                <Row className='m-2'>
                  <Col className="d-flex justify-content-around">
                    <Button as="input" type="button" value="Z" style={{width:"70px"}}/>
                    <Button as="input" type="button" value="X" style={{width:"70px"}}/>
                    <Button as="input" type="button" value="C" style={{width:"70px"}}/>
                  </Col>
                </Row> */}
                
              </Col>
              {/* for the actions */}
              <Col className="flex-col justify-content-center">
                <Row className="m-2">
                  <Form.Check 
                      type="switch"
                      id="custom-switch"
                      label="Power"
                    />
                </Row>
                <Row className="m-2" >
                  <input  type="text" readOnly style={{border:"none",borderRadius:"5px"}}/>
                </Row>
                <Row className="m-2">
                  <h6>Volume</h6>
                  <input type="range" readOnly/>
                </Row>
                <Row className="m-2">
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Back"
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
    );
}

export default App;

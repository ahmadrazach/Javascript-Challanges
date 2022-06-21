import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
                <Row className='m-2'>
                  <Col className="d-flex justify-content-around">
                    <Button as="input" type="button" value="Input" />
                    <Button as="input" type="button" value="Input" />
                    <Button as="input" type="button" value="Input" />
                  </Col>
                </Row>
                <Row className='m-2'>
                  <Col className="d-flex justify-content-around">
                    <Button as="input" type="button" value="Input" />
                    <Button as="input" type="button" value="Input" />
                    <Button as="input" type="button" value="Input" />
                  </Col>
                </Row>
                <Row className='m-2'>
                  <Col className="d-flex justify-content-around">
                    <Button as="input" type="button" value="Input" />
                    <Button as="input" type="button" value="Input" />
                    <Button as="input" type="button" value="Input" />
                  </Col>
                </Row>
                
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
                <Row className="m-2">
                  <input type="text" readOnly/>
                </Row>
                <Row className="m-2">
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

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useState } from 'react';

//function for the Drum Buttons

const DrumRow=(props)=>
  (
    <div onClick={()=>props.handleClick(props)} >
      <Button as="input" type="button" value={props.btn} style={{width:"70px",margin:'5px'}}/>
      <audio ref={props.id} src={props.src}/>
    </div>
  )

function App() {

  //
  const [clickBtn,setClickBtn]=useState("");
  const [power,setPower]=useState(true);
  const [Volume,setVolume]=useState(1);
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
  

/**
 * It takes an object with two properties, btn and src, and plays the audio file at the src location,
 * and sets the clickBtn state to the btn property
 */
const playAudio=({btn,src})=>{
  setClickBtn(btn)
  const audioToPlay=new Audio(src);
  audioToPlay.volume=Volume;
  if(power)
  {
    audioToPlay.play();
  }
}

/**
 * It takes the value of the slider and divides it by 100 to get a number between 0 and 1
 */
const handleChange = e => {
  setVolume(e.target.value/100);
};

/**
 * `handlePowerChange` is a function that takes an event as an argument, and sets the power state to
 * the value of the event's target's checked property
 */
const handlePowerChange=e=>{
  setPower(e.target.checked)
}

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
            <Row className='card-row' >
              {/* column for the buttons  */}
              <Col className='d-flex flex-wrap' lg={{span:5}}>
              { 
                sounds.map((sound,key)=>(
                  <DrumRow src={sound.src} btn={sound.btn} key={sound.id} handleClick={playAudio}/>
                ))
              }
              </Col>
              {/* for the actions */}
              <Col className="flex-col justify-content-center">
                <Row className="m-3">
                  <Col xs={1}>
                    <input type="checkbox" onClick={e=>handlePowerChange(e)}/>
                  </Col>
                  <Col>
                      <h6> Power</h6>
                  </Col>
                </Row>
                <Row className="m-3" >
                  <input  type="text" readOnly value={clickBtn} style={{border:"none",borderRadius:"5px"}}/>
                </Row>
                <Row className="m-3">
                  <h6>Volume</h6>
                  <input type="range" onChange={e => handleChange(e)}/>
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


import Container from "react-bootstrap/Container";
import {useState,useEffect} from "react";

function App() {

  //states of our timer
  const [workTime,setWorkTime]=useState(25);
  const [breakTime,setBreakTime]=useState(5);
  const [cycle,setCycle]=useState('Session');
  const [timerId,setTimerId]=useState(0);
  const [timerRunning,setTimerRunning]=useState(false);
  const [currentTime,setCurrentTime]=useState('25:00');
  
  //function for increment time
  const incrementWorkTime=()=>{
    setWorkTime(workTime=>workTime+1);
  }

  //function for decrement time
  const decrementWorkTime=()=>{
    if(workTime>1)
    setWorkTime(workTime=>workTime-1);
  }

  // incrementBreak time
  const incrementBreakTime=()=>{
    
    setBreakTime(breakTime=>breakTime+1);
  }

  //decrement Break time
  const decrementBreakTime=()=>{
    if(breakTime>1)
    setBreakTime(breakTime=>breakTime-1);
  }


  // https://medium.com/@marjuhirsh/a-beginners-account-of-building-a-pomodoro-clock-in-react-2d03f856b28a
  //loading intital value
  // useEffect(()=>{

      
  //     //reducing time after second and a minute
  //   const secInterval=setInterval(()=>
  //   {
  //     setSeconds(sec=>sec>0 && minutes >0 ? sec-1 : sec+59);

  //     // if(seconds<=0 && minutes<=0)
  //     // {
  //     //  clearInterval(secInterval);
  //     // }
      
      
      
  //   },1000);
      
  //   //adding minutes
  //   const minInterval=setInterval(()=>{
      
  //     setMinutes(min=>min-0.5);
         
  //     // if(minutes<=0)
  //     // {
  //     //  console.log('minutes vala ruk gya')
  //     //   clearInterval(minInterval);
  //     // }
  //     // 60000
  //   },1000);
      
  //   if(seconds<=0 && minutes<=0)
  //   {
  //     console.log('khtm')
  //     //returning values
  //      return ()=> clearInterval(secInterval,minInterval);
  //   }
     
// },[]);
  
  // timer function for the  countdown
  const timer=()=>{
    if(timerRunning)
    {
      clearInterval(timerId);
      setCurrentTime('25:00');
      setTimerRunning();
    }
    else
    {
      cycle==="Session"?
      startTimer(workTime):
      startTimer(breakTime);
    }
  }

  //---- Work handling
  
  //increment
  const handleWorkIncrement=()=>{
    
    incrementWorkTime();

    if(!timerRunning)
      setCurrentTime(workTime);
  }

  // decrement
  const handleWorkDecrement=()=>{

    decrementWorkTime();

    if(!timerRunning)
    {
      setCurrentTime(workTime);
    }
  }

//  starting timer function

  const startTimer=(duration)=>{

    setTimerRunning('true');
    let time=duration*60;
    let minutes,seconds;

    let runningTimer=setInterval(()=>
    {
      setTimerId(runningTimer);
      minutes=Math.floor(time/60);
      seconds=time-minutes*60;
      minutes=minutes<10 ? "0" + minutes : minutes;
      seconds=seconds<10 ? "0" + seconds : seconds;
      setCurrentTime(`${minutes}:${seconds}`);
      if(time===0)
      {
        if(cycle==="Session")
        {
          setCycle("Break");
          setTimerRunning(false);
        }
        clearInterval(timerId);
        startTimer(breakTime);
      }
      else
      {
        setCycle("Session");
        setTimerRunning(workTime);
      }
    },1000);
  }
  return (
    <div  >
    <Container >
      {/* Heading */}
      <h1 className="p-3 text-center" style={{backgroundColor:'#E7E5E4',borderBottomRightRadius:"15px",borderBottomLeftRadius:'15px'}}><i className="bi bi-clock"></i> Pomodoro Clock</h1>
      {/* div of session and break */}
      <div className="d-flex flex-sm-row flex-column mt-4 justify-content-between" >
        
        {/* Break Div */}
        <div className="d-flex flex-column align-items-center m-2 m-md-0" style={{backgroundColor:'#E7E5E4',borderRadius:'25px'}}>

          <h4 className="mt-2">Break</h4>
          <i className="bi bi-lightning-charge" style={{fontSize:'4rem'}}></i>
          <div className="d-flex mx-4 my-2">
            
            <i className="bi bi-dash-circle mx-2 btn" style={{fontSize:'1.5rem'}} onClick={decrementBreakTime}></i>
            <p className="mx-4"><strong style={{fontSize:'1.5rem'}}>{breakTime}</strong> m</p>
            <i className="bi bi-plus-circle mx-2 btn" style={{fontSize:'1.5rem'}} onClick={incrementBreakTime}></i>
          </div>
        </div>

        {/* Session Div */}
        <div className="d-flex flex-column align-items-center m-2 m-md-0" style={{backgroundColor:'#E7E5E4',borderRadius:'25px'}}>

          <h4 className="mt-2">Session</h4>
          <i className="bi bi-pc-display-horizontal" style={{fontSize:'4rem'}}></i>
          <div className="d-flex mx-4 my-2">
            
            <i className="bi bi-dash-circle mx-2 btn" style={{fontSize:'1.5rem'}}  onClick={handleWorkDecrement}></i>
            <p className="mx-4"><strong style={{fontSize:'1.5rem'}}>{workTime} </strong> m</p>
            <i className="bi bi-plus-circle mx-2 btn" style={{fontSize:'1.5rem'}}  onClick={handleWorkIncrement}></i>
          </div>
        </div>
      </div>

      {/* Div of  Task list and Clock*/}
      <div className="d-flex flex-sm-row flex-column mt-5 justify-content-around"  style={{borderRadius:'25px',backgroundColor:'#E7E5E4'}}>
        
        {/* Break Div */}
        <div className="d-flex flex-column m-2 mx-5" >

          <h4 className="text-center">Task List</h4>
          <div className="d-flex flex-column" style={{backgroundColor:'#D9D9D9',borderRadius:'10px'}}>
            <div className="p-2" style={{backgroundColor:'#737373',color:'#FAFAF9',borderRadius:'10px'}}>
              <input className="p-2" type='text' placeholder="Type here"  style={{border:'10px',borderRadius:"10px",backgroundColor:'#F5F5F4'}}/>
              <strong><i className="bi bi-plus-circle btn" style={{fontSize:"1rem",fontWeight:'10px',color:'white'}}></i></strong>
            </div>
            <div className="m-2">
              <p style={{borderBottom:'1px dashed black'}}><i className="bi bi-check-circle"></i> 1st one</p>
              <p style={{borderBottom:'1px dashed black'}}><i className="bi bi-check-circle"></i> 2nd one</p>
              <p style={{borderBottom:'1px dashed black'}}><i className="bi bi-check-circle"></i> 3rd one</p>
              <p className="text-center">* focus on max 3 tasks *</p>
            </div>
          </div>
        </div>

        {/* Clock Div */}
        <div className="d-flex flex-column align-items-center m-2" >

          <h4 className="mt-2">Clock</h4>
          <div className="d-flex align-items-center justify-content-center" style={{backgroundColor:"#737373",width:'170px',height:'170px',borderRadius:'50%',color:"#FAFAF9"}}>
            <h3>{currentTime}</h3>
          </div>
          <div className="d-flex mx-4 my-2">
            
            <i className="bi bi-play-circle mx-2 btn" style={{fontSize:'1.5rem'}} onClick={startTimer} ></i>
            <i className="bi bi-pause-circle mx-2 btn" style={{fontSize:'1.5rem'}}></i>
            <i className="bi bi-arrow-clockwise mx-2 btn" style={{fontSize:'1.5rem'}}></i>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center" >made by <strong> <a href="https://github.com/ahmadrazach" style={{textDecoration:'none',color:"black"}}>Ahmed</a></strong></p>
      {/* Footer */}
    </Container>
    </div>
  );
}

export default App;

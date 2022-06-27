
import Container from "react-bootstrap/Container";


function App() {
  return (
    <div style={{backgroundColor:'#FAFAF9'}} >
    <Container >
      {/* Heading */}
      <h1 className="pt-3 text-center"><i className="bi bi-clock"></i> Pomodoro Clock</h1>
      {/* div of session and break */}
      <div className="d-flex flex-row mt-4 justify-content-between" >
        
        {/* Break Div */}
        <div className="d-flex flex-column align-items-center" style={{backgroundColor:'#E7E5E4',borderRadius:'25px'}}>

          <h4 className="mt-2">Break</h4>
          <i className="bi bi-lightning-charge" style={{fontSize:'4rem'}}></i>
          <div className="d-flex mx-4 my-2">
            
            <i className="bi bi-dash-circle mx-2 btn" style={{fontSize:'1.5rem'}}></i>
            <p className="mx-4"><strong style={{fontSize:'1.5rem'}}> 5 </strong> m</p>
            <i className="bi bi-plus-circle mx-2 btn" style={{fontSize:'1.5rem'}}></i>
          </div>
        </div>

        {/* Session Div */}
        <div className="d-flex flex-column align-items-center" style={{backgroundColor:'#E7E5E4',borderRadius:'25px'}}>

          <h4 className="mt-2">Session</h4>
          <i class="bi bi-pc-display-horizontal" style={{fontSize:'4rem'}}></i>
          <div className="d-flex mx-4 my-2">
            
            <i className="bi bi-dash-circle mx-2 btn" style={{fontSize:'1.5rem'}}></i>
            <p className="mx-4"><strong style={{fontSize:'1.5rem'}}> 25 </strong> m</p>
            <i className="bi bi-plus-circle mx-2 btn" style={{fontSize:'1.5rem'}}></i>
          </div>
        </div>
      </div>

      {/* Div of  Task list and Clock*/}
      <div className="d-flex flex-row  my-5 justify-content-around"  style={{borderRadius:'25px',backgroundColor:'#E7E5E4'}}>
        
        {/* Break Div */}
        <div className="d-flex flex-column m-2 mx-5" >

          <h4 className="text-center">Task List</h4>
          <div className="d-flex flex-column" style={{backgroundColor:'#D9D9D9',borderRadius:'10px'}}>
            <div className="p-2" style={{backgroundColor:'#737373',color:'#FAFAF9',borderRadius:'10px'}}>
              <input className="p-2" type='text' placeholder="Type here"  style={{border:'10px',borderRadius:"10px",backgroundColor:'#F5F5F4'}}/>
              <strong><i className="bi bi-plus-circle btn" style={{fontSize:"1rem",fontWeight:'10px',color:'white'}}></i></strong>
            </div>
            <div className="m-2">
              <p style={{borderBottom:'1px dashed black'}}><i class="bi bi-check-circle"></i> 1st one</p>
              <p style={{borderBottom:'1px dashed black'}}><i class="bi bi-check-circle"></i> 2nd one</p>
              <p style={{borderBottom:'1px dashed black'}}><i class="bi bi-check-circle"></i> 3rd one</p>
              <p className="text-center">* focus on max 3 tasks *</p>
            </div>
          </div>
        </div>

        {/* Clock Div */}
        <div className="d-flex flex-column align-items-center m-2" >

          <h4 className="mt-2">Clock</h4>
          <div className="d-flex align-items-center justify-content-center" style={{backgroundColor:"#737373",width:'170px',height:'170px',borderRadius:'50%',color:"#FAFAF9"}}>
            <h3>25:00</h3>
          </div>
          <div className="d-flex mx-4 my-2">
            
            <i className="bi bi-play-circle mx-2 btn" style={{fontSize:'1.5rem'}}></i>
            <i className="bi bi-pause-circle mx-2 btn" style={{fontSize:'1.5rem'}}></i>
            <i className="bi bi-arrow-clockwise mx-2 btn" style={{fontSize:'1.5rem'}}></i>
          </div>
        </div>
      </div>
      {/* Footer */}
      <p className="mt-4 text-center" >made by <strong> <a href="https://github.com/ahmadrazach" style={{textDecoration:'none',color:"black"}}>Ahmed</a></strong></p>
    </Container>
    </div>
  );
}

export default App;

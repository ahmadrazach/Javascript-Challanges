
import Container from "react-bootstrap/Container";

<style>
  h4{

  }
</style>
function App() {
  return (
    <Container >
      {/* Heading */}
      <h1 className="mt-3 text-center"><i className="bi bi-clock"></i> Pmodoro Clock</h1>
      {/* div of session and break */}
      <div className="d-flex flex-row mt-4 justify-content-between" style={{border:'1px solid black'}}>
        
        {/* Break Div */}
        <div className="d-flex flex-column align-items-center" style={{border:'1px solid red'}}>

          <h4>Break</h4>
          <i className="bi bi-lightning-charge" style={{fontSize:'4rem'}}></i>
          <div className="d-flex mx-4 my-2">
            
            <i className="bi bi-dash-circle mx-2 btn" style={{fontSize:'1.5rem'}}></i>
            <p className="mx-4"><strong style={{fontSize:'1.5rem'}}> 5 </strong> m</p>
            <i className="bi bi-plus-circle mx-2 btn" style={{fontSize:'1.5rem'}}></i>
          </div>
        </div>

        {/* Session Div */}
        <div className="d-flex flex-column align-items-center" style={{border:'1px solid red'}}>

          <h4>Session</h4>
          <i class="bi bi-pc-display-horizontal" style={{fontSize:'4rem'}}></i>
          <div className="d-flex mx-4 my-2">
            
            <i className="bi bi-dash-circle mx-2 btn" style={{fontSize:'1.5rem'}}></i>
            <p className="mx-4"><strong style={{fontSize:'1.5rem'}}> 25 </strong> m</p>
            <i className="bi bi-plus-circle mx-2 btn" style={{fontSize:'1.5rem'}}></i>
          </div>
        </div>
      </div>

      {/* Div of  Task list and Clock*/}
      <div className="d-flex flex-row mt-3 justify-content-around" style={{border:'1px solid black'}}>
        
        {/* Break Div */}
        <div className="d-flex flex-column align-items-center" style={{border:'1px solid red'}}>

          <h4>Task List</h4>
          <div className="d-flex flex-column" style={{backgroundColor:'#D9D9D9'}}>
            <div>
              <input type='text' placeholder="add the task here" style={{border:'none',backgroundColor:'#3A3A3A',color:'white'}}/>
              <>+ icon</>
            </div>
            <div className="m-1">
              <p style={{borderBottom:'1px dashed black'}}><i class="fa-solid fa-user"></i> 1st one</p>
              <p style={{borderBottom:'1px dashed black'}}>1st one</p>
              <p style={{borderBottom:'1px dashed black'}}>1st one</p>
            </div>
          </div>
        </div>

        {/* Session Div */}
        <div className="d-flex flex-column align-items-center" style={{border:'1px solid red'}}>

          <h4>Clock</h4>
          <h3>Icon</h3>
          <div className="d-flex">

            <p>-</p>
            <p>5m</p>
            <p>+</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;

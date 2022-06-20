import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Simple Markdown</h1>
        
      </header>
      <div className='app-body'>
        <div className='input-text'>
          <h2>Input here</h2>
          <textarea className="input-textarea"/>
        </div>
        <div className="preview-text">          
          <h2>Preview</h2>
          <div className="output-textarea">
            <p>usahfduahsfuh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

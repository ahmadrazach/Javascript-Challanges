import {useState} from 'react';
import {marked} from "marked";
import './App.css';


function App() {

  const defaultText1="## Welcome to my React Markdown Previewer!"
  //saving value in the variable on change
  const [input,setInput]=useState(defaultText1 );

  const handleChange=(e)=>{
    setInput(e.target.value);
  }

  const getMarkdownText = () => {
    const rawMarkup = marked(input, { sanitize: true   });
    return { __html: rawMarkup };
  };

  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Simple Markdown</h1>
      </header>
      <div className='app-body'>
        <div className='input-text'>
          <h2>Input here</h2>
          <textarea className="input-textarea" value={input} onChange={handleChange} >
          </textarea>
        </div>
        <div className="preview-text">          
          <h2>Preview</h2>
          <div className="output-textarea">
            <div dangerouslySetInnerHTML={getMarkdownText()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

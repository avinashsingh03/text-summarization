import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import handleDownloadPDF from './services/download_Text'
import './App.css'


function App() {
  const [text,setText] = useState("");
  const [message,setMessage]= useState("");
  const [showResult, setShowResult]=useState(false);
  const handleSubmit = async (e) =>{
    setMessage("");
    e.preventDefault();
    // const formData = new FormData(e.target);
    const data ={
      text
    }
    // console.log(data);
    const response= await axios.post("http://localhost:3000/api/summary/summarize",data,{
      headers:{
      "Content-Type" : "application/json"
      }
    });
    // console.log(response);
    setMessage(response.data);
    setShowResult(true);
  }
  const handleDownload= () => {
    if(!message || message === "Some error occured. Try again after sometime." || message === "Enter valid Text."){
      alert('Nothing to download.')
    }
    else if(message){
      handleDownloadPDF(message);
    }
    else{
      alert('No Text to download');
    }
  };
  return (
    <div className="App">
      <div className="header">
      <h1>Text Summarization</h1>
      <p>Summarize your text with ease!</p>
      </div>
      <section>
        <div className="input-section">
          <form className = "input-form" onSubmit = {handleSubmit}>
            <textarea
            name="text"
            placeholder="Enter your text here..." 
            onChange={(e) => setText(e.target.value)} 
            rows={10} cols={60} />
            <button type="submit">Summarize</button>
          </form>
        </div>
        {showResult && (
          <div className="output-section">
          <ReactMarkdown>{message || "Loading your summary.."}</ReactMarkdown>
          <button onClick={handleDownload}>
            Download as PDF
          </button>
        </div>
        )}
      </section>
    </div>
  )
}

export default App


import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import handleDownloadPDF from './services/download_Text'
import './App.css'
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [text,setText] = useState("");
  const [message,setMessage]= useState("");
  const [showResult, setShowResult]=useState(false);

  const handleSubmit = async (e) =>{

    e.preventDefault();
    // const formData = new FormData(e.target);

    setMessage("Loading your summary..");
    const data ={
      text
    }

    try{
        const response = await axios.post(`${API_URL}/api/summary/summarize`,data,{
        // const response= await axios.post("http://localhost:3000/api/summary/summarize",data,{
          headers:{
            "Content-Type" : "application/json"
          }
        });
        
        setMessage(response.data.summary);
        setShowResult(true);
    }
    catch(error){
      setShowResult(true);
        if(error.response){

        // Backend returned error response
        console.log(message);
        setMessage(error.response.data.error);
        console.log(error.response.data.error);

      } else {

        // Network/server issue

        setMessage("Server error. Please try again later.");
      }
    }
  };

  const handleDownload= () => {
    if(!message || message === "Enter valid Text." || message === "Some error occured. Try again after sometime." || message === "Server error. Please try again later."){
      alert('Nothing to download.')
    }
    else if(message){
      handleDownloadPDF(message);
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
          <ReactMarkdown>{message || "Loading you summary.."}</ReactMarkdown>
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

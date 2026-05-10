const express = require('express');
const { GoogleGenAI } = require("@google/genai");

// const { OpenAI } = require("openai");
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// const client = new OpenAI(); // Make sure to set the OPENAI_API_KEY environment variable with your OpenAI API key




const router = express.Router();

router.post('/summarize',async (req,res) => {
  const {text} = req.body;
  // console.log("text is : "+ text);

  try {
    if(!text || text.trim() === ""){
      // res.send("Enter valid Text.");
      return res.status(400).json({
        error: "Enter valid Text."
      })
    }

    console.log("Gemini API Key: " + process.env.GEMINI_API_KEY);

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents:"Generate a summary that captures the main points and key information from the provided text. The summary should be clear, coherent, and accurately reflect the original content.Summary should have heading. Use bullet points(if applicable).\n\n" + text
    });

    // res.send(response.text);
    return res.status(200).json({
      summary: response.text}); 
  }
  catch(err){
    // res.send("Some error occured. Try again after sometime.")
    console.log(err.message);
    return res.status(500).json({
      error: "Some error occured. Try again after sometime.",
      details: err.message
    })
  }
  

  // console.log(response.output_text);
  // res.send(response.output_text);


})

module.exports = router;
const express = require('express');
const { GoogleGenAI } = require("@google/genai");

const { OpenAI } = require("openai");

// const { response } = require('../app');

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

const client = new OpenAI(); // Make sure to set the OPENAI_API_KEY environment variable with your OpenAI API key




const router = express.Router();

router.post('/summarize',async (req,res) => {
  const {text} = req.body;
  // console.log("text is : "+ text);

  try {
    if(!text || text.trim() === ""){
      res.send("Enter valid Text.");
      return res.status(400).json({
        error: "Text is required for summarization"
      })
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents:"Generate a summary that captures the main points and key information from the provided text. The summary should be clear, coherent, and accurately reflect the original content.Summary should have heading. Use bullet points(if applicable).\n\n" + text
    });

    // const response = await client.responses.create({
    // model: "gpt-5.5",
    // input: "Summarize the following text: " + text,
    // });

    res.send(response.text);
  }
  catch(err){
    res.send("Some error occured. Try again after sometime.")
    console.log(err.message);
    return res.status(500).json({
      error: "Error while generating summary",
      details: err.message
    })
  }
  

  // console.log(response.output_text);
  // res.send(response.output_text);


})

module.exports = router;
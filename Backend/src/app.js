const express = require('express');
const summaryRoutes = require('./routes/summary.routes.js');
const cors= require("cors");


const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/summary', summaryRoutes);

app.get('/info', (req,res) => {
  console.log("Info page");

  return res.status(200).json({
    message: "Info Page"
  })
})

// app.post('/text-summarization', (req, res) => {
//   const {text} = req.body;
//   console.log("Received text : ", text);
//   return res.status(200).json({
//     text: text,
//     summary: "This is a dummy summary for the give text"
//   })
// })


module.exports = app;
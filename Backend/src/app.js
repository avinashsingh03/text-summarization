const express = require('express');
const summaryRoutes = require('./routes/summary.routes.js');
const cors= require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/summary', summaryRoutes);

app.get('/info', (req,res) => {
  console.log("Info page");

  return res.status(200).json({
    message: "Info Page"
  })
})



module.exports = app;

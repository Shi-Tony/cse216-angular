const express = require('express');
const app = express();             
const port = 5002;                 
const someObject = require("./messages.json");
const cors = require('cors');

app.use(cors());

app.get('/messages', (req, res) => {       
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  
    res.json(someObject);
});

app.listen(port, () => {           
    console.log(`Now listening on port ${port}`); 
});
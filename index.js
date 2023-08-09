const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5002;                  //Save the port number where your server will be listening
const someObject = require("./messages.json");

//Idiomatic expression in express to route and respond to a client request
app.get('/messages', (req, res) => {       
    // res.sendFile('index.html', {root: __dirname});   
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  
    res.json(someObject);
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});
import * as express from 'express';  
var app = express();
var port = 3000;


// basic route
app.get('/', function(req, res) {
   // res.send('Hello! The API is at http://localhost:' + port + '/api');
    res.sendfile('./frontend/views/welcome.html'); 
});


app.listen(port); //Must state the port used or else the app will not work.
console.log('Magic happens at http://localhost:' + port); // States the link for the app

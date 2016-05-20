/* Server for homevideo in Typescript
*/
var express = require('express');
var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
//-------------------------------------------------CONFIGURATION----------------------------------------------------------
var app = express();
var port = 3000;
mongoose.connect('mongodb://localhost:27017/homevideo'); // connect to database
//---------------------------------------------------ROUTING-----------------------------------------------------------------
// Route to get to the home page. ('/') is used because this page aka file is the homepage.
app.get('/', function (req, res) {
    res.sendfile('./frontend/views/welcome.html');
});
//---------------------------------------------------HOSTING----------------------------------------------------------------------
app.listen(port); //Must state the port used or else the app will not work.
console.log('Magic happens at http://localhost:' + port); // States the link for the app

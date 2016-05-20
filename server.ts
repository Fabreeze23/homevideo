/* Server for homevideo in Typescript
*/

var express     = require('express');
var bcrypt      = require('bcrypt');
var bodyParser  = require('body-parser'); //POSY form input
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

//-------------------------------------------------CONFIGURATION----------------------------------------------------------
let app = express();
let port = 3000;
mongoose.connect('mongodb://localhost:27017/homevideo');// connect to database

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('frontend/'));


// use morgan to log requests to the console
app.use(morgan('dev'))
//---------------------------------------------------ROUTING-----------------------------------------------------------------

// Route to get to the home page. ('/') is used because this page aka file is the homepage.

app.get('/', function(req, res) { //User "gets" the homepage
    res.sendfile('./frontend/views/welcome.html'); 
});

//-----------------------------------------------------------------

app.get('/main', function(req, res) {
    res.sendfile('./frontend/views/main.html');
    });

//-------------------------------------------------------------
app.post('/signup', function(req, res) { //User "posts the info to the form"
    
let unhashedpassword = req.body.password;  
    
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(unhashedpassword, salt, function(err, hash) {
        // Store hash in your password DB. 
  let user = new User({   
  username: req.body.username ,    
  email: req.body.email , 
  password: hash
}) 
            // save the user
  user.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
    res.json({ success: true });

});
    
    });


    

  });
    
    });


//---------------------------------------------------HOSTING----------------------------------------------------------------------
app.listen(port); //Must state the port used or else the app will not work.
console.log('Magic happens at http://localhost:' + port); // States the link for the app

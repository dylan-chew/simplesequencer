var express = require('express');
var bodyParser = require('body-parser');
//Path module built in, no need to NPM install
var path = require('path');

//variable using express function
var app = express();

// Example of middleware
// var logger = function(req, res, next){
//     console.log('Logging...');
//     next();
// }

// app.use(logger);

// view Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

//Users
var users = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@gmail.com'
    },
    {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'janedoe@gmail.com'
    },
    {
        id: 3,
        first_name: 'Bob',
        last_name: 'Smith',
        email: 'bobsmith@gmail.com'
    }
]


//Add routes
app.get('/', function(req, res){

    res.render('index', {
        title: 'Sequencer',
        users: users
    });
})

//Listen on a port

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port, function(){
    console.log('Server started on Port 8000...')
});
const express = require('express')
const app = express()
const port =process.env.PORT || 3000;
var bodyParser = require('body-parser')//body parser
var session = require('express-session')//msg ke liye
var flash = require('connect-flash');//msg ke liye
var cookieParser = require('cookie-parser')

app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
  
}));
app.use(cookieParser())
app.use(flash());



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//import router
const web = require('./routes/web.js');
const connectDB = require('./DB/connectDB.js')





//ejs setup
app.set('view engine' , 'ejs');

//static files
app.use(express.static('public'))

//connecting to db here
connectDB();

//middleware use

//load router
app.use('/',web)
//start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
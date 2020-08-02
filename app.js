require("dotenv").config()
var express = require('express');
var path = require('path');
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose")

//importing our routes



//instance of the express app object
var app = express();

// DB Connection
mongoose.connect( process.env.DATABASE_URL, 
    {
        useUnifiedTopology: true,
        useNewUrlParser:true
    },
    () => console.log("Connected to Db"))


//invoking middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Passpost
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized: false
}))

require('./passport')(passport);
app.use(passport.initialize()) 
app.use(passport.session()) 

app.get("*", (req,res,next)=>{
    res.locals.user = req.user || null
    next();
})


//invoking routes



// if URL path matches none on our above routes, 
// throw 404 http error message
app.use((req, res, next) => {
    const error = new Error('Page cannot found');
    error.status = 404;
    next(error);
})

//sending back error messages.
//all the errors thrown with the next() ifromn the routes will be
//handled here 
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ error: err.message })
});



//defining server port
const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Server started on port ${port}...`);
});
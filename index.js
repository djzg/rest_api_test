const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// set up express Application
const app = express();


// connect to MongoDB
mongoose.connect("mongodb://localhost/ninjago");
// assigning mongoose promise to the global promise cause the mongoose promise is being deprecated
mongoose.Promise = global.Promise;

// using middleware for retrieving static elements of html sites
app.use(express.static("public"));

// using the body-parser middleware
app.use(bodyParser.json());


// initialize routes
  //instead of constant, using require as argument
app.use("/api", require("./routes/api"));

// using the error handling middleware
app.use(function(err, req, res, next){
  // console.log(err);

  // taking error from the catch method of argument 'next' and getting the message from the object
  // sending the error message to the frontend
  // also sending error status 422 before send
  res.status(422).send({error: err.message});
});



/*
// getting request from root folder and replying to the console
  // req argument contains request data
  // res argument contains response data
app.get("/", function(req, res){
  console.log("GET request");

  // sending object in json format to the get request
  res.send({ name: "Yoshi" });
});
*/





// listen for requests
  // either process enviroment port or port 4000
app.listen(process.env.port || 4000, function(){
  console.log("now listening for requests");

});

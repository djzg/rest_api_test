const express = require("express");
const bodyParser = require("body-parser");

// set up express Application
const app = express();


app.use(bodyParser.json());


// initialize routes
  //instead of constant, using require as argument
app.use("/api", require("./routes/api"));


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

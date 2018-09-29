const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");


//// GET method
// get a list of ninjas from the database
router.get("/ninjas", function(req, res, next){

  /*
  // getting all of the ninjas
  Ninja.find({}).then(function(ninjas){
    res.send(ninjas);
  }):
  */

    // method for finding coordinates near the input value
  Ninja.aggregate().near({
    near: {type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    maxDistance: 3000000, spherical: true, distanceField: "dis"
  }).then(function(ninjas){
    res.send(ninjas);
  }).catch(next);


});


//// POST method
// add a new ninja to the database
router.post("/ninjas", function(req, res, next){
  // var ninja = new Ninja(req.body);
  // ninja.save();

  // using mongoose method instead of two lines above. It's doing both inside create method
  Ninja.create(req.body).then(function(ninja){
    //   res.send({
    //     type:"POST",
    //     name: req.body.name,
    //     rank: req.body.rank});
    // });

      // using one line instead of above method
      res.send(ninja);
    }).catch(next);
});


//// UPDATE method
// update a ninja in database
router.put("/ninjas/:id", function(req, res, next){
    // finding by id and updating, then finding the updated parameter and sending it back to user
  Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Ninja.findOne({_id: req.params.id}).then(function(ninja){
      res.send(ninja);
    });
  }).catch(next);
});

//// DELETE method
// delete a ninja from a database
router.delete("/ninjas/:id", function(req, res, next){
  // console.log(req.params.id);
    // mongoose command to find by id and remove it. Then send the response back
  Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
    res.send(ninja);
  }).catch(next);
});


module.exports = router;

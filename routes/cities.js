var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: true});

var mongoUtil = require('./mongoUtil');
mongoUtil.connect();

router.route('/')

// get request for cities from mongo
.get(function(request, response){
  var cities = mongoUtil.cities();
  cities.find().toArray(function(err,docs){
  response.json(docs);
  });
})


// post request for cities
.post(parseUrlencoded, function (request, response){
  var newCity = mongoUtil.cities();
  newCity.insert({
    name : request.body.city.name,
    description : request.body.city.description
  });
  //console.log(newCity);
  //response.status(201).json(newCity.name);
});



router.route('/:_id')
.all(function(request, response, next){
  request.cityId = request.params._id;
  //console.log(request.cityId);
  next();
})

// get city by id
.get(function(request, response){
  var city = mongoUtil.cities();
  city.find({_id : ObjectId(request.cityId)}).toArray(function(err,docs){
  response.json(docs);
  });
})


// delete
.delete(function (request, response){
  var city = mongoUtil.cities();
  city.remove({"_id" : request.cityId})
  response.sendStatus(200);
});





module.exports = router;

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



//router.route('/:_id')
router.route('/:name')
.all(function(request, response, next){
  request.name = request.params.name;
  //request.cityId = request.params._id;
  next();
})

// get city by id
.get(function(request, response){
  var city = mongoUtil.cities();
  //var obj_id = new ObjectID(request.params._id);
  //city.find({"_id" :obj_id}).toArray(function(err,docs){
  city.find({"name" : request.name}).toArray(function(err,docs){
  response.json(docs);
  });
})


// delete
.delete(function (request, response){
  var city = mongoUtil.cities();
  city.remove({"name" : request.name});
  response.sendStatus(200);
//});
});





module.exports = router;

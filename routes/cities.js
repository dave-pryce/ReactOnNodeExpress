var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: true});
var mongoUtil = require('mongoUtil');
mongoUtil.connect();
//var bdyjson = bodyParser.json();

// cities object
//var cities = [
//  {id: 1, name: "Melbourne", description: "Hipsters are here, there and everywhere. Food and coffee is good."},
//  {id: 2, name: 'Sydney', description:  'City Surfers, bad traffic, A cool bridge and an Opera House.'},
//  {id: 3, name: 'Brisbane', description: 'Vegas, River ferries and Cat, the Gabba and warm winters.'},
//  {id: 4, name: 'Adelaide', description: 'Churches, cycling, becoming foody and cool. Radalaide.'},
//  {id: 5, name: 'Darwin', description: 'Hot and sticky, crocs and stingers.'}
//]



router.route('/')

// get request for cities
.get(function(request, response){
//var cities = mongoUtil.cities();
//  cities.find().toArray(function(err,docs){
//    var cityNames = docs.map(function(city){
//      city.name;
  //  });
    response.json('cityNames');
})

// post request for cities
.post(parseUrlencoded, function (request, response){
  var newCity = {
    id : request.body.city.id,
    name : request.body.city.name,
    description : request.body.city.description
 };
  console.log(newCity);
  cities.push(newCity);
  response.status(201).json(newCity.name);
});



router.route('/:id')
.all(function(request, response, next){
  request.cityId = request.params.id;
  //console.log(request.cityId);
  next();
})

// get city by id
.get(function(request, response){
  var city = cities[request.cityId];
  response.json(city);
})


// delete
.delete(function (request, response){
  console.log(request.cityId);
  cities.splice(request.cityId,1);
  response.sendStatus(200);
});


//router.route('/:name')
//.get(function(req, res){

//  if(!req.params.name){
//    return res.send('404 Not Found');
//  }

//  var cityName = cities[req.params.name];
//  res.json(cityName);
//});


module.exports = router;

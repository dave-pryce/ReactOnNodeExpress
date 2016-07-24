var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: true});
//var bdyjson = bodyParser.json();


// cities object
var cities = [
  {name: "Melbourne", description: "Hipsters are here, there and everywhere. Food and coffee is good."},
  {name: 'Sydney', description:  'City Surfers, bad traffic, A cool bridge and an Opera House.'},
  {name: 'Brisbane', description: 'Vegas, River ferries and Cat, the Gabba and warm winters.'},
  {name: 'Adelaide', description: 'Churches, cycling, becoming foody and cool. Radalaide.'},
  {name: 'Darwin', description: 'Hot and sticky, crocs and stingers.'}
]



router.route('/')

// get request for cities
.get(function(request, response){
    response.json(cities);
})

// post request for cities
.post(parseUrlencoded, function (request, response){
  var newCity = {
    name : request.body.city.name,
    description : request.body.city.description
 };
  console.log(newCity);
  cities.push(newCity);
  response.status(201).json(newCity.name);
});



router.route('/:name')
.all(function(request, response, next){
  request.cityName = request.params.name;
  //console.log(request.cityId);
  next();
})

// get city by id
.get(function(request, response){
  var city = cities[request.cityName];
  response.json(city);
})


// delete
.delete(function (request, response){
  console.log(request.cityName);
  //cities.splice(request.cityName,1);
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

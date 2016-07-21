var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

// cities object
var cities = [
  {id: 1, name: "Melbourne", description: "Hipsters are here, there and everywhere. Food and coffee is good."},
  {id: 2, name: 'Sydney', description:  'City Surfers, bad traffic, A cool bridge and an Opera House.'},
  {id: 3, name: 'Brisbane', description: 'Vegas, River ferries and Cat, the Gabba and warm winters.'},
  {id: 4, name: 'Adelaide', description: 'Churches, cycling, becoming foody and cool. Radalaide.'},
  {id: 5, name: 'Darwin', description: 'Hot and sticky, crocs and stingers.'}
]



router.route('/')

// get request for cities
.get(function(request, response){
    response.json(cities);
})

// post request for cities
.post(parseUrlencoded, function (request, response){
  var newCity = {
    name: request.body.name,
    description: request.body.description
  };

  cities.push(newCity);
  response.status(201);
});



//app.route('/cities/:id')
router.route('/:id')
// read in user param name
.all(function(request, response, next){
  request.cityId = (request.params.id);
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
  cities.splice(request.cityId,1);
  response.sendStatus(200);
});


module.exports = router;

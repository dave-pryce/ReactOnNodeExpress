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
];


router.route('/')

// get request for cities
.get(function(request, response){
    response.json(cities);
})

// post request for cities
.post(parseUrlencoded, function (request, response){
  var newCity = request.body;
  response.status(201).json(newCity);
});



//app.route('/cities/:id')
router.route('/:id')
// read in user param name
.all(function(request, response, next){
  request.cityId = (request.params.id);
  next();
})
// get city by id
.get(function(request, response){
  var city = cities[request.cityId];
  response.json(city);
})
// delete
.delete(function (request, response){
  delete cities[request.cityId];
  response.sendStatus(200);
});



module.exports = router;

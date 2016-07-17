var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

// cities object
var cities = [
  {id: 1, name: "Melbourne", description: "Hipsters"},
  {id: 2, name: 'Sydney', description:  'Surfers'},
  {id: 3, name: 'Brisbane', description: 'Vegas'},
  {id: 4, name: 'Adelaide', description: 'Churches'},
  {id: 5, name: 'Darwin', description: 'Hot'}
];


router.route('/')

// get request for cities
.get(function(request, response){
    response.json(cities);
})

// post request for cities
.post(parseUrlencoded, function ( request, response){
  var newCity = request.body;
  cities[newCity.name] = newCity.description;
  response.status(201).json(newCity.name);
});



//app.route('/cities/:name')
router.route('/:name')
// read in user param name
.all(function(request, response, next){
  request.cityName = (request.params.name);
  next();
})
// get city by name
.get(function(request, response){
  var description = cities[request.params.name];
  response.json(description);
})
// delete
.delete(function ( request, response){
  delete cities[request.cityName];
  response.sendStatus(200);
});



module.exports = router;

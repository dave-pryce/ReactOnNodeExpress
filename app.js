var express = require('express');
var app = express();

var mongoUtil = require('./mongoUtil');
mongoUtil.connect;

//serve all files in public folder
app.use(express.static('public'));


var cities = require('./routes/cities');
app.use('/cities', cities);

// local host
app.listen(3001, function() {
    console.log("Running Express on port 3001");
});

// use getonly middleware
//var getonly = require('./getonly');
//app.use(getonly);


// create function to filter by city name
//function citySearch (keyword) {
  // i case sensitive matching
//  var regexp = RegExp(keyword, 'i');
//  var result = cities.filter(function (city){
//    return city.match(regexp);
//  });

//  return result;
//}

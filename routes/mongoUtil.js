var mongo = require('mongodb')
var client = mongo.MongoClient;
var _db;
var url = 'mongodb://localhost:27017/cities-dev';
var ObjectID = require('mongodb').ObjectID;

module.exports = {
  connect() {
    client.connect(url, function(err,db){
      if(err) {
        console.log("Error connecting to Mongo");
        process.exit(1);
      }
      _db = db;
      console.log("Connected to Mongo");
      });
    },
    cities(){
      return _db.collection('cities');
    }
}

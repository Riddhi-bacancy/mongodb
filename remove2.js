var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/' + process.argv[2]

mongo.connect(url, function(err, client) {
  if (err) {
  	throw err;
   }
  var collection = client.db(process.argv[2]).collection(process.argv[3]);
  collection.remove({_id: process.argv[4]}, function(err) {
    if (err){
    	throw err;
    } 
    db.close()
  })
})
var mongo = require('mongodb').MongoClient
var assert = require('assert')
var url = 'mongodb://localhost:27017'
const client = new mongo(url)
client.connect(function(err){
	assert.equal(null,err)
	const db = client.db(process.argv[2])
	const coll = db.collection('users')
	coll.updateOne({username : 'tinatime'},{$set : {age : 40}},function(err,r){

		assert.equal(null,err);
		assert.equal(1,r.matchedCount);
		assert.equal(1,r.modifiedCount);
	})
	client.close();

}) 
var db = require('mongoskin').db('mongodb://localhost:27017/thedevs');

exports.findById = function(req, res) {
    var id = req.params.id;
    db.collection('devs').find({id : id}).toArray(function(err, result) {
		if (err) throw err;
		res.send(result);
	});
};

exports.findAll = function(req, res) {
    db.collection('devs').find().toArray(function(err, result) {
		if (err) throw err;
		res.send(result);
	});
};


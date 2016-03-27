var express = require('express');
var router = express.Router();
var Salesman = require('../models').models.Salesman;

router.get('/salesmen', function(req, res, next){
	Salesman.find({})
	.then(function(salesmen){
		res.send(salesmen);
	})
	.catch(next);
});

router.post('/salesmen', function(req, res, next){
	var salesmen = new Salesman();
	salesman.name = req.body.name;
	salesman.save()
	.then(function(salesman){
		res.send(salesman);
	})
	.catch(next);
});

router.delete('/salesmen/:id', function(req, res, next){
	Salesman.findByIdAndRemove(req.params.id)
	.then(function(salesman){
		console.log("salesman deleted");
	})
	.catch(next);
});

module.exports = router;
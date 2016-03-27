var mongoose = require('mongoose');
var Promise = require('bluebird');

var salesmanSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}
});

var Salesman = mongoose.model('Salesman', salesmanSchema);

var _connection = null;
module.exports = {
	connect: function(){
		if(_connection)
			return _connection;
		_connection = new Promise(function(resolve, reject){
			mongoose.connect(process.env.CONN || 'mongodb://localhost/sales', function(err){
				if(err)
					return reject(err);
				resolve(mongoose.connection);
			});
		});
		return _connection;
	},
	models: {
		Salesman: Salesman
	}
};
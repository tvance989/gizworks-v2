var mongoose = require('mongoose');

module.exports = mongoose.model('Order', {
	name : {type : String, default: ''},
	email : {type : String, default: ''},
	description : {type : String, default: ''}
});
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// create instance of Schema
var Schema =  mongoose.Schema;

module.exports = mongoose.model('User', new Schema ({
    username: String,
    email: String, 
    password: String,
}));
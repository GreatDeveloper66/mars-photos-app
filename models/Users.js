const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	userName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true	
	},
	password: {
		type: String,
		required: true
	}
})

const User = mongoose.model('User', userSchema)
module.exports = User


















// Books.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
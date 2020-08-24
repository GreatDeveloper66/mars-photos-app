//const mongoose = require('mongoose')
import mongoose from 'mongoose'
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
	},
	date: {
		type: Date,
		default: Date.now
	}
})
const User = mongoose.model('User', userSchema)
export default User
//module.exports = User

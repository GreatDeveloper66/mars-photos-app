import User from '../models/Users.js'
import bcrypt from 'bcrypt'


const createUser = (req, res) => {
	let hash = bcrypt.hashSync(req.body.password, 10)
	let newUser = new User({...req.body,password: hash})
	newUser.save((err, User) => {
		if(err) {
			res.send(err)
		}
		else {
			res.json(User)
		}
	})
}

export default createUser
/*
module.exports = {
	create: function(req, res) {
		User.create(req.body)
			.then(newUser => res.json(newUser))
			.catch(err => res.status(422).json(err))
	}
}



module.exports = {
	findAll: function(req, res) {
		Book.find(req.query)
			.then(books => res.json(books))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		Book.findById(req.params.id)
			.then(book => res.json(book))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		Book.create(req.body)
			.then(newBook => res.json(newBook))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		Book.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(book => res.json(book))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		Book.findById({ _id: req.params.id })
			.then(book => book.remove())
			.then(allbooks => res.json(allbooks))
			.catch(err => res.status(422).json(err));
	}
};
*/

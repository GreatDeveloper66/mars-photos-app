//const router = require('express').Router()
//import { express } from 'express'
//const router = express.Router()
import createUser from '../controllers/usersController.js'
//const usersController = require('../controllers/usersController')

const routes = (app) => {
	app.route('/register')
		.post(createUser)
}

export default routes
//module.exports = registerUserRoute









/*

const router = require('express').Router();
const booksController = require('../controllers/booksController');

router
	.route('/')
	.get(booksController.findAll)
	.post(booksController.create);

router
	.route('/:id')
	.get(booksController.findById)
	.put(booksController.update)
	.delete(booksController.remove);

module.exports = router;

*/
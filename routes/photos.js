const router = require('express').Router()
const photosController = require(../controllers/photosController)

router.route('/photos').get(photosController.findAll)
const User = require("../models/Users")

const Photo = require('../models/Photos')

module.exports = {
    findAll: function(req,res){
        Photo.find(req.query)
            .then(photos => res.json(photos))
            .catch(err => res.status(422).json(err))
    }
}
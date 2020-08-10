const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photosSchema = {
    src: {
        type: String,
        required: true
    }
}

const Photo = mongoose.model('Photo', photosSchema)
module.exports = Photo
//require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config()
const [ marsURL, key ] = [ process.env.BASE_URL, process.env.MARS_API_KEY ]
//const fetch = require('isomorphic-fetch')
import fetch from 'isomorphic-fetch'
//const path = require('path')
import path from 'path'
import express from 'express'
//const express = require('express')
const app = express();
//const MongoClient = require('mongodb').MongoClient
import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient
const mongoURL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017'
const dbName = 'mars-photos-app'
let db = null
import bodyparser from 'body-parser'
//import registerUserRoute from './routes/users'
import routes from './routes/users.js'
//const registerUserRoute = require('./routes/users')
//console.log('routes', registerUserRoute)
MongoClient.connect(mongoURL, { useNewUrlParser: true }, (err, client) => {
    if(err) return console.log(err)
    db = client.db(dbName)
    console.log(`Connected MongoDB: ${mongoURL}`)
    console.log(`Database: ${dbName}`)
})


const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(bodyparser.urlencoded({ extended: true }))
//app.use(bodyparser.json())
app.use(express.static(path.join(path.resolve(), "client","build")))

routes(app)

app.get('/sol/:sol/camera/:camera', (req,res) => {
    const { sol, camera } = req.params
    const fetchURL = `${marsURL}sol=${sol}&camera=${camera}&api_key=${key}`
    console.log(fetchURL)
    fetch(fetchURL)
        .then(resp => resp.json())
        .then(data => res.send(data))
        .catch(error => console.log(error))
    
})

app.get('*', (req,res) => {
    res.sendFile(path.join(path.resolve(), "client", "build", "index.html"))
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});







//const bodyParser = require('body-parser')
//const cors = require('cors')
//const mongoose = require('mongoose')
//mongoose.Promise = Promise
//const dbUrl = process.env.DBURL
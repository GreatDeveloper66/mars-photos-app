require('dotenv').config()
const [ marsURL, key ] = [ process.env.BASE_URL, process.env.MARS_API_KEY ]
const fetch = require('isomorphic-fetch')
const path = require('path')
const express = require('express')
const app = express();
const MongoClient = require('mongodb').MongoClient
const mongoURL = 'mongodb://127.0.0.1:27017'
const dbName = 'mars-photos-app'
MongoClient.connect(mongoURL, { useNewUrlParser: true }, (err, client) => {
    if(err) return console.log(err)
    db = client.db(dbName)
    console.log(`Connected MongoDB: ${url}`)
    console.log(`Database: ${dbName}`)
})


const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client","build")))

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
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});







//const bodyParser = require('body-parser')
//const cors = require('cors')
//const mongoose = require('mongoose')
//mongoose.Promise = Promise
//const dbUrl = process.env.DBURL
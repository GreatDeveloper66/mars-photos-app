import dotenv from 'dotenv'
dotenv.config()
import fetch from 'isomorphic-fetch'
import path from 'path'
import express from 'express'
import mongodb from 'mongodb'
import bodyparser from 'body-parser'
import routes from './routes/users.js'
import exphbs from 'express-handlebars'
import expressValidator from 'express-validator'
import flash from 'connect-flash'
import session from 'express-session'
import passport from 'passport'
import passportlocal from 'passport-local'


const localStrategy = passportLocal.Strategy
const [ marsURL, key ] = [ process.env.BASE_URL, process.env.MARS_API_KEY ]
const app = express();
const MongoClient = mongodb.MongoClient
const mongoURL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017'
const dbName = 'mars-photos-app'
let db = null

MongoClient.connect(mongoURL, { useNewUrlParser: true }, (err, client) => {
    if(err) return console.log(err)
    db = client.db(dbName)
    console.log(`Connected MongoDB: ${mongoURL}`)
    console.log(`Database: ${dbName}`)
})


const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cookieParser())
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
import dotenv from 'dotenv'
dotenv.config()
import fetch from 'isomorphic-fetch'
import path from 'path'
import express from 'express'
import mongodb from 'mongodb'
import bodyparser from 'body-parser'
import routes from './routes/users.js'
//import exphbs from 'express-handlebars'
//import expressValidator, { param } from 'express-validator'
//import flash from 'connect-flash'
//import session from 'express-session'
//import passport from 'passport'

//let localStrategy = require('passport-local').Strategy

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


app.post('/register', async (req,res) => {
    const password = await bcyrpt.hash(req.body.password, 10)
    const userObj ={
        "userName": req.body.userName,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "password": password
    }
})

app.post('/login', (req,res) => {
    
})



const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
//app.use(cookieParser())
app.use(express.static(path.join(path.resolve(), "client","build")))
//app.use(session({
//    secret: 'secret',
//    saveUninitialized: true,
//    resave: true
//}))

//app.use(passport.initialize())
//app.use(passport.session())

//app.use(expressValidator({
//    errorFormatter: function(param, msg, value){
//        let namespace = param.split('.')
//        , root = namespace.shift()
//        , formParam = root;
    
//    while(namespace.length){
//        formParam += '[' + namespace.shift() + ']'
//    }
//    return {
//        param: formParam,
//        msg: msg,
//        value: value
//    }
//    }
//}))

//app.use(flash())

//app.use(function(req,res,next) {
//    res.locals.success_msg = req.flash('success_msg')
//    res.locals.error_msg = req.flash('error_msg')
//    res.locals.error = req.flash('error')
//    next()
//})
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
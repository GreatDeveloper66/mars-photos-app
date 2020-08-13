require('dotenv').config()
const [ URL, key ] = [ process.env.BASE_URL, process.env.MARS_API_KEY ]
const fetch = require('isomorphic-fetch')
const path = require('path')
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client","build")))

app.get('/sol/:sol/camera/:camera', (req,res) => {
    const { sol, camera } = req.params
    const fetchURL = `${URL}sol=${sol}&camera=${camera}&api_key=${key}`
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


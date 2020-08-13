
// server.js
const routes = require('./routes')
const path = require('path')
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client","build")))

// routes
/*
app.get('/', (req, res) => {
	res.send('Hello from MERN');
});
*/

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})


// Bootstrap server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});

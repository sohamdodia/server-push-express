const express = require ('express');
const fs = require ('fs');
const app = express();
const server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index.html');
});


server.listen(3000);

const spdy = require('spdy');
const express = require('express');
const app = express();
const fs = require('mz/fs');


app.use(express.static('public'));

app.get('/home', (req, res) => {
	Promise.all([
		fs.readFileSync('public/index.html'),
        fs.readFileSync('public/js/squareRoot.js'),
        fs.readFileSync('public/js/randomNumber.js'),
		fs.readFileSync('public/image.png'),
		fs.readFileSync('public/image2.png'),

    ]).then(files => {
		if (res.push){
			const squareRootStream = res.push('/js/squareRoot.js', {
				req: {'accept': '**/*'},
				res: {'content-type': 'application/javascript'}
			});

			squareRootStream.on('error', err => {
			  console.log(err);
			});

			squareRootStream.end(files[1]);
			const randomNumberStream = res.push('/js/randomNumber.js', {
				req: {'accept': '**/*'},
				res: {'content-type': 'application/javascript'}
			});

			randomNumberStream.on('error', err => {
			  console.log(err);
			});

			randomNumberStream.end(files[2]);

			const firstImageStream = res.push('/image.png', {
				req: {'accept': '**/*'},
				res: {'content-type': 'image/png'}
			});

			firstImageStream.on('error', err => {
			  console.log(err);
			});

			firstImageStream.end(files[3]);

			const secondImageStream = res.push('/image2.png', {
				req: {'accept': '**/*'},
				res: {'content-type': 'image/png'}
			});

			secondImageStream.on('error', err => {
			  console.log(err);
			});

			secondImageStream.end(files[4]);

			res.writeHead(200);
			res.end(files[0]);
		}
	}).catch((err) => {
		console.log('err', err);
	})
})

spdy.createServer({
        key: fs.readFileSync(__dirname + '/server.key'),
        cert: fs.readFileSync(__dirname + '/server.crt')
    }, app)
    .listen(4000);

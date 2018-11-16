'use strict';

console.log('hello');
const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({dest: '../frontendtaskxd/uploadsversion/'});

app.use(express.urlencoded());


app.get('/', (req, res) => {
	console.log(req.query);
	const test = req.query.test;
	res.send('Hello world');
	});

app.post('/upload', upload.single('fileup'), (req, res, next) => {
	res.send("post exetuced");
	console.log('regular test');
});



app.post('/profile', upload.single('fileup'), (req, res, next) => {
	res.send(req.file);
	console.log('random test');
});


const cpUpload = upload.fields([{name: 'fileup', maxCount: 1}, {name: 'gallery', maxCount: 8}]);
app.post('/cool-profile', cpUpload, (req, res) => {
	console.log('uploading');
});

app.get('/test/:id/:kikkel', (req, res) => {
	console.log(req.params.id);
	res.send('test test' + req.params.id + req.params.kikkel);
	console.log('test kikkel ');
})


app.listen(3000);

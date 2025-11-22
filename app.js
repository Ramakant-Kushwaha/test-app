const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send({ msg: 'hello' }).status(200);
});

app.listen(3000, (err) => {
	console.log('Server is 3000');
});

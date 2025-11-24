const express = require('express');
const cors = require('cors');

const app = express();

app.use(
	cors({
		origin: '192.168.1.76:4200',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	})
);

app.get('/', (req, res) => {
	res.send({ msg: 'hello' }).status(200);
});

app.listen(3000, (err) => {
	console.log('Server is 3000');
});

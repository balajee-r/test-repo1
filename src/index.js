const express = require('express');
const PORT = Number(process.env.PORT) || 8080;

const app = express();



app.post('/greetings', (req, res) => {
    res.status(200).send('Hello, world!');
});

const server = app.listen(PORT, () => {
	console.log('App listening on port ', PORT);
});

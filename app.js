import express from 'express';

let app = express();

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('welcome to my API');
});

app.listen(port, () => {
    console.log('Running on PORT: ' + port);
});
import express from 'express';

let app = express();

let port = process.env.PORT || 3000;

var bookRouter = express.Router();
bookRouter.route('/books')
    .get((req, res) => {
        let responseJson = {hello: "This is my cool API"}

        res.json(responseJson);
    });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('welcome to my API');
});

app.listen(port, () => {
    console.log('Running on PORT: ' + port);
});
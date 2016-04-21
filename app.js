import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Book from './models/bookSchema';
import bookRouterModule from './routes/bookRoutes';

let db = mongoose.connect('mongodb://mongodb/bookAPI');
let app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let bookRouter = bookRouterModule(Book);
app.use('/api/books', bookRouter);

app.get('/', (req, res) => {
    res.send('welcome to my API');
});

app.listen(port, () => {
    console.log('Running on PORT: ' + port);
});
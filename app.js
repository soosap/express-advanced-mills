import express from 'express';
import mongoose from 'mongoose';
import Book from './models/bookSchema';

var db = mongoose.connect('mongodb://mongodb/bookAPI');

let app = express();

let port = process.env.PORT || 3000;

var bookRouter = express.Router();
bookRouter.route('/books')
    .get((req, res) => {

        let query = {};
        if (req.query.genre) {
            query.genre = req.query.genre;
        }

        Book.find(query, (err, books) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(books);
            }
        });

    });

bookRouter.route('/books/:bookId')
    .get((req, res) => {

        Book.findById(req.params.bookId, (err, book) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(book);
            }
        });

    });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('welcome to my API');
});

app.listen(port, () => {
    console.log('Running on PORT: ' + port);
});
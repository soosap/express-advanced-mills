import express from 'express';
import Book from '../models/bookSchema';

export default () => {
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
        })

        .post((req, res) => {
            let book = new Book(req.body);

            book.save();
            res.status(201).send(book);
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

    return bookRouter;
};
import express from 'express';

export default (Book) => {
    var bookRouter = express.Router();

    bookRouter.route('/')
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

    bookRouter.route('/:bookId')
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
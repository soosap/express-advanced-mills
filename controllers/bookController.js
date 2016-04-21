export default (Book) => {
    let post = (req, res) => {
        let book = new Book(req.body);

        book.save();
        res.status(201).send(book);
    };

    let get = (req, res) => {
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
    };
    
    return {
        post,
        get
    }
};

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Book from './models/bookSchema';
import bookRouterModule from './routes/bookRoutes';

let db;
if (process.env.ENV === 'test')
    db = mongoose.connect('mongodb://mongodb/bookAPI_test');
else {
    db = mongoose.connect('mongodb://mongodb/bookAPI');
}

let app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let bookRouter = bookRouterModule(Book);
app.use('/api/books', bookRouter);

app.get('/', (req, res) => {
    res.send('welcome to my API');
});

if (!module.parent) {
// http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html

    app.listen(port, () => {
        console.log('Running on PORT: ' + port);
    });
}

export default app;
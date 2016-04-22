import should from 'should';
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../app';
let Book = mongoose.model('Book');
let agent = request.agent(app);

describe('Book CRUD Test', () => {
    it('should allow a book to be posted and return a read and _id', (done) => {
        let bookPost = {title: 'New book', author: 'Dugorim', genre: 'Fantasy'};

        agent.post('/api/books')
            .send(bookPost)
            .expect(200)
            .end((err, res) => {
                res.body.read.should.equal(false);
                res.body.should.have.property('_id');
                done();
            });
    });

    afterEach((done) => {
        Book.remove().exec();
        done();
    });
});
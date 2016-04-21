import should from 'should';
import sinon from 'sinon';
import bookControllerModule from '../controllers/bookController';

describe('Book Controller Tests', () => {
    describe('Post', () => {
        it('should not allow an empty title on posts', () => {
            let Book = function(book) {
                this.save = () => {}
            };

            let req = {
                body: {
                    author: 'Michael Jackson'
                }
            };

            let res = {
                status: sinon.spy(),
                send: sinon.spy()
            };

            let bookController = bookControllerModule(Book);
            bookController.post(req, res);

            res.status.calledWith(400).should.equal(true, 'Bad status :' + res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(true);
        });
    });
});
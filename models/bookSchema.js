import mongoose from 'mongoose';
var Schema = mongoose.Schema;

let bookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    read: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Book', bookSchema);
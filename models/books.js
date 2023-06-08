const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    book_id : {
        type : Number,
        required : true,
        unique : true,
    },
    book_name : {
        type : String,
        required : true,
    },
    book_rating : {
        type : String,
        required : true,
    }

});

const Book = mongoose.model("Books", booksSchema);

module.exports = Book;
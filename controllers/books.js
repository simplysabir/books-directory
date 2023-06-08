const Books = require('../models/books');

const addBook = async (req,res) => {
    try {
        const { book_id, book_name, book_rating } = req.body;
        Books.create({
            book_id,
            book_name,
            book_rating
        })

        return res.status(200).json({success : true, msg : "Book Added"});
    } catch (error) {
        return res.status(502).json(error);
    }
}

const getBook = async (req,res) => {
    try {
        const { book_id } = req.body;
        const bookExists = await Books.findOne({book_id : book_id});
        if(!bookExists) {
            return res.status(502).send({success : false, msg : "Books Doesn't Exists"});
        }
        return res.status(200).json(bookExists);
    } catch (error) {
        return res.status(502).json(error);
    }
}

const getAllBook = async (req,res) => {
    try {
        const answer = await Books.find({});

        return res.status(200).json(answer);
    } catch (error) {
        return res.status(502).json(error);
    }
}

const updateBook = async (req,res) => {
    try {
        const { book_id, book_name, book_rating } = req.body;
        const bookExists = await Books.findOne({book_id : book_id});
        if(!bookExists) {
            return res.status(502).send({success : false, msg : "Books Doesn't Exists"});
        }
        const finalAnswer = await Books.findOneAndUpdate({book_id : book_id, book_name: book_name, book_rating : book_rating});
        finalAnswer.save();

        return res.status(200).send({success : true, msg : "Book Updated"});

    } catch (error) {
        return res.status(502).json(error);
    }
}

const deleteBook = async (req,res) => {
    try {
        const { book_id } = req.body;
        const bookExists = await Books.findOne({book_id});
        if(!bookExists) {
            return res.status(502).send({success : false, msg : "Books Doesn't Exists"});
        }
        const finalAnswer = await Books.findOneAndDelete({book_id});
        finalAnswer.save();

        res.status(200).json({success : true, msg : "Book Deleted"});
        
    } catch (error) {
        return res.status(502).json(error);
    }
}

module.exports = {
    addBook,
    getBook,
    getAllBook,
    updateBook,
    deleteBook,
}
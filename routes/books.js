const express = require('express');
const {addBook, getBook, getAllBook, updateBook, deleteBook} = require('../controllers/books')
const router = express.Router();

router.post("/add", addBook);
router.get("/", getBook);
router.get("/all", getAllBook);
router.patch("/update", updateBook);
router.delete("/delete", deleteBook);



module.exports = router;
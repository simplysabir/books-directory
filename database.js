const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

const connectToDB = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/books-directory");
}

module.exports = {
    connectToDB,
}
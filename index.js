const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json())
const {connectToDB} = require('./database');
const bookRoute = require('./routes/books');

connectToDB().then(()=>{console.log("Database Connected")}).catch((err)=>{console.log(err)});

app.use("/books", bookRoute);
app.listen(PORT, ()=>{
    console.log(`Server Listening on ${PORT}`);
})
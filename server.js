const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/lms', {useNewUrlParser: true}, () => {
    console.log("mongoose connected")
})



app.use('/user', userRouter);
const port = process.env.PORT || 5000;

app.listen(port,() => console.log('server started'))
const express = require('express');

const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes');
const lessonRouter = require('./routes/lessonRoutes');
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/lms', {useNewUrlParser: true}, () => {
    console.log("mongoose connected")
})

const app = express();

app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/lessons',lessonRouter);
const port = process.env.PORT || 5000;

app.listen(port,() => console.log('server started'))
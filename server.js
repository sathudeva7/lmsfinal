const express = require('express');

const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes');
const lessonRouter = require('./routes/lessonRoutes');
const mongoose = require('mongoose');
const path = require('path');
var cors = require('cors')


mongoose.connect('mongodb://localhost:27017/lms', {useNewUrlParser: true}, () => {
    console.log("mongoose connected")
})

const app = express();

app.use(bodyParser.json());

app.use(cors())
app.use('/user', userRouter);
app.use('/lessons',lessonRouter);
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'client\\lms-client-app\\build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client\\lms-client-app\\build', 'index.html'));
});
app.listen(port,() => console.log('server started'))
const express = require('express');
var mongoose = require('mongoose');
require('../models/lesson');
const Lesson = mongoose.model('lesson')
require('../models/user');
const User=mongoose.model('user')
const isAdmin = require('../middleware/isAdmin')
const lessonRouter = express.Router();
const config = require('config');
const auth = require('../middleware/auth');


lessonRouter.route('/lesson')
.get((req,res,next) => {
  Lesson.find({}).populate('teacherid')
    .then(lesson => res.json(lesson))
})
.post(auth,(req,res,next) => {
    const lesson = req.body.lesson
    const grade = req.body.grade;
    const teacherid = req.user.id
    const newLesson = new Lesson({
        lesson,
        grade,
        teacherid
    });
    
    
    newLesson.save().then(lesson => res.json(lesson));
})

lessonRouter.route('/lesson/:lessonid')
.get(auth,(req,res,next) => {
    
})

module.exports = lessonRouter;
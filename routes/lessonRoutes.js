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
.get(auth,isAdmin,(req,res,next) => {
  Lesson.find({teacherid:req.user.id}).populate('students.studentid')
    .then(lesson => res.json(lesson))
})
.post(auth,isAdmin,(req,res,next) => {
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

lessonRouter.route('/lesson/:lessonId/addstudent')
.post(auth,(req,res,next) => {
    Lesson.findOneAndUpdate({_id:req.params.lessonId},{
        $push:{students:{studentid:req.user.id}}
    },{new:true}).exec(function(err,result){
        if(err) return res.status(400).json({msg:'Cant added'});
        return res.status(200).json(result)
    })
})



module.exports = lessonRouter;
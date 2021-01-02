const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    
        lesson: { type: String, required: true },
        grade: { type: String, required: true },
        studentid:[{
                type:Schema.Types.ObjectId,
                ref:'user'
              }],
        teacherid:{
                type:Schema.Types.ObjectId,
                ref:'user'
        }
},
{timestamps:true}

);

var Lesson= mongoose.model("lesson",LessonSchema);
module.exports = Lesson;

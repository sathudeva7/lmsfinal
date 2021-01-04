const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        grade: { type: String, required: true },
        img:{type:String, default:""},
        email: { type: String,  lowercase: true , required: true},
        gender: { type: String, enum: ['M', 'F', 'U'], default: 'U' },
        schoolName: { type: String },
        password: { type: String, required:true  },
        
      roles: { 
        type: String,
        enum: ['student', 'teacher','admin'],
        default: 'student'
      },      
}

);
var User= mongoose.model("user",UserSchema);

module.exports = User;
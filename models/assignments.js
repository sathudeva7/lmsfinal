const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    
        assignment: { type: String },
       file:{type:String},
       duedate:{type:String}
},
{timestamps:true}

);

var Assignment= mongoose.model("assignment",AssignmentSchema);
module.exports = Assignment;

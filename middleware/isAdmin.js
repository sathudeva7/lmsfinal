const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('../models/user')
const User=mongoose.model('user')
function isAdmin(req,res,next){
    const user = req.user;
    console.log(user)
    try{
    User.findOne({_id:user.id})
    .then((user) => {
        if(user.firstname==='sathu'){
            next();
        }else{
            err = new Error('You are not authorized to perform this operation!');
            err.status = 403;
            return next(err);
        }
    });
}catch(e){
    res.status(400).json({msg:'only acces for teachers'})
}
    
}

module.exports = isAdmin;
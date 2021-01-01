const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.route('/register')
.get((req,res,next) => {
    res.json("no get")
})
.post((req,res,next) => {
    const email = req.body.email
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const password = req.body.password
    const grade = req.body.grade
    const schoolName = req.body.schoolName
    const gender = req.body.gender
    const roles = req.body.roles
    if(!email|| !password || !firstname || !lastname || !grade || !schoolName  ){
        return res.status(400).json({msg:'Please enter all fields'});
    }

    User.findOne({email})
    .then(user => {
        if(user) return res.status(400).json({msg:'User already exists'});

        const newUser = new User({firstname,lastname,email,password,gender,roles,schoolName,grade})
        bcrypt.genSalt(10,(err,salt) => {
            bcrypt.hash(newUser.password,salt,(err,hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save().then(user1 => {
                        jwt.sign({id:user1.id},
                            config.get('jwtSecret'),
                            {expiresIn:3600},
                            (err,token) => {
                                if(err) throw err;
                                res.json({token,user:{
                                    id:user1.id,
                                    email:user1.email,
                                    firstname:user1.firstname,
                                    lastname:user1.lastname
                                }})
                            } )
                        
                })
            })
        })
        
    },(err) => next(err))
    .catch((err) => next(err))
})

userRouter.route('/login')
.post((req,res,next) => {
    const email = req.body.email
    const password = req.body.password
    if( !email || !password){
        return res.status(400).json({msg:'Please enter all fields'});
    }

    User.findOne({email})
    .then(user => {
        if(!user) return res.status(400).json({msg:'User doesnt exists'})

        bcrypt.compare(password,user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({msg:'Invalid credentials'})

            jwt.sign({id:user.id},
                config.get('jwtSecret'),
                {expiresIn:3600},
                (err,token) => {
                    if(err) throw err;
                    res.json({token,user:{
                        id:user.id,
                        email:user.email,
                        firstname:user.firstname,
                        lastname:user.lastname
                    }})
                } )
        })

    },(err) => next(err))
    .catch((err) => next(err))
})

module.exports = userRouter;
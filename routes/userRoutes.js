const express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('../models/user');
const User = mongoose.model('user')
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const upload = require('../services/upload')
const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.route('/register')
    .get((req, res, next) => {
        res.json("no get")
    })
    .post((req, res, next) => {
        const email = req.body.email
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const password = req.body.password
        const grade = req.body.grade
        const schoolName = req.body.schoolName
        const gender = req.body.gender
        const roles = req.body.roles
        if (!email || !password || !firstname || !lastname || !grade || !schoolName) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        User.findOne({ email })
            .then(user => {
                if (user) return res.status(400).json({ msg: 'User already exists' });

                const newUser = new User({ firstname, lastname, email, password, gender, roles, schoolName, grade })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save().then(user1 => {
                            jwt.sign({ id: user1.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token, user: {
                                            id: user1.id,
                                            email: user1.email,
                                            firstname: user1.firstname,
                                            lastname: user1.lastname
                                        }
                                    })
                                })

                        })
                    })
                })

            }, (err) => next(err))
            .catch((err) => next(err))
    })

userRouter.route('/login')
    .post((req, res, next) => {
        const email = req.body.email
        const password = req.body.password
        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        User.findOne({ email })
            .then(user => {
                if (!user) return res.status(400).json({ msg: 'User doesnt exists' })

                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })

                        jwt.sign({ id: user.id },
                            config.get('jwtSecret'),
                            { expiresIn: 3600 },
                            (err, token) => {
                                if (err) throw err;
                                res.json({ token, user })
                            })
                    })

            }, (err) => next(err))
            .catch((err) => next(err))
    })

userRouter.route('/user')
    .get(auth, (req, res, next) => {
        try {
            User.findById(req.user.id)
                .then((user) => {
                    if (!user) throw Error('user does not exist');
                    res.json(user);
                })
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    })

const singleUpload = upload.single('image');

userRouter.route('/upload')
    .post(auth,(req, res) => {
        singleUpload(req, res, function (err) {
            if (err) return res.json(err);
            User.findByIdAndUpdate(String(req.user.id),{
                img:req.file.location
            }).exec(function(err,result){
                if(err) return res.status(400).json({msg:'Cant added'});
                return res.status(200).json(result)
          

            })
        })
    })


module.exports = userRouter;
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const User = require('../models/User');

app.post("/register", (req, res)=> {
    User.findOne({ email : req.body.email}).then((user)=> {
        if (user) {
            return res.status(400).json({email: "A user already registered with this"})
        } else {
            const newUser = new User({
                email : req.body.email,
                password : req.body.password,
            });
            newUser.save()
            return res.status(200).json({msg: newUser})
        }
    })


})
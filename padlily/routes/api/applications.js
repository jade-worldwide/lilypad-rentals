const mongoose = require('mongoose');
let Application = require("../../models/Application");
const express = require('express');
const router = express.Router();

let User = require('../../models/User');

// Create a property
router.post("/renter/application/create/", async (req, res) => {
    console.log("In post router", req.body.user.email)
    try {
    if (req.body) {

    } else {
        console.log("No request body")
    }
    const newApplication = new Application(req.body);
    const saveApplication = await newApplication.save();

    console.log('--new Prop', saveProperty._id);
    const populateUser = await User.update({email: req.body.user.email}, {$push: {application: mongoose.Types.ObjectId(saveApplication._id)}})
    console.log(populateUser)
    res.send({sucess: true});
    } catch(err) {
        console.log(err)
        res.sendStatus(400);
    }
    // Property
    //     .create(req.body)
    //     .then(dbProperty => {
    //         // If a Book was created successfully, find one library (there's only one) and push the new Book's _id to the Library's `books` array
    //         // { new: true } tells the query that we want it to return the updated Library -- it returns the original by default
    //         // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
    //         return User.findOneAndUpdate({}, { $push: { properties: dbProperty._id } }, { new: true });
    //       })
    //     .catch(err => res.status(422).json(err));
});
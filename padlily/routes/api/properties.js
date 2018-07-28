const mongoose = require('mongoose');
let Property = require("../../models/Property");
const express = require('express');
const router = express.Router();

let User = require('../../models/User');

// Property Controllers

// View all properties
router.get("/results", (req, res) => {
    if (req.query.city) {
        console.log("query detected")
        Property
            .find({ city: req.query.city })
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    } else {
        console.log("no query")
        Property
            .find()
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

});

// View one property
router.get("/property/:id", (req, res) => {
    if (req.params.id === "undefined") {
        console.log("No property ID detected")
    } else {
        Property
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
});

// Create a property
router.post("/manager/property/create/", async (req, res) => {
    console.log("In post router", req.body.user.email)
    try {
    if (req.body) {
        //console.log("Request body detected" + req.body)
    } else {
        console.log("No request body")
    }
    const newProperty = new Property(req.body);
    const saveProperty = await newProperty.save();

    console.log('--new Prop', saveProperty._id);
    const populateUser = await User.update({email: req.body.user.email}, {$push: {property: mongoose.Types.ObjectId(saveProperty._id)}})
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

// Edit a property
router.put("/property/update/:id", (req, res) => {
    Property
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Delete a property
router.delete("/property/delete/:id", (req, res) => {
    Property
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;
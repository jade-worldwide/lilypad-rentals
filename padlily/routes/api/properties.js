let Property = require("../../models/Property");
const express = require('express');
const router = express.Router();


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
router.post("/manager/property/create", (req, res) => {
    console.log("In post router")
    if (req.body) {
        console.log("Request body detected" + req.body)
    } else {
        console.log("No request body")
    }

    Property
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
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
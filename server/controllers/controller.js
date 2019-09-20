  

const Pet = require("../models/model.js");
//////////IMPORTS//////////
const express = require("express");
const app = express();
//////////IMPORTS//////////
//////////STATIC FOLDERS//////////
app.use(express.json()); 
//////////STATIC FOLDERS////////// 

module.exports = {
    index: function(req, res) {
        Pet.find().sort("petType")
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    newPet: function(req, res) { //////add new Pet
        Pet.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    rid: function(req, res) { /////remove Pet
        Pet.deleteOne({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    upPet: function(req, res) {
        Pet.updateOne({_id:req.params.id},{$push:{quotes:{content:req.body.content}}},{runValidators:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    editPet: function(req, res) {
        Pet.updateOne({_id:req.params.id},{$set:{name: req.body.name, petType: req.body.petType, description: req.body.description, skills: req.body.skills}},{runValidators:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    rateUpComment: function(req, res) {
        Pet.updateOne({_id:req.params.id},{$inc:{"likes":1}})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    rateDownComment: function(req, res) {
        Pet.updateOne({"quotes._id":req.params.cid},{$inc:{"quotes.$.rating":-1}})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    getPet: function(req, res) { ///get single Pet info
        Pet.find({name:req.params.name})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
};







const express = require("express");
const burgers = require("../models/burger.js");

const router = express.Router();

const burger = require("../models/burger.js");



router.get("/", function(req, res){
    burger.all(function(data){
        const hbsObject = {
            burgers: data
        }
        console.log(hbsObject + "at ln15 on buergerController.js")
        res.render("index", hbsObject)

  })
})

router.post("/api/burgers", function(req, res){
    burger.create([
        "name", "devour"
    ],[
        req.body.name, req.body.devour
    ], function(result){
        res.json({id: result.insertedId} + " POST router Success on line 27 at burgerController.js")
    })
    
})

router.put("/api/burgers/:id", function(req, res){
    const condition = "id = " + req.params.id;
    console.log ("condition", condition + "///ln 34 burgerController.js")

    burger.update({
        devour: req.body.devour
    }, condition, function(results){
        if (result.changedRows === 0){
            return res.status(404)
        } else{
            res.status(200)
        }
    })
    
})

module.exports = router
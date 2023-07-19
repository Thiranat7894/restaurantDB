const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant.model");
const {
    error
} = require("console");

//Insert restaurant to database
//http://localhost:5000/restaurants
router.post("/restaurants", (req, res) => {
    //Create Restaurant instance
    const newRestaurant = new Restaurant({
        name: req.body.name,
        type: req.body.type,
        imageurl: req.body.imageurl
    })
    //Insert to DB
    Restaurant.create(newRestaurant, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message ||
                    "Some error occured while inserting the new restaurant"
            })
        } else {
            res.send(data)
        }
    })
})

//Get all Restaurants
//http://localhost:500/restaurants
router.get("/restaurants", (req, res) => {
    Restaurant.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message ||
                    "Some error occured while inserting the new restaurant"
            })
        } else {
            res.send(data)
        }
    })
})

//Get restaurant by id http://localhost:5000/restaurants/2
router.get("/restaurants/:id", (req, res) => {
    //Number.parseInt เปลี่ยน test เป็น int
    const restaurantId = Number.parseInt(req.params.id);
    restaurantId.getById(restaurantId,(err, data) => {
         if (err) {
             if (err.kind === "not_found") {
                 res.status(400).send({
                     message: "Resaturant not found with this id" + restaurantId
                 })
             } else {
                 res.status(500).send({
                     message: err.message || "ERROR"
                 });
             }
         } else {
             res.send(data)
         }
    })
});

router.put("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Attributes can't be empty!"
        })
    }
    restaurant.updateById(restaurantId, new restaurant(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(400).send({
                    message: "Restaurant not found with this id" + restaurantId
                })
            } else {
                res.status(500).send({
                    message: err.message || "ERrOr"
                });
            }
        } else {
            res.send(data)
        }
    })
});


router.delete("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id);
    restaurant.deleteById(restaurantId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(400).send({
                    message: "Restaurant not found with this id" + restaurantId
                })
            } else {
                res.status(500).send({
                    message: err.message || "ERrOr"
                });
            }
        } else {
            res.send({
                message: "Restaurant id:" + restaurantId + "is deleted"
            })
        }
    })
});

module.exports = router;
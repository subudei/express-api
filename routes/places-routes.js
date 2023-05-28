const express = require("express");

const placesControllers = require("../controllers/places-controller");

const router = express.Router();
// Router is a middleware function, so we can export it and use it in app.js  as middleware function

//  BASICS OF REST API :
// POST write data to the server
// GET read data from the server
// PUT update data
// DELETE delete data

//  router.get method is a middleware function that will be executed for incoming GET requests, first argument is the path, second argument is the middleware function that will be executed for incoming requests.

router.get("/:pid", placesControllers.getPlaceById);

router.get("/users/:uid", placesControllers.getPlacesByUserId);

//  router.post method is a middleware function that will be executed for incoming POST requests, first argument is the path, second argument is the middleware function that will be executed for incoming requests.
router.post("/", placesControllers.createPlace);

// patch request is used to update existing resources

router.patch("/:pid", placesControllers.updatePlace);

router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;

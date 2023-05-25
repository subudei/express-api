const express = require("express");

const placesControllers = require("../controllers/places-controller");

const router = express.Router();
// Router is a middleware function, so we can export it and use it in app.js  as middleware function

router.get("/:pid", placesControllers.getPlaceById);

router.get("/users/:uid", placesControllers.getPlaceByUserId);

router.post("/", placesControllers.createPlace);

module.exports = router;

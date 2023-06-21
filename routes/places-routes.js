const { Router } = require("express");
const { check } = require("express-validator");

const placesControllers = require("../controllers/places-controller");

const router = Router();
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
router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placesControllers.createPlace
);

// patch request is used to update existing resources

router.patch("/:pid", [
  check("title").not().isEmpty(),
  check("description").isLength({ min: 5 }),
],placesControllers.updatePlace);

router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;

//   Post and Get diference in req object is that post has a body property and get does not have a body property, that means that we can access the body property only on post request, and we can access the query params only on get request. 
//  Body is the data that we send along with the request, for example: http://localhost:5000/api/places, the data that we send along with the request is the body.
//   Query params are the params that we add after the ? in the url, for example: http://localhost:5000/api/places/users/u1, u1 is the query param.

//  on Post req we access the body property of the req object, on Get req we access the query property of the req object.

// on Post res we send back a response that contains the data that we want to store on the server, on Get res we send back a response that contains the data that we want to get from the server.
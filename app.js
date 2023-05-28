const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

// bodyParser need to be before routes because we want to parse the body before we reach the routes
app.use(bodyParser.json());
// use method is a middleware function that will be executed for every incoming request, first argument is the path, second argument is the middleware function that will be executed for incoming requests.
 
app.use("/api/places", placesRoutes); // => /api/places...

// 404 Middleware function for unsupported routes (routes that are not defined)
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

//  ERROR HANDLING MIDDLEWARE FUNCTION
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  // if we already sent a response
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000);

// http://localhost:5000

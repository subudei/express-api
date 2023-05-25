const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");

const app = express();

// bodyParser need to be before routes because we want to parse the body before we reach the routes
app.use(bodyParser.json());

app.use("/api/places", placesRoutes); // => /api/places...

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

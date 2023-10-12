const express = require("express");
const axios = require("axios");
var cors = require('cors')
const bikeController = require("./controllers/bike");
const toyController = require("./controllers/toy");
const Constants = require("./Constants/constants");
const ErrorConstants = require("./Constants/errorMessages");
const foodController = require("./controllers/food");
/**
 * Application Constants (move to constants file/ environemnt variables later)
 */

/**
 * MIDDLEWARE definitions
 */
const unknownEndpointHandler = (req, resp) => {
  resp.status(Constants.HTTP_STATUS_CODE.PAGE_NOT_FOUND).json({
    error: ErrorConstants.ERROR.PAGE_NOT_FOUND,
    detail: ErrorConstants.DETAIL.PAGE_NOT_FOUND,
  });
};

const app = express();
app.use( cors() );
app.use(Constants.APPLICATION_ROUTES.BIKE_ROUTES.DEFAULT, bikeController);
app.use(Constants.APPLICATION_ROUTES.FOOD_ROUTES.DEFAULT, foodController);
app.use(Constants.APPLICATION_ROUTES.TOY_ROUTES.DEFAULT, toyController);

app.use(unknownEndpointHandler);
app.use(cors());
// Start the Express server
app.listen(Constants.ENV.PORT, () => {
  console.log(`Server is running on port ${Constants.ENV.PORT}`);
});

const express = require("express");
var cors = require('cors')
const laptopController = require("./controllers/laptops");
const dvdController = require("./controllers/dvd");
const bookController = require("./controllers/books");
const Constants = require("./Constants/constants");
const ErrorConstants = require("./Constants/errorMessages");
/**
 * Application Constants (move to constants file/ environemnt variables later)
 */

/**
 * MIDDLEWARE definitions
 */
const unknownEndpointHandler = (req, resp) =>{
  resp.status(Constants.HTTP_STATUS_CODE.PAGE_NOT_FOUND).json({
    error: ErrorConstants.ERROR.PAGE_NOT_FOUND,
    detail: ErrorConstants.DETAIL.PAGE_NOT_FOUND
  });
}

const app = express();
app.use( cors() );
app.use(Constants.APPLICATION_ROUTES.DVD_ROUTES.DEFAULT, dvdController);
app.use(Constants.APPLICATION_ROUTES.LAPTOP_ROUTES.DEFAULT, laptopController);
app.use(Constants.APPLICATION_ROUTES.BOOK_ROUTES.DEFAULT, bookController);


app.use(unknownEndpointHandler);


// Start the Express server
app.listen(Constants.ENV.PORT, () => {
  console.log(`Server is running on port ${Constants.ENV.PORT}`);
});
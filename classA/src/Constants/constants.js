require("dotenv").config()

const ENV = {
    PORT: process.env.PORT,
    HOST_BIKES: process.env.HOST_BIKES,
    HOST_FOOD: process.env.HOST_FOOD,
    HOST_TOYS: process.env.HOST_TOYS,
}

const HTTP_STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    PAGE_NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

const APPLICATION_ROUTES = {
    BIKE_ROUTES:{
        DEFAULT: "/classA/bikes",
        ALL_BIKES: "/all/:location",
        BIKES_TEAM: "/team"
    },
}
module.exports = {ENV, APPLICATION_ROUTES, HTTP_STATUS_CODE};


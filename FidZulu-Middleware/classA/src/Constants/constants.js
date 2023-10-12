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
        BIKES_TEAM: "/teams"
    },
    TOY_ROUTES:{
        DEFAULT: "/classA/toys",
        ALL_TOY: "/all/:location",
        TOY_TEAM: "/teams"
    },
    FOOD_ROUTES:{
        DEFAULT: "/classA/food",
        ALL_FOODS: "/all/:location",
        FOODS_TEAM: "/teams"
    }
}
module.exports = {ENV, APPLICATION_ROUTES, HTTP_STATUS_CODE};


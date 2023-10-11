require("dotenv").config()

const ENV = {
    PORT: process.env.PORT,
    HOST_BOOKS: process.env.HOST_BOOKS,
    HOST_DVD: process.env.HOST_DVD,
    HOST_LAPTOPS: process.env.HOST_LAPTOPS,
}

const APPLICATION_ROUTES = {
    LAPTOP_ROUTES:{
        DEFAULT: "/classB/laptops",
        ALL_LAPTOPS: "/all/:location",
        LAPTOPS_TEAM: "/team"
    },
}
module.exports = {ENV, APPLICATION_ROUTES};


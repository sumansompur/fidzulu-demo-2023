require("dotenv").config()

const ENV = {
    PORT: process.env.PORT,
    HOST_BOOKS: process.env.HOST_BOOKS,
    HOST_DVD: process.env.HOST_DVD,
    HOST_LAPTOPS: process.env.HOST_LAPTOPS,
}

const HTTP_STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    PAGE_NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

const APPLICATION_ROUTES = {
    LAPTOP_ROUTES:{
        DEFAULT: "/classB/laptops",
        ALL_LAPTOPS: "/all/:location",
        LAPTOPS_TEAM: "/teams"
    },
    DVD_ROUTES:{
        DEFAULT: "/classB/dvds",
        ALL_DVDS: "/all/:location",
        DVDS_TEAM: "/teams"
    },
    BOOK_ROUTES:{
        DEFAULT: "/classB/books",
        ALL_BOOKS: "/all/:location",
        BOOKS_TEAM: "/teams"
    }
}
module.exports = {ENV, APPLICATION_ROUTES, HTTP_STATUS_CODE};


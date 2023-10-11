const ERROR = {
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    PAGE_NOT_FOUND: "Page not found"
}
const DETAIL = {
    PAGE_NOT_FOUND: "Requested resource does not exist or URL is invalid",
    BACKEND_CONNECTION_FAILURE: "Unable to connect to backend",
    UNKNOWN_COUNTRY: "Region not found. Services are only supported in IN, IE and US-NC"
}
module.exports = {ERROR, DETAIL};
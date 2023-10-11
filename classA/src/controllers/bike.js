const express = require("express");
const axios = require("axios");
const {logRequestResponse, createLoggerWithPrefix} = require("../utils/logger");
const router = express.Router();
const Constants = require("../Constants/constants");
const ErrorMessages = require("../Constants/errorMessages");

router.use(logRequestResponse);

const logger = createLoggerWithPrefix("Bike Service");

router.get(Constants.APPLICATION_ROUTES.BIKE_ROUTES.ALL_BIKES, async(req, resp) => {
    let location = req.params.location;
    if(location != "IN" && location!="IE" && location!="US-NC"){
        resp.status(Constants.HTTP_STATUS_CODE.PAGE_NOT_FOUND).json({
            error: ErrorMessages.ERROR.PAGE_NOT_FOUND,
            detail: ErrorMessages.DETAIL.UNKNOWN_COUNTRY
        })
        return;
    }
    let backendResp;
    try{
        backendResp = await axios.get(`${Constants.ENV.HOST_BIKES}/all/${location}`);
        resp.status(Constants.HTTP_STATUS_CODE.OK).json(backendResp.data);
    } catch(e){
        logger.error("Could not connect to backend for getting bike details. ERROR:\n"+e);
        resp.status(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
            detail: ErrorMessages.DETAIL.BACKEND_CONNECTION_FAILURE
        });
    }
});

router.get(Constants.APPLICATION_ROUTES.BIKE_ROUTES.BIKES_TEAM, async(req, resp) =>{

    let backendResp;
    try{
        //TODO: Get axios URL from env
        backendResp = await axios.get(`${Constants.ENV.HOST_BIKES}/teams`);
        resp.status(Constants.HTTP_STATUS_CODE.OK).json(backendResp.data);
    } catch(e){
        logger.error("Could not connect to backend for getting bike team details\n. ERROR:", e);
        resp.status(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
            detail: ErrorMessages.DETAIL.BACKEND_CONNECTION_FAILURE
        });
    }
});

module.exports = router;
const express = require("express");
const axios = require("axios");
const {logRequestResponse, createLoggerWithPrefix} = require("../utils/logger");
const router = express.Router();
const Constants = require("../Constants/constants");
const ErrorMessages = require("../Constants/errorMessages");

router.use(logRequestResponse);

const logger = createLoggerWithPrefix("Food Service");

router.get(Constants.APPLICATION_ROUTES.FOOD_ROUTES.ALL_FOODS, async(req, resp) => {
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
        backendUrl=`${Constants.ENV.HOST_FOOD}/all/${location}`;
        backendResp = await axios.get(backendUrl);
        if(backendResp.data.success){
            resp.status(Constants.HTTP_STATUS_CODE.OK).json(backendResp.data.body);
        }
        else{
            resp.status(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
                detail: backendResp.data.message
            });
        }
    } catch(e){
        logger.error("Could not connect to backend for getting bike details. ERROR:\n"+e);
        resp.status(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
            detail: ErrorMessages.DETAIL.BACKEND_CONNECTION_FAILURE
        });
    }
});
router.get(Constants.APPLICATION_ROUTES.FOOD_ROUTES.FOODS_TEAM, async(req, resp) =>{

    let backendResp;
    try{ 
        backendResp = await axios.get(`${Constants.ENV.HOST_FOOD}/teams`);
        if(backendResp.data.success) resp.status(200).json(backendResp.data.body);
        else{
            resp.status(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
                detail: backendResp.data.message
            });
        }
    } catch(e){
        logger.error("Could not connect to backend for getting food team details\n. ERROR:", e);
        resp.status(500).json({
            error: "Internal Server Error",
            detail: "Unable to connect to backend"
        });
    }
});

module.exports = router;
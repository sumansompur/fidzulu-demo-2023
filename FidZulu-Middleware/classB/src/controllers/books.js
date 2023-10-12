const express = require("express");
const axios = require("axios");
const {logRequestResponse, createLoggerWithPrefix} = require("../utils/logger");
const router = express.Router();
const Constants = require("../Constants/constants");
const ErrorMessages = require("../Constants/errorMessages");

router.use(logRequestResponse);

const logger = createLoggerWithPrefix("Book Service");

router.get(Constants.APPLICATION_ROUTES.BOOK_ROUTES.ALL_BOOKS, async(req, resp) => {
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
      backendResp = await axios.get(`${Constants.ENV.HOST_BOOKS}/all/${location}`);
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
      logger.error("Could not connect to backend for getting book details. ERROR:\n"+e);
      resp.status(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
          error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
          detail: ErrorMessages.DETAIL.BACKEND_CONNECTION_FAILURE
      });
  }
});

router.get(Constants.APPLICATION_ROUTES.BOOK_ROUTES.BOOKS_TEAM, async(req, resp) =>{

    let backendResp;
    try{
      //TODO: Get axios URL from env
      backendResp = await axios.get(`${Constants.ENV.HOST_BOOKS}/teams`);
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
      logger.error("Could not connect to backend for getting book team details\n. ERROR:", e);
      resp.status(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
          error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
          detail: ErrorMessages.DETAIL.BACKEND_CONNECTION_FAILURE
      });
  }
});

module.exports = router;
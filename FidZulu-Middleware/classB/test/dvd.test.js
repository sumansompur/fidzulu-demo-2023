const dvdController = require("../src/controllers/dvd");
const request = require("supertest");
const express = require("express");
const axios = require("axios");
const Constants = require("../src/Constants/constants");
const ErrorMessages = require("../src/Constants/errorMessages");
const app = express();

jest.mock("axios");
const axiosMock = require("axios");
app.use("/", dvdController);

const mockTeamSuccessfulResponse = {
    "data":{
        "success": true,
        "message": "List of Dvds",
        "body": [
        {
        "name": "Akhil P",
        "department": "Backend",
        "imageLink": "https://ibb.co/Y74xgf8",
        "teamName": "Backend Monsters",
        "quote": "Life is like a bicycle, to keep your balance you must keep moving.",
        "corpid": "a721802"
        },
        {
        "name": "Ayushi",
        "department": "Backend",
        "imageLink": "https://i.ibb.co/cNrRK7m/IMG-20230726-212509.jpg",
        "teamName": "Backend Monsters",
        "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "corpid": "a721444"
        },
        {
        "name": "Sucheth Hegde",
        "department": "Backend",
        "imageLink": "https://i.ibb.co/DkJZwMN/IMG-20230309-WA0011-3.jpg",
        "teamName": "Backend Monsters",
        "quote": "The only way to do great work is to love what you do.",
        "corpid": "a746128"
        },
      
        ]
        }
}

const mockAllDVDsSuccessfulResponse = {
    "data":{
      "success": true,
      "message": "List of Bikes",
      "body":[
        {
          "title": "Avengers - Infinity War",
          "mpaa_rating": "PG-13",
          "studio": "MARVEL",
          "time": 149,
          "price": 18.55
        },
        {
          "title": "Spider-Man Homecoming",
          "mpaa_rating": "14 and over",
          "studio": "Sony Pictures Home Entertainment",
          "time": 133,
          "price": 7.23
        },
        {
          "title": "Ant-Man",
          "mpaa_rating": "PG-13",
          "studio": "Walt Disney Video",
          "time": 117,
          "price": 19.98
        },
        {
          "title": "Captain America",
          "mpaa_rating": "PG",
          "studio": "Walt Disney Video",
          "time": 123,
          "price": 24.88
        }
      ]
    }
}

const mockFailResponse = {
    "data": {
      "success": false,
      "message": "test error",
      "body": []
    }
}

describe("Check GET all DVDs URL", () => {
    test("when axios call errors out", async () => {
        axiosMock.get.mockRejectedValue(new Error("Some Error"));
        const response = await request(app).get("/all/IN");
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
        expect(response.body).toStrictEqual({
            error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
            detail: ErrorMessages.DETAIL.BACKEND_CONNECTION_FAILURE
        });
    });

    test("when backend response 'success' field is false", async () => {
        axiosMock.get.mockResolvedValue(mockFailResponse);
        const response = await request(app).get("/all/IN");
        expect (response.status).toBe(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
        expect(response.body).toStrictEqual({
            error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
            detail: mockFailResponse.data.message
        })
    });

    test("when an unknown country is given as path variable", async () => {
        const response = await request(app).get("/all/NZ");
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.PAGE_NOT_FOUND);
        expect(response.body).toStrictEqual({
            error: ErrorMessages.ERROR.PAGE_NOT_FOUND,
            detail: ErrorMessages.DETAIL.UNKNOWN_COUNTRY
        })
    });

    test("when backend gives success response", async () => {
        axios.get.mockResolvedValue(mockAllDVDsSuccessfulResponse);
        const response = await request(app).get("/all/IN");
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.OK);
        expect(response.body).toStrictEqual(mockAllDVDsSuccessfulResponse.data.body);
    });

});

describe("Check GET 'team' URL", () => {
    test("when axios call errors out", async () => {
        axiosMock.get.mockRejectedValue(new Error("Mock Error"));
        const response = await request(app).get("/teams");
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
        expect(response.body).toStrictEqual({
            error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
            detail: ErrorMessages.DETAIL.BACKEND_CONNECTION_FAILURE
        });
    });

    test("when backend response 'success' field is false", async () => {
        axiosMock.get.mockResolvedValue(mockFailResponse);
        const response = await request(app).get("/teams");
        expect (response.status).toBe(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
        expect(response.body).toStrictEqual({
            error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
            detail: mockFailResponse.data.message
        })
    })

    test("when backend gives success response", async () => {
        axios.get.mockResolvedValue(mockTeamSuccessfulResponse);
        const response = await request(app).get("/teams");
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.OK);
       expect(response.body).toStrictEqual(mockTeamSuccessfulResponse.data.body);
    });

});


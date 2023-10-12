const bikeController = require("../src/controllers/bike");
const request = require("supertest");
const express = require("express");
const axios = require("axios");
const Constants = require("../src/Constants/constants");
const ErrorMessages = require("../src/Constants/errorMessages");
const app = express();

jest.mock("axios");
const axiosMock = require("axios");
app.use("/", bikeController);

const mockTeamSuccessfulResponse = {
    "data": {
        "success": true,
        "message": "List of Books",
        "body": [
            {
                "name": "Akhil P",
                "department": "Backend",
                "imageLink": "https://example.com/images/johndoe.jpg",
                "teamName": "Backend Monsters",
                "quote": "Life is like a bicycle, to keep your balance you must keep moving.",
                "corpid": "ak1234"
            },
            {
                "name": "Ayushi",
                "department": "Backend",
                "imageLink": "https://example.com/images/janesmith.jpg",
                "teamName": "Backend Monsters",
                "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
                "corpid": "ay5678"
            },
            {
                "name": "Sucheth Hegde",
                "department": "Backend",
                "imageLink": "https://example.com/images/michaeljohnson.jpg",
                "teamName": "Backend Monsters",
                "quote": "The only way to do great work is to love what you do.",
                "corpid": "sh7890"
            }
        ]
    }
}

const mockAllBikesSuccessfulResponse = {
    "data":{
      "success": true,
      "message": "List of Bikes",
      "body": [
        {
          "bikeId": 101,
          "manufacturer": "Honda",
          "modelName": "CBR 1000RR",
          "engineDisplacement": 300,
          "color": "Red",
          "price": 589.99
        },
        {
          "bikeId": 102,
          "manufacturer": "Kawasaki",
          "modelName": "Ninja ZX-6R",
          "engineDisplacement": 350,
          "color": "Green",
          "price": 825.99
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

describe("Check GET all bikes URL", () => {
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
        axios.get.mockResolvedValue(mockAllBikesSuccessfulResponse);
        const response = await request(app).get("/all/IN");
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.OK);
        expect(response.body).toStrictEqual(mockAllBikesSuccessfulResponse.data.body);
    });

});

describe("Check GET 'team' URL", () => {
    test("when axios call errors out", async () => {
        axiosMock.get.mockRejectedValue(new Error("Mock Error"));
        const response = await request(app).get(Constants.APPLICATION_ROUTES.BIKE_ROUTES.BIKES_TEAM);
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
        expect(response.body).toStrictEqual({
            error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
            detail: ErrorMessages.DETAIL.BACKEND_CONNECTION_FAILURE
        });
    });

    test("when backend response 'success' field is false", async () => {
        axiosMock.get.mockResolvedValue(mockFailResponse);
        const response = await request(app).get(Constants.APPLICATION_ROUTES.BIKE_ROUTES.BIKES_TEAM);
        expect (response.status).toBe(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
        expect(response.body).toStrictEqual({
            error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
            detail: mockFailResponse.data.message
        })
    })

    test("when backend gives success response", async () => {
        axios.get.mockResolvedValue(mockTeamSuccessfulResponse);
        const response = await request(app).get(Constants.APPLICATION_ROUTES.BIKE_ROUTES.BIKES_TEAM);
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.OK);
        expect(response.body).toStrictEqual(mockTeamSuccessfulResponse.data.body);
    });

});


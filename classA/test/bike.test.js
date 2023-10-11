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

describe("Check get bikes URL", () => {
    test("Returns error response when GET request made to backend bikes endpoint throws error", async () => {
        axiosMock.get.mockRejectedValue(new Error("Some Error"));
        const response = await request(app).get("/all/IN");
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
        expect(response.body).toStrictEqual({
            error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
            detail: ErrorMessages.DETAIL.BACKEND_CONNECTION_FAILURE
        });
    });

    test("Returns error when unknown country is passed to all endpoint", async() =>{
        const response = await request(app).get("/all/NZ");
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.PAGE_NOT_FOUND);
        expect(response.body).toStrictEqual({
            error: ErrorMessages.ERROR.PAGE_NOT_FOUND,
            detail: ErrorMessages.DETAIL.UNKNOWN_COUNTRY
        })
    })

    test("Returns correct response on valid GET request to bikes endpoint", async () => {
        mockBikes = [
            {
                "name": "Mamba Sport 12\" Balance Bike",
                "brand": "Mamba Bikes",
                "color": "black",
                "price": 75.88
            },
            {
                "name": "DJ Fat Bike 500W",
                "brand": "DJ Bikes",
                "color": "grey",
                "price": 1599.86
            },
            {
                "name": "Kobe Aluminum Balance",
                "brand": "Kobe",
                "color": "blue",
                "price": 88.56
            },
            {
                "name": "Pomona Men's Cruiser Bike",
                "brand": "Northwoods",
                "color": "silver",
                "price": 221.36
            }
        ];
        axios.get.mockResolvedValue({ data: mockBikes });
        const response = await request(app).get("/all/IN");
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.OK);
        expect(response.body).toStrictEqual(mockBikes);
    });

});

describe("Check get team URL", () => {
    test("Returns error response when GET request made to backend bikes endpoint throws error", async () => {
        axiosMock.get.mockRejectedValue(new Error("Mock Error"));
        const response = await request(app).get("/team");
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
        expect(response.body).toStrictEqual({
            error: ErrorMessages.ERROR.INTERNAL_SERVER_ERROR,
            detail: ErrorMessages.DETAIL.BACKEND_CONNECTION_FAILURE
        });
    });

    test("Returns correct response on valid GET request to bikes endpoint", async () => {
        mockTeam = {
            "team": "Disco Ninjas",
            "membersNames": ["Senthooran", "Gayatri", "Harsh", "Suman", "Kshama", "Mahima", "Sinchana", "Shevanth"]
        }
        axios.get.mockResolvedValue({ data: mockTeam });
        const response = await request(app).get("/all/IN");
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.OK);
        expect(response.body).toStrictEqual(mockTeam);
    });

});


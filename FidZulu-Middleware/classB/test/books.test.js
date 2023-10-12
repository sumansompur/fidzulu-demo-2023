const booksController = require("../src/controllers/books");
const request = require("supertest");
const express = require("express");
const axios = require("axios");
const Constants = require("../src/Constants/constants");
const ErrorMessages = require("../src/Constants/errorMessages");
const app = express()

jest.mock("axios");
const axiosMock = require("axios");
app.use("/", booksController);

const mockTeamSuccessfulResponse = {
    "data": {
        "success": true,
        "message": "List of Books",
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
                }
        ]
    }
}

const mockAllBooksSuccessfulResponse = {
    "data":{
      "success": true,
      "message": "List of Books",
      "body": [
        {
            "BookId": 201,
            "BookName": "A Game of Thrones",
            "Genre": "Fantasy",
            "Author": "George R.R. Martin",
            "Publisher": "Bantam",
            "Price": 11.79,
            "Ratings": 4.5,
            "ImageUrl": "https://shorturl.at/jyN45"
            },
            {
            "BookId": 202,
            "BookName": "To kill a Mockingbird",
            "Genre": "Fiction",
            "Author": "Harper Lee",
            "Publisher": "Harper Perennial",
            "Price": 15.33,
            "Ratings": 4.8,
            "ImageUrl": "https://shorturl.at/iovDL"
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

describe("Check GET all books URL", () => {
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
        axios.get.mockResolvedValue(mockAllBooksSuccessfulResponse);
        const response = await request(app).get("/all/IN");
        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.OK);
        expect(response.body).toStrictEqual(mockAllBooksSuccessfulResponse.data.body);
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


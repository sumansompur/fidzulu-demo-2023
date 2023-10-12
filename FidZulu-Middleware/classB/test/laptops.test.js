
const laptopController = require("../src/controllers/laptops");

const request = require("supertest");

const express = require("express");

const axios = require("axios");

const Constants = require("../src/Constants/constants");

const ErrorMessages = require("../src/Constants/errorMessages");

const app = express();

 

jest.mock("axios");

const axiosMock = require("axios");

app.use("/", laptopController);

 

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

 

const mockAllLaptopsSuccessfulResponse = {

    "data":{

      "success": true,

      "message": "List of Bikes",

      "body":[

        {

          "LaptopId": 502,
"BrandName": "HP",
"ModelName": "Spectre x360",
"CPU": "Intel Core i5",
"RAM": 8,
"GPU": "Intel UHD",
"VRAM": null,
"Storage": 256,
"ScreenSize": 13.3,
"Colour": "Black",
"Price": 1179.99,
"Ratings": 3.8,
"ImageUrl": "https://shorturl.at/apwY0"
        },

        {

          "LaptopId": 503,
"BrandName": "Lenovo",
"ModelName": "ThinkPad T14",
"CPU": "AMD Ryzen 7",
"RAM": 16,
"GPU": null,
"VRAM": null,
"Storage": 512,
"ScreenSize": 14,
"Colour": "Silver",
"Price": 943.99,
"Ratings": 4.9,
"ImageUrl": "https://shorturl.at/hkqCG"
        },

        

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

 

describe("Check GET all laptops URL", () => {

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

        axios.get.mockResolvedValue(mockAllLaptopsSuccessfulResponse);

        const response = await request(app).get("/all/IN");

        expect(response.status).toBe(Constants.HTTP_STATUS_CODE.OK);

        expect(response.body).toStrictEqual(mockAllLaptopsSuccessfulResponse.data.body);

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

 
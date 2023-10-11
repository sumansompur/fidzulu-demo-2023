const foodController = require("../src/controllers/food");
const request = require("supertest");
const express = require("express");
const axios = require("axios");
const app = express();

jest.mock("axios");
const axiosMock = require("axios");
app.use("/", foodController);

// FoodId, FoodName, Category, ShelfLife, VegNonVeg

describe("Check get food URL", () => {
    test("Returns error response when GET request made to backend food endpoint throws error", async () => {
        axiosMock.get.mockRejectedValue(new Error("Some Error"));
        const response = await request(app).get("/all/IN");
        expect(response.status).toBe(500);
        expect(response.body).toStrictEqual({
            error: "Internal Server Error",
            detail: "Unable to connect to the backend"
        });
    });

    test("Returns correct response on valid GET request to food endpoint", async () => {
        mockFood = [
            {
                // FoodId, FoodName, Category, ShelfLife, VegNonVeg
                "FoodId": 401,
                "FoodName": "Spaghetti",
                "Category": "Pasta",
                "ShelfLife": 3,
                "VegNonVeg": 1
            },
            {
                "FoodId": 402,
                "FoodName": "Lays",
                "Category": "Chips",
                "ShelfLife": 6,
                "VegNonVeg": 1
            },
            {
                "FoodId": 403,
                "FoodName": "Jam",
                "Category": "Spreads",
                "ShelfLife": 6,
                "VegNonVeg": 1
            },
            {
                "FoodId": 404,
                "FoodName": "Frozen Meat",
                "Category": "Meat",
                "ShelfLife": 1,
                "VegNonVeg": 0
            }
        ];
        axios.get.mockResolvedValue({ data: mockFood });
        const response = await request(app).get("/all/IN");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual(mockFood);
    });

});

describe("Check get team URL", () => {
    test("Returns error response when GET request made to backend food endpoint throws error", async () => {
        axiosMock.get.mockRejectedValue(new Error("Mock Error"));
        const response = await request(app).get("/team");
        expect(response.status).toBe(500);
        expect(response.body).toStrictEqual({
            error: "Internal Server Error",
            detail: "Unable to connect to the backend"
        });
    });

    test("Returns correct response on valid GET request to bikes endpoint", async () => {
        mockTeam = {
            "team": "Disco Ninjas",
            "membersNames": ["Senthooran", "Gayatri", "Harsh", "Suman", "Kshama", "Mahima", "Sinchana", "Shevanth"]
        }
        axios.get.mockResolvedValue({ data: mockTeam });
        const response = await request(app).get("/all/IN");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual(mockTeam);
    });

});


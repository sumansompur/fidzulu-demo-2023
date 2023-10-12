const laptopController = require("../src/controllers/laptops");
const request = require("supertest");
const express = require("express");
const axios = require("axios");
const app = express();

jest.mock("axios");
const axiosMock = require("axios");
app.use("/", laptopController);

describe("Check get laptops URL", () => {
  test("Returns error response when GET request made to backend bikes endpoint throws error", async () => {
    axiosMock.get.mockRejectedValue(new Error("Some Error"));
    const response = await request(app).get("/all/IN");
    expect(response.status).toBe(500);
    expect(response.body).toStrictEqual({
      error: "Internal Server Error",
      detail: "Unable to connect to backend",
    });
  });

  test("Returns correct response on valid GET request to bikes endpoint", async () => {
    mocklaptop = [
      {
        name: 'Mamba Sport 12" Balance Bike',
        brand: "Mamba Bikes",
        color: "black",
        price: 75.88,
      },
      {
        name: "DJ Fat Bike 500W",
        brand: "DJ Bikes",
        color: "grey",
        price: 1599.86,
      },
      {
        name: "Kobe Aluminum Balance",
        brand: "Kobe",
        color: "blue",
        price: 88.56,
      },
      {
        name: "Pomona Men's Cruiser Bike",
        brand: "Northwoods",
        color: "silver",
        price: 221.36,
      },
    ];
    axios.get.mockResolvedValue({ data: mocklaptop });
    const response = await request(app).get("/all/IN");
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(mocklaptop);
  });
});

describe("Check get team URL", () => {
  test("Returns error response when GET request made to backend laptop endpoint throws error", async () => {
    axiosMock.get.mockRejectedValue(new Error("Mock Error"));
    const response = await request(app).get("/team");
    expect(response.status).toBe(500);
    expect(response.body).toStrictEqual({
      error: "Internal Server Error",
      detail: "Unable to connect to backend",
    });
  });

  test("Returns correct response on valid GET request to bikes endpoint", async () => {
    mockTeam = {
      team: "Disco Ninjas",
      membersNames: [
        "Senthooran",
        "Gayatri",
        "Harsh",
        "Suman",
        "Kshama",
        "Mahima",
        "Sinchana",
        "Shevanth",
      ],
    };
    axios.get.mockResolvedValue({ data: mockTeam });
    const response = await request(app).get("/all/IN");
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(mockTeam);
  });
});

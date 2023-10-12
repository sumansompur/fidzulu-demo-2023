const { inBikes } = require('../../src/controllers/bikeController');
const { irBikes } = require('../../src/controllers/bikeController');
const { usBikes } = require('../../src/controllers/bikeController');
const { getBikes } = require('../../src/controllers/bikeController');
const {getBikeDetails} = require('../../src/models/productModel');
jest.mock('../../src/models/productModel');

describe('usBikes test', () => {
  it('should add 8% tax to each item in the result array', () => {
    const input =
      [
        {"BikeId": 101,
            "Manufacturer": "Honda",
            "ModelName": "CBR 1000RR",
            "EngineCC": 300,
            "Colour": "Red",
            "price": 499.99,
            "Ratings": 4.5,
            "ImageUrl": "https://shorturl.at/zLNW1"},
            {
              "BikeId": 102,
              "Manufacturer": "Kawasaki",
              "ModelName": "Ninja ZX-6R",
              "EngineCC": 350,
              "Colour": "Green",
              "price": 699.99,
              "Ratings": 3.8,
              "ImageUrl": "https://shorturl.at/hkyC0"
          }
      ];
    const expectedOutput = [{"BikeId": 101,
    "Manufacturer": "Honda",
    "ModelName": "CBR 1000RR",
    "EngineCC": 300,
    "Colour": "Red",
    "price": 539.99,
    "Ratings": 4.5,
    "ImageUrl": "https://shorturl.at/zLNW1"},
    {
      "BikeId": 102,
      "Manufacturer": "Kawasaki",
      "ModelName": "Ninja ZX-6R",
      "EngineCC": 350,
      "Colour": "Green",
      "price": 755.99,
      "Ratings": 3.8,
      "ImageUrl": "https://shorturl.at/hkyC0"
      }
    ];
    const result = usBikes(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = usBikes(invalidData);
    expect(result).toEqual({});
  });
});

describe('irBikes test', () => {
  it('should add 23% tax to each item in the result array', () => {
    const input = [
      {"BikeId": 101,
            "Manufacturer": "Honda",
            "ModelName": "CBR 1000RR",
            "EngineCC": 300,
            "Colour": "Red",
            "price": 499.99,
            "Ratings": 4.5,
            "ImageUrl": "https://shorturl.at/zLNW1"},
            {
              "BikeId": 102,
              "Manufacturer": "Kawasaki",
              "ModelName": "Ninja ZX-6R",
              "EngineCC": 350,
              "Colour": "Green",
              "price": 699.99,
              "Ratings": 3.8,
              "ImageUrl": "https://shorturl.at/hkyC0"
          }
      ];
    const expectedOutput = [
      {"BikeId": 101,
            "Manufacturer": "Honda",
            "ModelName": "CBR 1000RR",
            "EngineCC": 300,
            "Colour": "Red",
            "price": 614.99,
            "Ratings": 4.5,
            "ImageUrl": "https://shorturl.at/zLNW1"},
            {
              "BikeId": 102,
              "Manufacturer": "Kawasaki",
              "ModelName": "Ninja ZX-6R",
              "EngineCC": 350,
              "Colour": "Green",
              "price": 860.99,
              "Ratings": 3.8,
              "ImageUrl": "https://shorturl.at/hkyC0"
          }
    ];
    const result = irBikes(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = irBikes(invalidData);
    expect(result).toEqual({});
  });
});

describe('inBikes test', () => {
  it('should add 18% tax to each item in the result array', () => {
    const input = [
      {"BikeId": 101,
            "Manufacturer": "Honda",
            "ModelName": "CBR 1000RR",
            "EngineCC": 300,
            "Colour": "Red",
            "price": 499.99,
            "Ratings": 4.5,
            "ImageUrl": "https://shorturl.at/zLNW1"},
            {
              "BikeId": 102,
              "Manufacturer": "Kawasaki",
              "ModelName": "Ninja ZX-6R",
              "EngineCC": 350,
              "Colour": "Green",
              "price": 699.99,
              "Ratings": 3.8,
              "ImageUrl": "https://shorturl.at/hkyC0"
          }
    ];
    const expectedOutput = [
      {"BikeId": 101,
            "Manufacturer": "Honda",
            "ModelName": "CBR 1000RR",
            "EngineCC": 300,
            "Colour": "Red",
            "price": 589.99,
            "Ratings": 4.5,
            "ImageUrl": "https://shorturl.at/zLNW1"},
            {
              "BikeId": 102,
              "Manufacturer": "Kawasaki",
              "ModelName": "Ninja ZX-6R",
              "EngineCC": 350,
              "Colour": "Green",
              "price": 825.99,
              "Ratings": 3.8,
              "ImageUrl": "https://shorturl.at/hkyC0"
          }
    ];
    const result = inBikes(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = inBikes(invalidData);
    expect(result).toEqual({});
  });
});
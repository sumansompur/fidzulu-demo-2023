const { inFood } = require('../../src/controllers/foodController');
const { irFood } = require('../../src/controllers/foodController');
const { usFood } = require('../../src/controllers/foodController');
const { getFood } = require('../../src/controllers/foodController');
const {getFoodDetails} = require('../../src/models/productModel');
jest.mock('../../src/models/productModel');

describe('usFood test', () => {
  it('should add 8% tax to each item in the result array', () => {
    const input = [
        {
          FoodId: 401,
          FoodName: "Spaghetti",
          Category: "Pasta",
          ShelfLife: 3,
          VegOrNon: 1,
          Price: 49.99,
          Ratings: 4.5,
          ImageUrl: "https://shorturl.at/dwW56"
        },
        {
          FoodId: 402,
          FoodName: "Lays",
          Category: "Chips",
          ShelfLife: 6,
          VegOrNon: 1,
          Price: 29.99,
          Ratings: 3.8,
          ImageUrl: "https://shorturl.at/oxBKZ"
        }
      ];
    const expectedOutput = [
        {
          FoodId: 401,
          FoodName: "Spaghetti",
          Category: "Pasta",
          ShelfLife: 3,
          VegOrNon: 1,
          Price: 53.99,
          Ratings: 4.5,
          ImageUrl: "https://shorturl.at/dwW56"
        },
        {
          FoodId: 402,
          FoodName: "Lays",
          Category: "Chips",
          ShelfLife: 6,
          VegOrNon: 1,
          Price: 32.39,
          Ratings: 3.8,
          ImageUrl: "https://shorturl.at/oxBKZ"
        }
      ];
    const result = usFood(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = usFood(invalidData);
    expect(result).toEqual({});
  });
});

describe('irFood test', () => {
  it('should add 23% tax to each item in the result array', () => {
    const input = [
        {
            FoodId: 401,
            FoodName: "Spaghetti",
            Category: "Pasta",
            ShelfLife: 3,
            VegOrNon: 1,
            Price: 49.99,
            Ratings: 4.5,
            ImageUrl: "https://shorturl.at/dwW56"
          },
          {
            FoodId: 402,
            FoodName: "Lays",
            Category: "Chips",
            ShelfLife: 6,
            VegOrNon: 1,
            Price: 29.99,
            Ratings: 3.8,
            ImageUrl: "https://shorturl.at/oxBKZ"
          }
    ];
    const expectedOutput = [
        {
            FoodId: 401,
            FoodName: "Spaghetti",
            Category: "Pasta",
            ShelfLife: 3,
            VegOrNon: 1,
            Price: 61.49,
            Ratings: 4.5,
            ImageUrl: "https://shorturl.at/dwW56"
          },
          {
            FoodId: 402,
            FoodName: "Lays",
            Category: "Chips",
            ShelfLife: 6,
            VegOrNon: 1,
            Price: 36.89,
            Ratings: 3.8,
            ImageUrl: "https://shorturl.at/oxBKZ"
          }
    ];
    const result = irFood(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = {};
    const result = irFood(invalidData);
    expect(result).toEqual({});
  });
});

describe('inFood test', () => {
  it('should add 18% tax to each item in the result array', () => {
    const input = [
        {
            FoodId: 401,
            FoodName: "Spaghetti",
            Category: "Pasta",
            ShelfLife: 3,
            VegOrNon: 1,
            Price: 49.99,
            Ratings: 4.5,
            ImageUrl: "https://shorturl.at/dwW56"
          },
          {
            FoodId: 402,
            FoodName: "Lays",
            Category: "Chips",
            ShelfLife: 6,
            VegOrNon: 1,
            Price: 29.99,
            Ratings: 3.8,
            ImageUrl: "https://shorturl.at/oxBKZ"
          }
    ];
    const expectedOutput = [
        {
            FoodId: 401,
            FoodName: "Spaghetti",
            Category: "Pasta",
            ShelfLife: 3,
            VegOrNon: 1,
            Price: 58.99,
            Ratings: 4.5,
            ImageUrl: "https://shorturl.at/dwW56"
          },
          {
            FoodId: 402,
            FoodName: "Lays",
            Category: "Chips",
            ShelfLife: 6,
            VegOrNon: 1,
            Price: 35.39,
            Ratings: 3.8,
            ImageUrl: "https://shorturl.at/oxBKZ"
          }
    ];
    const result = inFood(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = {};
    const result = inFood(invalidData);
    expect(result).toEqual({});
  });
});

describe('getFood', () => {
    it('should return a list of food for "US-NC"', async () => {
      // Mock the getFoodDetails function to return some data
      let mockGetFoodDetails =  [{
        FoodId: 401,
        FoodName: "Spaghetti",
        Category: "Pasta",
        ShelfLife: 3,
        VegOrNon: 1,
        Price: 49.99,
        Ratings: 4.5,
        ImageUrl: "https://shorturl.at/dwW56",
      },
      {
          FoodId: 402,
          FoodName: "Lays",
          Category: "Chips",
          ShelfLife: 6,
          VegOrNon: 1,
          Price: 35.39,
          Ratings: 3.8,
          ImageUrl: "https://shorturl.at/oxBKZ"
        }];
      getFoodDetails.mockResolvedValue(mockGetFoodDetails);
      let expectedFoodDetails =[
        {
          FoodId: 401,
          FoodName: "Spaghetti",
          Category: "Pasta",
          ShelfLife: 3,
          VegOrNon: 1,
          Price: 53.99,
          Ratings: 4.5,
          ImageUrl: "https://shorturl.at/dwW56"
        },
        {
          FoodId: 402,
          FoodName: "Lays",
          Category: "Chips",
          ShelfLife: 6,
          VegOrNon: 1,
          Price: 38.22,
          Ratings: 3.8,
          ImageUrl: "https://shorturl.at/oxBKZ"
        }
      ];
      const req = { params: { location: 'US-NC' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
  
      await getFood(req, res);
  
      // Expectations for a successful response
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        success: true,
        message: 'List of Food',
        body: expectedFoodDetails
      });
    });
});

const { inToys } = require('../../src/controllers/toysController');
const { ieToys } = require('../../src/controllers/toysController');
const { usToys } = require('../../src/controllers/toysController');
const { getToys } = require('../../src/controllers/toysController');
const {getToyDetails} = require('../../src/models/productModel');
jest.mock('../../src/models/productModel');


describe('usToys test', () => {
  it('should add 8% tax to each item in the result array', () => {
    const input = [
        {
            ToyId: 601,
            ToyName: "LEGO Castle Set",
            BrandName: "LEGO",
            Category: "Building",
            AppropriateAge: "5-12 years",
            Price: 19.99,
            Ratings: 4.5,
            ImageUrl: "https://shorturl.at/buyC0"
          },
          {
            ToyId: 602,
            ToyName: "Hot Wheels Cars",
            BrandName: "Mattel",
            Category: "Vehicles",
            AppropriateAge: "3+ years",
            Price: 7.99,
            Ratings: 4.2,
            ImageUrl: "https://shorturl.at/eyBU2"
          }
      ];
    const expectedOutput = [
        {
            ToyId: 601,
            ToyName: "LEGO Castle Set",
            BrandName: "LEGO",
            Category: "Building",
            AppropriateAge: "5-12 years",
            Price: 21.59,
            Ratings: 4.5,
            ImageUrl: "https://shorturl.at/buyC0"
          },
          {
            ToyId: 602,
            ToyName: "Hot Wheels Cars",
            BrandName: "Mattel",
            Category: "Vehicles",
            AppropriateAge: "3+ years",
            Price: 8.63,
            Ratings: 4.2,
            ImageUrl: "https://shorturl.at/eyBU2"
          }
      ];
    const result = usToys(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = usToys(invalidData);
    expect(result).toEqual({});
  });
});

describe('ieToys test', () => {
  it('should add 23% tax to each item in the result array', () => {
    const input = [
        {
            ToyId: 601,
            ToyName: "LEGO Castle Set",
            BrandName: "LEGO",
            Category: "Building",
            AppropriateAge: "5-12 years",
            Price: 19.99,
            Ratings: 4.5,
            ImageUrl: "https://shorturl.at/buyC0"
          },
          {
            ToyId: 602,
            ToyName: "Hot Wheels Cars",
            BrandName: "Mattel",
            Category: "Vehicles",
            AppropriateAge: "3+ years",
            Price: 7.99,
            Ratings: 4.2,
            ImageUrl: "https://shorturl.at/eyBU2"
          }
      ];
    const expectedOutput = [
        {
            ToyId: 601,
            ToyName: "LEGO Castle Set",
            BrandName: "LEGO",
            Category: "Building",
            AppropriateAge: "5-12 years",
            Price:  24.59,
            Ratings: 4.5,
            ImageUrl: "https://shorturl.at/buyC0"
          },
          {
            ToyId: 602,
            ToyName: "Hot Wheels Cars",
            BrandName: "Mattel",
            Category: "Vehicles",
            AppropriateAge: "3+ years",
            Price: 9.83,
            Ratings: 4.2,
            ImageUrl: "https://shorturl.at/eyBU2"
          }
      ];
    const result = ieToys(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = {};
    const result = ieToys(invalidData);
    expect(result).toEqual({});
  });
});

describe('inToys test', () => {
  it('should add 18% tax to each item in the result array', () => {
    const input = [
        {
            ToyId: 601,
            ToyName: "LEGO Castle Set",
            BrandName: "LEGO",
            Category: "Building",
            AppropriateAge: "5-12 years",
            Price: 19.99,
            Ratings: 4.5,
            ImageUrl: "https://shorturl.at/buyC0"
          },
          {
            ToyId: 602,
            ToyName: "Hot Wheels Cars",
            BrandName: "Mattel",
            Category: "Vehicles",
            AppropriateAge: "3+ years",
            Price: 7.99,
            Ratings: 4.2,
            ImageUrl: "https://shorturl.at/eyBU2"
          }
      ];
    const expectedOutput = [
        {
            ToyId: 601,
            ToyName: "LEGO Castle Set",
            BrandName: "LEGO",
            Category: "Building",
            AppropriateAge: "5-12 years",
            Price: 23.59,
            Ratings: 4.5,
            ImageUrl: "https://shorturl.at/buyC0"
          },
          {
            ToyId: 602,
            ToyName: "Hot Wheels Cars",
            BrandName: "Mattel",
            Category: "Vehicles",
            AppropriateAge: "3+ years",
            Price: 9.43,
            Ratings: 4.2,
            ImageUrl: "https://shorturl.at/eyBU2"
          }
      ];
    const result = inToys(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = {};
    const result = inToys(invalidData);
    expect(result).toEqual({});
  });
});

describe('getToys', () => {
    it('should return a list of Toys for "US-NC"', async () => {
      // Mock the getToysDetails function to return some data
      let mockGetToysDetails = [
        {
            ToyId: 601,
            ToyName: "LEGO Castle Set",
            BrandName: "LEGO",
            Category: "Building",
            AppropriateAge: "5-12 years",
            Price: 19.99,
            Ratings: 4.5,
            ImageUrl: "https://shorturl.at/buyC0"
          },
          {
            ToyId: 602,
            ToyName: "Hot Wheels Cars",
            BrandName: "Mattel",
            Category: "Vehicles",
            AppropriateAge: "3+ years",
            Price: 7.99,
            Ratings: 4.2,
            ImageUrl: "https://shorturl.at/eyBU2"
          }
      ];
      getToyDetails.mockResolvedValue(mockGetToysDetails);
      let expectedToysDetails =[
        {
            ToyId: 601,
            ToyName: "LEGO Castle Set",
            BrandName: "LEGO",
            Category: "Building",
            AppropriateAge: "5-12 years",
            Price: 21.59,
            Ratings: 4.5,
            ImageUrl: "https://shorturl.at/buyC0"
          },
          {
            ToyId: 602,
            ToyName: "Hot Wheels Cars",
            BrandName: "Mattel",
            Category: "Vehicles",
            AppropriateAge: "3+ years",
            Price: 8.63,
            Ratings: 4.2,
            ImageUrl: "https://shorturl.at/eyBU2"
          }
      ];
      const req = { params: { location: 'US-NC' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      await getToys(req, res);

      // Expectations for a successful response
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        success: true,
        message: 'List of Toys',
        body: expectedToysDetails
      });
    });
});
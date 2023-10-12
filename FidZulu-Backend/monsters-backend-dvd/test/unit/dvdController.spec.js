const { inDvd } = require('../../src/controllers/dvdController');
const { irDvd } = require('../../src/controllers/dvdController');
const { usDvd } = require('../../src/controllers/dvdController');
const { getDvd } = require('../../src/controllers/dvdController');
const {getDvdDetails} = require('../../src/models/productModel');
jest.mock('../../src/models/productModel');

describe('usDvd test', () => {
  it('should add 8% tax to each item in the result array', () => {
    const input =[
        {
        "DvdId": 301,
        "DvdName": "The Matrix",
        "Category": "Science Fiction",
        "Storage": 4.7,
        "Price": 12.99,
        "Ratings": 4.6,
        "ImageUrl": "https://shorturl.at/aqst4"
        },
        {
        "DvdId": 302,
        "DvdName": "Jurassic Park",
        "Category": "Action/ Adventure",
        "Storage": 5.1,
        "Price": 9.99,
        "Ratings": 4.4,
        "ImageUrl": "https://shorturl.at/bpyAY"
        }
      ];
    const expectedOutput =  [
        {
        "DvdId": 301,
        "DvdName": "The Matrix",
        "Category": "Science Fiction",
        "Storage": 4.7,
        "Price": 14.03,
        "Ratings": 4.6,
        "ImageUrl": "https://shorturl.at/aqst4"
        },
        {
        "DvdId": 302,
        "DvdName": "Jurassic Park",
        "Category": "Action/ Adventure",
        "Storage": 5.1,
        "Price": 10.79,
        "Ratings": 4.4,
        "ImageUrl": "https://shorturl.at/bpyAY"
        }
      ];
    const result = usDvd(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = usDvd(invalidData);
    expect(result).toEqual({});
  });
});

describe('irDvd test', () => {
  it('should add 23% tax to each item in the result array', () => {
    const input =[
        {
        "DvdId": 301,
        "DvdName": "The Matrix",
        "Category": "Science Fiction",
        "Storage": 4.7,
        "Price": 12.99,
        "Ratings": 4.6,
        "ImageUrl": "https://shorturl.at/aqst4"
        },
        {
        "DvdId": 302,
        "DvdName": "Jurassic Park",
        "Category": "Action/ Adventure",
        "Storage": 5.1,
        "Price": 9.99,
        "Ratings": 4.4,
        "ImageUrl": "https://shorturl.at/bpyAY"
        }
      ];
    const expectedOutput = [
        {
        "DvdId": 301,
        "DvdName": "The Matrix",
        "Category": "Science Fiction",
        "Storage": 4.7,
        "Price": 15.98,
        "Ratings": 4.6,
        "ImageUrl": "https://shorturl.at/aqst4"
        },
        {
        "DvdId": 302,
        "DvdName": "Jurassic Park",
        "Category": "Action/ Adventure",
        "Storage": 5.1,
        "Price": 12.29,
        "Ratings": 4.4,
        "ImageUrl": "https://shorturl.at/bpyAY"
        }
    ];
    const result = irDvd(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = {};
    const result = irDvd(invalidData);
    expect(result).toEqual({});
  });
});

describe('inDvd test', () => {
  it('should add 18% tax to each item in the result array', () => {
    const input =[
        {
        "DvdId": 301,
        "DvdName": "The Matrix",
        "Category": "Science Fiction",
        "Storage": 4.7,
        "Price": 12.99,
        "Ratings": 4.6,
        "ImageUrl": "https://shorturl.at/aqst4"
        },
        {
        "DvdId": 302,
        "DvdName": "Jurassic Park",
        "Category": "Action/ Adventure",
        "Storage": 5.1,
        "Price": 9.99,
        "Ratings": 4.4,
        "ImageUrl": "https://shorturl.at/bpyAY"
        }
      ];
    const expectedOutput = [
        {
        "DvdId": 301,
        "DvdName": "The Matrix",
        "Category": "Science Fiction",
        "Storage": 4.7,
        "Price": 15.33,
        "Ratings": 4.6,
        "ImageUrl": "https://shorturl.at/aqst4"
        },
        {
        "DvdId": 302,
        "DvdName": "Jurassic Park",
        "Category": "Action/ Adventure",
        "Storage": 5.1,
        "Price": 11.79,
        "Ratings": 4.4,
        "ImageUrl": "https://shorturl.at/bpyAY"
        }
    ];
    const result = inDvd(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = {};
    const result = inDvd(invalidData);
    expect(result).toEqual({});
  });
});

describe('getDvd', () => {
    it('should return a list of dvd for "US-NC"', async () => {
      // Mock the getFoodDetails function to return some data
      let mockGetDvdDetails =  [
        {
        "DvdId": 301,
        "DvdName": "The Matrix",
        "Category": "Science Fiction",
        "Storage": 4.7,
        "Price": 14.03,
        "Ratings": 4.6,
        "ImageUrl": "https://shorturl.at/aqst4"
        },
        {
        "DvdId": 302,
        "DvdName": "Jurassic Park",
        "Category": "Action/ Adventure",
        "Storage": 5.1,
        "Price": 10.79,
        "Ratings": 4.4,
        "ImageUrl": "https://shorturl.at/bpyAY"
    }];
      getDvdDetails.mockResolvedValue(mockGetDvdDetails);
      let expectedDvdDetails = [
        {
        "DvdId": 301,
        "DvdName": "The Matrix",
        "Category": "Science Fiction",
        "Storage": 4.7,
        "Price": 15.15,
        "Ratings": 4.6,
        "ImageUrl": "https://shorturl.at/aqst4"
        },
        {
        "DvdId": 302,
        "DvdName": "Jurassic Park",
        "Category": "Action/ Adventure",
        "Storage": 5.1,
        "Price": 11.65,
        "Ratings": 4.4,
        "ImageUrl": "https://shorturl.at/bpyAY"
    }];
      const req = { params: { location: 'US-NC' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
  
      await getDvd(req, res);
  
      // Expectations for a successful response
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        success: true,
        message: 'List of Dvd',
        body: expectedDvdDetails
      });
    });
});

const { inBook } = require('../../src/controllers/bookController');
const { irBook } = require('../../src/controllers/bookController');
const { usBook } = require('../../src/controllers/bookController');
const { getBook } = require('../../src/controllers/bookController');

const {getBookDetails} = require('../../src/models/productModel');
jest.mock('../../src/models/productModel');

describe('usBook test', () => {
  it('should add 8% tax to each item in the result array', () => {
    const input =
      [
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
        },
        {
          "BookId": 203,
          "BookName": "The Da Vinci Code",
          "Genre": "Mystery",
          "Author": "Dan Brown",
          "Publisher": "Vintage",
          "Price": 10.61,
          "Ratings": 4.2,
          "ImageUrl": "https://shorturl.at/blDHX"
        },
        {
          "BookId": 204,
          "BookName": "Harry Potter and the Order of the Phoenix",
          "Genre": "Fantasy",
          "Author": "J.K. Rowling",
          "Publisher": "Scholastic",
          "Price": 17.69,
          "Ratings": 4.7,
          "ImageUrl": "https://shorturl.at/ivxSX"
        },
        {
          "BookId": 205,
          "BookName": "The Great Gatsby",
          "Genre": "Classic",
          "Author": "F. Scott Fitzgerald",
          "Publisher": "Penguin",
          "Price": 9.43,
          "Ratings": 4,
          "ImageUrl": "https://shorturl.at/biQX4"
        }
      ];
    const expectedOutput = [
      {
        "BookId": 201,
        "BookName": "A Game of Thrones",
        "Genre": "Fantasy",
        "Author": "George R.R. Martin",
        "Publisher": "Bantam",
        "Price": 12.73,
        "Ratings": 4.5,
        "ImageUrl": "https://shorturl.at/jyN45"
      },
      {
        "BookId": 202,
        "BookName": "To kill a Mockingbird",
        "Genre": "Fiction",
        "Author": "Harper Lee",
        "Publisher": "Harper Perennial",
        "Price": 16.56,
        "Ratings": 4.8,
        "ImageUrl": "https://shorturl.at/iovDL"
      },
      {
        "BookId": 203,
        "BookName": "The Da Vinci Code",
        "Genre": "Mystery",
        "Author": "Dan Brown",
        "Publisher": "Vintage",
        "Price": 11.46,
        "Ratings": 4.2,
        "ImageUrl": "https://shorturl.at/blDHX"
      },
      {
        "BookId": 204,
        "BookName": "Harry Potter and the Order of the Phoenix",
        "Genre": "Fantasy",
        "Author": "J.K. Rowling",
        "Publisher": "Scholastic",
        "Price": 19.11,
        "Ratings": 4.7,
        "ImageUrl": "https://shorturl.at/ivxSX"
      },
      {
        "BookId": 205,
        "BookName": "The Great Gatsby",
        "Genre": "Classic",
        "Author": "F. Scott Fitzgerald",
        "Publisher": "Penguin",
        "Price": 10.18,
        "Ratings": 4,
        "ImageUrl": "https://shorturl.at/biQX4"
      }
    ];
    const result = usBook(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = usBook(invalidData);
    expect(result).toEqual({});
  });
});

describe('irBook test', () => {
  it('should add 23% tax to each item in the result array', () => {
    const input =
      [
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
        },
        {
          "BookId": 203,
          "BookName": "The Da Vinci Code",
          "Genre": "Mystery",
          "Author": "Dan Brown",
          "Publisher": "Vintage",
          "Price": 10.61,
          "Ratings": 4.2,
          "ImageUrl": "https://shorturl.at/blDHX"
        },
        {
          "BookId": 204,
          "BookName": "Harry Potter and the Order of the Phoenix",
          "Genre": "Fantasy",
          "Author": "J.K. Rowling",
          "Publisher": "Scholastic",
          "Price": 17.69,
          "Ratings": 4.7,
          "ImageUrl": "https://shorturl.at/ivxSX"
        },
        {
          "BookId": 205,
          "BookName": "The Great Gatsby",
          "Genre": "Classic",
          "Author": "F. Scott Fitzgerald",
          "Publisher": "Penguin",
          "Price": 9.43,
          "Ratings": 4,
          "ImageUrl": "https://shorturl.at/biQX4"
        }
      ];
    const expectedOutput = [
      {
        "BookId": 201,
        "BookName": "A Game of Thrones",
        "Genre": "Fantasy",
        "Author": "George R.R. Martin",
        "Publisher": "Bantam",
        "Price": 14.5,
        "Ratings": 4.5,
        "ImageUrl": "https://shorturl.at/jyN45"
      },
      {
        "BookId": 202,
        "BookName": "To kill a Mockingbird",
        "Genre": "Fiction",
        "Author": "Harper Lee",
        "Publisher": "Harper Perennial",
        "Price": 18.86,
        "Ratings": 4.8,
        "ImageUrl": "https://shorturl.at/iovDL"
      },
      {
        "BookId": 203,
        "BookName": "The Da Vinci Code",
        "Genre": "Mystery",
        "Author": "Dan Brown",
        "Publisher": "Vintage",
        "Price": 13.05,
        "Ratings": 4.2,
        "ImageUrl": "https://shorturl.at/blDHX"
      },
      {
        "BookId": 204,
        "BookName": "Harry Potter and the Order of the Phoenix",
        "Genre": "Fantasy",
        "Author": "J.K. Rowling",
        "Publisher": "Scholastic",
        "Price": 21.76,
        "Ratings": 4.7,
        "ImageUrl": "https://shorturl.at/ivxSX"
      },
      {
        "BookId": 205,
        "BookName": "The Great Gatsby",
        "Genre": "Classic",
        "Author": "F. Scott Fitzgerald",
        "Publisher": "Penguin",
        "Price": 11.6,
        "Ratings": 4,
        "ImageUrl": "https://shorturl.at/biQX4"
      }
    ];
    const result = irBook(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = irBook(invalidData);
    expect(result).toEqual({});
  });
});

describe('inBook test', () => {
  it('should add 18% tax to each item in the result array', () => {
    const input =
      [
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
        },
        {
          "BookId": 203,
          "BookName": "The Da Vinci Code",
          "Genre": "Mystery",
          "Author": "Dan Brown",
          "Publisher": "Vintage",
          "Price": 10.61,
          "Ratings": 4.2,
          "ImageUrl": "https://shorturl.at/blDHX"
        },
        {
          "BookId": 204,
          "BookName": "Harry Potter and the Order of the Phoenix",
          "Genre": "Fantasy",
          "Author": "J.K. Rowling",
          "Publisher": "Scholastic",
          "Price": 17.69,
          "Ratings": 4.7,
          "ImageUrl": "https://shorturl.at/ivxSX"
        },
        {
          "BookId": 205,
          "BookName": "The Great Gatsby",
          "Genre": "Classic",
          "Author": "F. Scott Fitzgerald",
          "Publisher": "Penguin",
          "Price": 9.43,
          "Ratings": 4,
          "ImageUrl": "https://shorturl.at/biQX4"
        }
      ];
    const expectedOutput = [
      {
        "BookId": 201,
        "BookName": "A Game of Thrones",
        "Genre": "Fantasy",
        "Author": "George R.R. Martin",
        "Publisher": "Bantam",
        "Price": 13.91,
        "Ratings": 4.5,
        "ImageUrl": "https://shorturl.at/jyN45"
      },
      {
        "BookId": 202,
        "BookName": "To kill a Mockingbird",
        "Genre": "Fiction",
        "Author": "Harper Lee",
        "Publisher": "Harper Perennial",
        "Price": 18.09,
        "Ratings": 4.8,
        "ImageUrl": "https://shorturl.at/iovDL"
      },
      {
        "BookId": 203,
        "BookName": "The Da Vinci Code",
        "Genre": "Mystery",
        "Author": "Dan Brown",
        "Publisher": "Vintage",
        "Price": 12.52,
        "Ratings": 4.2,
        "ImageUrl": "https://shorturl.at/blDHX"
      },
      {
        "BookId": 204,
        "BookName": "Harry Potter and the Order of the Phoenix",
        "Genre": "Fantasy",
        "Author": "J.K. Rowling",
        "Publisher": "Scholastic",
        "Price": 20.87,
        "Ratings": 4.7,
        "ImageUrl": "https://shorturl.at/ivxSX"
      },
      {
        "BookId": 205,
        "BookName": "The Great Gatsby",
        "Genre": "Classic",
        "Author": "F. Scott Fitzgerald",
        "Publisher": "Penguin",
        "Price": 11.13,
        "Ratings": 4,
        "ImageUrl": "https://shorturl.at/biQX4"
      }
    ];
    const result = inBook(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = inBook(invalidData);
    expect(result).toEqual({});
  });
});

describe('getBook', () => {
  it('should return a list of book for "US-NC"', async () => {
    let mockGetBookDetails = [
      {
        "BookId": 201,
        "BookName": "A Game of Thrones",
        "Genre": "Fantasy",
        "Author": "George R.R. Martin",
        "Publisher": "Bantam",
        "Price": 10.79,
        "Ratings": 4.5,
        "ImageUrl": "https://shorturl.at/jyN45"
      },
      {
        "BookId": 202,
        "BookName": "To kill a Mockingbird",
        "Genre": "Fiction",
        "Author": "Harper Lee",
        "Publisher": "Harper Perennial",
        "Price": 14.03,
        "Ratings": 4.8,
        "ImageUrl": "https://shorturl.at/iovDL"
      }
    ];
    getBookDetails.mockResolvedValue(mockGetBookDetails);
    let expectedBookDetails = [
      {
        "BookId": 201,
        "BookName": "A Game of Thrones",
        "Genre": "Fantasy",
        "Author": "George R.R. Martin",
        "Publisher": "Bantam",
        "Price": 11.65,
        "Ratings": 4.5,
        "ImageUrl": "https://shorturl.at/jyN45"
      },
      {
        "BookId": 202,
        "BookName": "To kill a Mockingbird",
        "Genre": "Fiction",
        "Author": "Harper Lee",
        "Publisher": "Harper Perennial",
        "Price": 15.15,
        "Ratings": 4.8,
        "ImageUrl": "https://shorturl.at/iovDL"
      }
    ];
    const req = { params: { location: 'US-NC' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await getBook(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      success: true,
      message: 'List of Book',
      body: expectedBookDetails
    });
  });
});

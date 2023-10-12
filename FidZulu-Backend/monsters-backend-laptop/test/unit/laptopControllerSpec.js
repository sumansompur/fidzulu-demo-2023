const { inLaptop, usLaptop, irLaptop, getLaptop } = require('../../src/controllers/laptopController');
const { getLaptopDetails } = require('../../src/models/productModel');
jest.mock('../../src/models/productModel');

describe('usLaptop test', () => {
  it('should add 8% tax to each item in the result array', () => {
    const input =
    [
        {
        "LaptopId": 501,
        "BrandName": "Dell",
        "ModelName": "XPS 13",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "Intel Iris Xe",
        "VRAM": null,
        "Storage": 512,
        "ScreenSize": 13.3,
        "Colour": "Silver",
        "Price": 799.99,
        "Ratings": 4.5,
        "ImageUrl": "https://shorturl.at/jvG02"
        },
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
        "Price": 999.99,
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
        "Price": 799.99,
        "Ratings": 4.9,
        "ImageUrl": "https://shorturl.at/hkqCG"
        },
        {
        "LaptopId": 504,
        "BrandName": "Asus",
        "ModelName": "ROG Strix G15",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "NVIDIA GeForce RTX 3060",
        "VRAM": {},
        "Storage": 512,
        "ScreenSize": 15.6,
        "Colour": "Blue",
        "Price": 899.99,
        "Ratings": 4.8,
        "ImageUrl": "https://shorturl.at/hqHY2"
        },
        {
        "LaptopId": 505,
        "BrandName": "Apple",
        "ModelName": "MacBook Pro",
        "CPU": "Apple M1",
        "RAM": 8,
        "GPU": "M1 integrated",
        "VRAM": null,
        "Storage": 512,
        "ScreenSize": 15.6,
        "Colour": "Silver",
        "Price": 1499.99,
        "Ratings": 4.2,
        "ImageUrl": "https://shorturl.at/xEUXY"
        },
        {
        "LaptopId": 506,
        "BrandName": "Acer",
        "ModelName": "Nitro 7",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "NVIDIA GeForce GTX 1660Ti",
        "VRAM": {},
        "Storage": 256,
        "ScreenSize": 15.6,
        "Colour": "Black",
        "Price": 699.99,
        "Ratings": 3.7,
        "ImageUrl": "https://shorturl.at/wABU9"
        }
        ]

    const expectedOutput = [
        {
            "LaptopId": 501,
            "BrandName": "Dell",
            "ModelName": "XPS 13",
            "CPU": "Intel Core i7",
            "RAM": 16,
            "GPU": "Intel Iris Xe",
            "VRAM": null,
            "Storage": 512,
            "ScreenSize": 13.3,
            "Colour": "Silver",
            "Price": 863.99,
            "Ratings": 4.5,
            "ImageUrl": "https://shorturl.at/jvG02"
            },
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
            "Price": 1079.99,
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
            "Price": 863.99,
            "Ratings": 4.9,
            "ImageUrl": "https://shorturl.at/hkqCG"
            },
            {
            "LaptopId": 504,
            "BrandName": "Asus",
            "ModelName": "ROG Strix G15",
            "CPU": "Intel Core i7",
            "RAM": 16,
            "GPU": "NVIDIA GeForce RTX 3060",
            "VRAM": {},
            "Storage": 512,
            "ScreenSize": 15.6,
            "Colour": "Blue",
            "Price": 971.99,
            "Ratings": 4.8,
            "ImageUrl": "https://shorturl.at/hqHY2"
            },
            {
            "LaptopId": 505,
            "BrandName": "Apple",
            "ModelName": "MacBook Pro",
            "CPU": "Apple M1",
            "RAM": 8,
            "GPU": "M1 integrated",
            "VRAM": null,
            "Storage": 512,
            "ScreenSize": 15.6,
            "Colour": "Silver",
            "Price": 1619.99,
            "Ratings": 4.2,
            "ImageUrl": "https://shorturl.at/xEUXY"
            },
            {
            "LaptopId": 506,
            "BrandName": "Acer",
            "ModelName": "Nitro 7",
            "CPU": "Intel Core i7",
            "RAM": 16,
            "GPU": "NVIDIA GeForce GTX 1660Ti",
            "VRAM": {},
            "Storage": 256,
            "ScreenSize": 15.6,
            "Colour": "Black",
            "Price": 755.99,
            "Ratings": 3.7,
            "ImageUrl": "https://shorturl.at/wABU9"
            }
      ]

    const result = usLaptop(input);
    expect(result).toEqual(expectedOutput);
  });

 

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = usLaptop(invalidData);
    expect(result).toEqual({});
  });
});


describe('irLaptop test', () => {
  it('should add 23% tax to each item in the result array', () => {
    const input =[
        {
        "LaptopId": 501,
        "BrandName": "Dell",
        "ModelName": "XPS 13",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "Intel Iris Xe",
        "VRAM": null,
        "Storage": 512,
        "ScreenSize": 13.3,
        "Colour": "Silver",
        "Price": 799.99,
        "Ratings": 4.5,
        "ImageUrl": "https://shorturl.at/jvG02"
        },
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
        "Price": 999.99,
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
        "Price": 799.99,
        "Ratings": 4.9,
        "ImageUrl": "https://shorturl.at/hkqCG"
        },
        {
        "LaptopId": 504,
        "BrandName": "Asus",
        "ModelName": "ROG Strix G15",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "NVIDIA GeForce RTX 3060",
        "VRAM": {},
        "Storage": 512,
        "ScreenSize": 15.6,
        "Colour": "Blue",
        "Price": 899.99,
        "Ratings": 4.8,
        "ImageUrl": "https://shorturl.at/hqHY2"
        },
        {
        "LaptopId": 505,
        "BrandName": "Apple",
        "ModelName": "MacBook Pro",
        "CPU": "Apple M1",
        "RAM": 8,
        "GPU": "M1 integrated",
        "VRAM": null,
        "Storage": 512,
        "ScreenSize": 15.6,
        "Colour": "Silver",
        "Price": 1499.99,
        "Ratings": 4.2,
        "ImageUrl": "https://shorturl.at/xEUXY"
        },
        {
        "LaptopId": 506,
        "BrandName": "Acer",
        "ModelName": "Nitro 7",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "NVIDIA GeForce GTX 1660Ti",
        "VRAM": {},
        "Storage": 256,
        "ScreenSize": 15.6,
        "Colour": "Black",
        "Price": 699.99,
        "Ratings": 3.7,
        "ImageUrl": "https://shorturl.at/wABU9"
        }
        ];
    const expectedOutput = [
        {
        "LaptopId": 501,
        "BrandName": "Dell",
        "ModelName": "XPS 13",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "Intel Iris Xe",
        "VRAM": null,
        "Storage": 512,
        "ScreenSize": 13.3,
        "Colour": "Silver",
        "Price": 983.99,
        "Ratings": 4.5,
        "ImageUrl": "https://shorturl.at/jvG02"
        },
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
        "Price": 1229.99,
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
        "Price": 983.99,
        "Ratings": 4.9,
        "ImageUrl": "https://shorturl.at/hkqCG"
        },
        {
        "LaptopId": 504,
        "BrandName": "Asus",
        "ModelName": "ROG Strix G15",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "NVIDIA GeForce RTX 3060",
        "VRAM": {},
        "Storage": 512,
        "ScreenSize": 15.6,
        "Colour": "Blue",
        "Price": 1106.99,
        "Ratings": 4.8,
        "ImageUrl": "https://shorturl.at/hqHY2"
        },
        {
        "LaptopId": 505,
        "BrandName": "Apple",
        "ModelName": "MacBook Pro",
        "CPU": "Apple M1",
        "RAM": 8,
        "GPU": "M1 integrated",
        "VRAM": null,
        "Storage": 512,
        "ScreenSize": 15.6,
        "Colour": "Silver",
        "Price": 1844.99,
        "Ratings": 4.2,
        "ImageUrl": "https://shorturl.at/xEUXY"
        },
        {
        "LaptopId": 506,
        "BrandName": "Acer",
        "ModelName": "Nitro 7",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "NVIDIA GeForce GTX 1660Ti",
        "VRAM": {},
        "Storage": 256,
        "ScreenSize": 15.6,
        "Colour": "Black",
        "Price": 860.99,
        "Ratings": 3.7,
        "ImageUrl": "https://shorturl.at/wABU9"
        }
        ];
    const result = irLaptop(input);
    expect(result).toEqual(expectedOutput);
  });

 

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = irLaptop(invalidData);
    expect(result).toEqual({});
  });
});
 

describe('inLaptop test', () => {
  it('should add 18% tax to each item in the result array', () => {
    const input = [
        {
        "LaptopId": 501,
        "BrandName": "Dell",
        "ModelName": "XPS 13",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "Intel Iris Xe",
        "VRAM": null,
        "Storage": 512,
        "ScreenSize": 13.3,
        "Colour": "Silver",
        "Price": 799.99,
        "Ratings": 4.5,
        "ImageUrl": "https://shorturl.at/jvG02"
        },
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
        "Price": 999.99,
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
        "Price": 799.99,
        "Ratings": 4.9,
        "ImageUrl": "https://shorturl.at/hkqCG"
        },
        {
        "LaptopId": 504,
        "BrandName": "Asus",
        "ModelName": "ROG Strix G15",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "NVIDIA GeForce RTX 3060",
        "VRAM": {},
        "Storage": 512,
        "ScreenSize": 15.6,
        "Colour": "Blue",
        "Price": 899.99,
        "Ratings": 4.8,
        "ImageUrl": "https://shorturl.at/hqHY2"
        },
        {
        "LaptopId": 505,
        "BrandName": "Apple",
        "ModelName": "MacBook Pro",
        "CPU": "Apple M1",
        "RAM": 8,
        "GPU": "M1 integrated",
        "VRAM": null,
        "Storage": 512,
        "ScreenSize": 15.6,
        "Colour": "Silver",
        "Price": 1499.99,
        "Ratings": 4.2,
        "ImageUrl": "https://shorturl.at/xEUXY"
        },
        {
        "LaptopId": 506,
        "BrandName": "Acer",
        "ModelName": "Nitro 7",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "NVIDIA GeForce GTX 1660Ti",
        "VRAM": {},
        "Storage": 256,
        "ScreenSize": 15.6,
        "Colour": "Black",
        "Price": 699.99,
        "Ratings": 3.7,
        "ImageUrl": "https://shorturl.at/wABU9"
        }
        ];
    const expectedOutput = [
        {
        "LaptopId": 501,
        "BrandName": "Dell",
        "ModelName": "XPS 13",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "Intel Iris Xe",
        "VRAM": null,
        "Storage": 512,
        "ScreenSize": 13.3,
        "Colour": "Silver",
        "Price": 943.99,
        "Ratings": 4.5,
        "ImageUrl": "https://shorturl.at/jvG02"
        },
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
        {
        "LaptopId": 504,
        "BrandName": "Asus",
        "ModelName": "ROG Strix G15",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "NVIDIA GeForce RTX 3060",
        "VRAM": {},
        "Storage": 512,
        "ScreenSize": 15.6,
        "Colour": "Blue",
        "Price": 1061.99,
        "Ratings": 4.8,
        "ImageUrl": "https://shorturl.at/hqHY2"
        },
        {
        "LaptopId": 505,
        "BrandName": "Apple",
        "ModelName": "MacBook Pro",
        "CPU": "Apple M1",
        "RAM": 8,
        "GPU": "M1 integrated",
        "VRAM": null,
        "Storage": 512,
        "ScreenSize": 15.6,
        "Colour": "Silver",
        "Price": 1769.99,
        "Ratings": 4.2,
        "ImageUrl": "https://shorturl.at/xEUXY"
        },
        {
        "LaptopId": 506,
        "BrandName": "Acer",
        "ModelName": "Nitro 7",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "NVIDIA GeForce GTX 1660Ti",
        "VRAM": {},
        "Storage": 256,
        "ScreenSize": 15.6,
        "Colour": "Black",
        "Price": 825.99,
        "Ratings": 3.7,
        "ImageUrl": "https://shorturl.at/wABU9"
        }
        ];
    const result = inLaptop(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = usLaptop(invalidData);
    expect(result).toEqual({});
  });

  describe('getLaptop', () => {
    it('should return a list of laptop for "US-NC"', async () => {
      // Mock the getLaptopDetails function to return some data
      let mockGetLaptopDetails =  [{
        "LaptopId": 501,
        "BrandName": "Dell",
        "ModelName": "XPS 13",
        "CPU": "Intel Core i7",
        "RAM": 16,
        "GPU": "Intel Iris Xe",
        "VRAM": null,
        "Storage": 512,
        "ScreenSize": 13.3,
        "Colour": "Silver",
        "Price": 799.99,
        "Ratings": 4.5,
        "ImageUrl": "https://shorturl.at/jvG02"
        },
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
        "Price": 999.99,
        "Ratings": 3.8,
        "ImageUrl": "https://shorturl.at/apwY0"
        }];
      getLaptopDetails.mockResolvedValue(mockGetLaptopDetails);
      let expectedLaptopDetails =[
        {
            "LaptopId": 501,
            "BrandName": "Dell",
            "ModelName": "XPS 13",
            "CPU": "Intel Core i7",
            "RAM": 16,
            "GPU": "Intel Iris Xe",
            "VRAM": null,
            "Storage": 512,
            "ScreenSize": 13.3,
            "Colour": "Silver",
            "Price": 863.99,
            "Ratings": 4.5,
            "ImageUrl": "https://shorturl.at/jvG02"
            },
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
            "Price": 1079.99,
            "Ratings": 3.8,
            "ImageUrl": "https://shorturl.at/apwY0"
            }
      ];
      const req = { params: { location: 'US-NC' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
  
      await getLaptop(req, res);
  
      // Expectations for a successful response
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        success: true,
        message: 'List of Laptops',
        body: expectedLaptopDetails
      });
    });
});

});
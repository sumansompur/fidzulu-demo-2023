const request = require('supertest');
const express = require('express');
const axios = require('axios');
const toyController = require('../src/controllers/toy');

jest.mock('axios');
const app = express();
app.use('/', toyController);

const mockResponse = {
    "0": [601, "LEGO Castle Set", "LEGO", "Building", "5-12 years", 23.59, 4.5, "https://shorturl.at/buyC0"],
    "1": [602, "Hot Wheels Cars", "Mattel", "Vehicles", "3+ years", 9.43, 4.2, "https://shorturl.at/eyBU2"],
    "2": [603, "Play-Doh Kit", "Hasbro", "Arts and Crafts", "2+ years", 11.79, 4.7, "https://shorturl.at/hiyS5"],
    "3": [604, "Transformers Figure", "Hasbro", "Action Figures", "5-12 years", 35.39, 4.5, "https://shorturl.at/ntvLT"],
    "4": [605, "Remote Control Drone", "DJI", "Electronics", "14+ years", 117.99, 4.7, "https://shorturl.at/cuJ49"],
    "5": [606, "Board Game Set", "Hasbro", "Board Games", "8+ years", 58.99, 4.8, "https://shorturl.at/bmpIV"],
    "success": true,
    "message": "List of Toys"
  };
  

describe('GET /all-toy', () => {
    it('should return toy data for a valid location', async () => {
      // Mock Axios response
      axios.get.mockResolvedValue({ data: { success: true, message: 'mocked toy data' } });
      const response = await request(app).get('/all/US-NC');
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toEqual('mocked toy data');
    });

   it('should return 404 for an invalid location', async () => {
        const response = await request(app).get('/all/INVALID');
        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('error');
        expect(response.body).toHaveProperty('detail');
      });

    it('should handle Axios error gracefully', async () => {
        // Mock Axios error
        axios.get.mockRejectedValue(new Error('Axios error'));
        const response = await request(app).get('/all/IN');
        expect(response.statusCode).toBe(500);
        expect(response.body).toHaveProperty('error');
        expect(response.body).toHaveProperty('detail');
      });
});

describe('GET /toy-team', () => {
    it('should return toy team data', async () => {
      // Mock Axios response
      axios.get.mockResolvedValue({ data: { success: true, message: 'mocked toy team data' } });
      const response = await request(app).get('/teams');
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toEqual('mocked toy team data');
    });
  
    it('should handle Axios error gracefully', async () => {
      // Mock Axios error
      axios.get.mockRejectedValue(new Error('Axios error'));
      const response = await request(app).get('/teams');
      expect(response.statusCode).toBe(500);
      expect(response.body).toHaveProperty('error');
      expect(response.body).toHaveProperty('detail');
    });

    it("Returns correct response on valid GET request to toy endpoint", async () => {
        mockToys = [
            {
                "0": [
                601,
                "LEGO Castle Set",
                "LEGO",
                "Building",
                "5-12 years",
                23.59,
                4.5,
                "https://shorturl.at/buyC0"
                ],
                "1": [
                602,
                "Hot Wheels Cars",
                "Mattel",
                "Vehicles",
                "3+ years",
                9.43,
                4.2,
                "https://shorturl.at/eyBU2"
                ],
                "2": [
                603,
                "Play-Doh Kit",
                "Hasbro",
                "Arts and Crafts",
                "2+ years",
                11.79,
                4.7,
                "https://shorturl.at/hiyS5"
                ],
                "3": [
                604,
                "Transformers Figure",
                "Hasbro",
                "Action Figures",
                "5-12 years",
                35.39,
                4.5,
                "https://shorturl.at/ntvLT"
                ],
                "4": [
                605,
                "Remote Control Drone",
                "DJI",
                "Electronics",
                "14+ years",
                117.99,
                4.7,
                "https://shorturl.at/cuJ49"
                ],
                "5": [
                606,
                "Board Game Set",
                "Hasbro",
                "Board Games",
                "8+ years",
                58.99,
                4.8,
                "https://shorturl.at/bmpIV"
                ],
                "success": true,
                "message": "List of Food"
                }
        ];
        axios.get.mockResolvedValue({ data: {success: true, message: mockToys} });
        const response = await request(app).get("/all/IN");
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toStrictEqual(mockToys);
    });

    it('should return the correct JSON response', async () => {
        const response = await request(app).get('/classA/toys/all/IN').set('Host', 'localhost:3021');
        expect(response.statusCode).toBe(404);
    });
  });

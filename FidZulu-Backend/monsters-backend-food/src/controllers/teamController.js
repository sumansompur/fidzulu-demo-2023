const fs = require('fs');
const path = require('path');
const response = require('../configs/response');

const getTeam = async (req, res) => {
  try {
    // Read data from the static JSON file
    const filePath = path.join(__dirname, 'teams.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const teamData = JSON.parse(jsonData);

    if (teamData.length) {
      return response(res, 'List of Food', 200, true, teamData);
    } else {
      return response(res, 'There are no items on the list', 400, false);
    }
  } catch (err) {
    return response(res, 'Internal Server Error', 500, false, { error: err.message });
  }
};

exports.getTeam = getTeam;
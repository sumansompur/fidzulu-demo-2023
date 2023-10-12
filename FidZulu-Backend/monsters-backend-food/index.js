require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const foodRouter = require('./src/routes/foodRoute');
const teamsRouter = require('./src/routes/teamsRoute')
const connection = require("./src/configs/db");

const app = express();
const port = process.env.PORT || 3032;
// connection.getConnection();

app.use(bodyParser.json());
app.use(cors());
app.use(foodRouter);
app.use(teamsRouter);
app.get('/', foodRouter);
app.get('/',teamsRouter);
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const laptopRouter = require('./src/routes/laptopRoute');
const connection = require("./src/configs/db");
const teamsRouter = require('./src/routes/teamsRoute');

const app = express();
const laptopPort = process.env.LAPTOP_PORT;
connection.getConnection();

app.use(bodyParser.json());
app.use(cors());

app.use(laptopRouter);
app.use(teamsRouter);

app.get('/', laptopRouter);
app.get('/',teamsRouter);

app.listen(laptopPort, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${laptopPort}`);
});

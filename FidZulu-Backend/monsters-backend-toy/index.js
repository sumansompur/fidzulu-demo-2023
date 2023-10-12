require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const toysRouter = require('./src/routes/toysRoute');
const teamsRouter=require('./src/routes/teamsRoute')
const connection = require("./src/configs/db");

const app = express();
const port = process.env.TOY_PORT;
connection.getConnection();

app.use(bodyParser.json());
app.use(cors());
app.use(toysRouter);
app.use(teamsRouter);

app.get('/', toysRouter);
app.get('/',teamsRouter);


app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

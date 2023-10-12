require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const booksRouter = require('./src/routes/booksRoute');
const connection = require("./src/configs/db");
const teamsRouter = require('./src/routes/teamsRoute');
const app = express();
const port = process.env.BOOK_PORT;
connection.getConnection();

app.use(bodyParser.json());
app.use(cors());
app.use(booksRouter);
app.use(teamsRouter);
// app.get('/', foodRouter);
app.get('/',booksRouter);
app.get('/',teamsRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

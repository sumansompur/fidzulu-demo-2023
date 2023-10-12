// const db = require('./db');
const oracledb = require('oracledb');
const user=process.env.USER;
const password=process.env.PASSWORD;
const string=process.env.CONNECTION_STRING;


module.exports = async (query, data = '') => {
  const connection = await oracledb.getConnection({ 
      user: user, 
      password: password, 
      connectionString: string
  }).then(console.log("connected successfully"));

  return (await connection.execute(query)).rows;
};
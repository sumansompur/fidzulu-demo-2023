const oracledb = require('oracledb');
const { DB_USER, DB_PASSWORD, DB_CONNECT_STRING } = process.env;

// async function connectToOracle() {
//   try {
//     // Create a connection pool
//     await oracledb.createPool({
//       user: DB_USER,
//       password: DB_PASSWORD,
//       connectString: DB_CONNECT_STRING, // The Oracle Database connection string
//     });

//     // Get a connection from the pool
//     const connection = await oracledb.getConnection();

//     // You can perform database operations using the connection here

//     // Release the connection back to the pool when done
//     await connection.close();
//   } catch (error) {
//     console.error('Error connecting to Oracle:', error);
//   }
// }

const oracleXeConnString = `
  (DESCRIPTION =
    (ADDRESS = (PROTOCOL = TCP)(HOST = LOCALHOST)(PORT = 1521))
    (CONNECT_DATA =
      (SERVER = DEDICATED)
      (SERVICE_NAME = XEPDB1)
    )
  )
`;

async function getConnection() {
  const connection = await oracledb.getConnection({ 
      user: "scott", 
      password: "TIGER", 
      connectionString: oracleXeConnString
  }).then(console.log("connected successfully"));
  return connection;
}

// Call the function to establish a connection

module.exports = {
  getConnection
};

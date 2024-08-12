// dbConfig.js
const sql = require("mssql");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER, // Hostname without port
  port: parseInt(process.env.DB_PORT, 10), // Port number
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // Use encryption
    enableArithAbort: true,
  },
};

const cred =
  "jdbc:sqlserver://hcfhirplus.database.windows.net:1433;database=HCFhirPlus;user=hcfhirplus@hcfhirplus;password=hcfhirplus@123;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;";

const poolPromise = new sql.ConnectionPool(cred)
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));

module.exports = {
  sql,
  poolPromise,
};

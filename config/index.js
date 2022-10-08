require("dotenv").config();

const config = {
  host: process.env.HOST || 'http://localhost',
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL,
};

module.exports = { config };
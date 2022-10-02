require("dotenv").config();

const config = {
  dbPassword: process.env.DB_PASS,
  dbUser: process.env.DB_USER,
};

module.exports = { config };
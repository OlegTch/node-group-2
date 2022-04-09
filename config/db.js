const { connect } = require("mongoose");
const { APP_ERROR_CODES } = require("../backend/libs");
const connectDB = async () => {
  try {
    const db = await connect(process.env.MONGO_DB_URI);
    console.log(
      `mongooDB is connected on port: ${db.connection.port}, db name: ${db.connection.name}, on host: ${db.connection.host} `
        .green.italic.bold
    );
  } catch (error) {
    console.log(error.message, APP_ERROR_CODES.DB_CONNECTIONS_ERRORS);
    process.exit(APP_ERROR_CODES.DB_CONNECTIONS_ERRORS);
  }
};
// console.log(APP_ERROR_CODES);
module.exports = connectDB;

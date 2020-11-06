const mongose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongose
      .connect(process.env.LOCAL_DB, {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database is connected successfully");
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnection();


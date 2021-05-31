const { DBURL, PORT } = require("./environment");
const mongoose = require("mongoose");

const connectDB = new Promise((resolve, reject) => {
  try {
    mongoose.connect(DBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`::: Database connection successful on url ${DBURL} :::`);
    resolve(PORT);
  } catch (error) {
    console.error(error);
    reject(error);
  }
});

module.exports = connectDB;

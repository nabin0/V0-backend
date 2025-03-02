const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("Db Connected!!!");

  return mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    });
};

module.exports = connectDB;

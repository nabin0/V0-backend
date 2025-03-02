const mongoose = require("mongoose");


const connectDB = (uri) => {
    console.log("Db Connected!!!");
    
  return mongoose.connect(uri, {
  });
};

module.exports = connectDB;

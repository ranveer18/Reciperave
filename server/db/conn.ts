const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = (url:any) => {
  return mongoose.connect(url);
};

module.exports = connectDB;

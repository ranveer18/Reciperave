const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDb = (url:any) => {
  return mongoose.connect(url);
};

module.exports = connectDb;

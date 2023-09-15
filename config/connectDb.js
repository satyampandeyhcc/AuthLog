const Mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    

Mongoose.set("strictQuery", false);
    url="mongodb+srv://satyampandeyhcc:satyam123@cluster0.wcunz3t.mongodb.net/?retryWrites=true&w=majority";
    Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;

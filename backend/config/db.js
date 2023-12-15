const mongooose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongooose.connect(
      "mongodb+srv://kondasanthosh210:aA1JcHceBrrws6XC@cluster0.uij5a6j.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`MongoDB connection established:${conn}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;

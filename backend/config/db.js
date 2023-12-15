const mongooose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongooose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connection established:${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;

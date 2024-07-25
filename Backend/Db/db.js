const mongoose = require("mongoose");
const connectDb = () => {
  mongoose
    .connect(
      "mongodb+srv://santhoshchintu534:Booking_management@cluster0.lqsrxdj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err.message);
      process.exit(1);
    });
};
module.exports = connectDb;

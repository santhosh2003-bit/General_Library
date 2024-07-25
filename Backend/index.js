const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./Db/db");
const AdminRouter = require("./Router/AdminRouter");
const UserRouter = require("./Router/UserRouter");
const BookOperations = require("./Router/BookRouter");
const BooksToUser = require("./Router/BooksToUser");
const authMiddleware = require("./Middleware/authMiddleware");
const Transaction = require("./Router/TransactionRouter");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
connectDb();
app.use("/api/admin", AdminRouter);
app.use("/api/user", authMiddleware, UserRouter);
app.use("/api/books", authMiddleware, BookOperations);
app.use("/api/show/books", BooksToUser);
app.use("/api/transactions", authMiddleware, Transaction);
app.listen(5000, () => {
  console.log("Server Running...");
});

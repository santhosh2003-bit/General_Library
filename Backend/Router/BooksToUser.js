const express = require("express");
const router = express.Router();
const Book = require("../Model/Books");

router.get("/all-books", async (req, res) => {
  try {
    const books = await Book.find({});
    if (books.length > 0) {
      return res.status(200).json({ books: books });
    } else {
      return res.status(404).json({ message: "No books found" });
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
});
module.exports = router;

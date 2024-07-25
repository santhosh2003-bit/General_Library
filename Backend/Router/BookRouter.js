const express = require("express");
const router = express.Router();
const Books = require("../Model/Books");
router.post("/adding", async (req, res) => {
  const { name, image, author, available } = req.body;
  if (!name || !image || !author || !available) {
    return res.status(400).json({ error: "Please Enter Book Details" });
  }
  try {
    const book = new Books({
      name: name,
      image: image,
      author: author,
      available: available,
    });
    await book.save();
    return res.status(200).json({ message: "Book saved successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});

router.get("/books", async (req, res) => {
  try {
    const books = await Books.find();
    return res.status(200).json({ books: books });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});
router.get("/unique/book/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(`Requested Book ID: ${id}`);
  try {
    const book = await Books.findById({ _id: id });
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res.status(200).json({ book: book });
  } catch (error) {
    console.log(`Error fetching book by ID: ${id}`, error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});

router.delete("/removing", async (req, res) => {
  const { id } = req.body;
  try {
    const book = await Books.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});

router.put("/update", async (req, res) => {
  const { id } = req.body;
  const { name, image, author, available } = req.body;

  // console.log(`Book ID to update: ${id}`);

  if (!name || !image || !author || !available) {
    return res.status(400).json({ error: "Please Enter Book Details" });
  }

  try {
    const book = await Books.findByIdAndUpdate(
      id,
      {
        $set: {
          name: name,
          image: image,
          author: author,
          available: available,
        },
      },
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    return res
      .status(200)
      .json({ message: "Book updated successfully", book: book });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});
module.exports = router;

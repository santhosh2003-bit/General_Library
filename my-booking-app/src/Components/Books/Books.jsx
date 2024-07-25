import React, { useEffect, useState } from "react";
import NoImageAvailable from "../../assets/Noimage.jpg";
import Welcomimage from "../../assets/WelcomeImage.jpg";
import Navbar from "../Navbar/Navbar";
import Bottom from "../Bottom/Bottom";
import Nobooks from "../../assets/Nobooks.jpg";
const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/show/books/all-books", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.message) {
          setError(data.message);
        } else {
          setBooks(data.books);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to fetch books");
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <h1 className="text-2xl ">Loading...</h1>;
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-6">
        <h1 className="text-red-600 font-extrabold md:text-2xl text-xl ">
          {error}
        </h1>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-amber-500 pt-1 pb-1 pl-4 pr-4 text-2xl rounded-xl text-white text-center"
        >
          Back
        </button>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-stone-400 gap-6">
        <img
          src={Nobooks}
          alt="Nobooks"
          width={100}
          style={{ borderRadius: "50%" }}
        />
        <h1 className="text-xl md:text-4xl text-white">
          No Books are Available Please Contact Admin
        </h1>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-amber-500 pt-1 pb-1 pl-4 pr-4 text-2xl rounded-xl text-white text-center"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1 className="text-center p-7 text-xl font-bold md:text-2xl text-neutral-700">
        <i className="text-5xl md:text-9xl text-neutral-700">W</i>elcome to Our
        Smart Library
      </h1>
      <img src={Welcomimage} alt="WelcomeImage" className="h-[500px] w-full" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#0F1827",
          gap: "20px",
          padding: "10px 10px",
        }}
      >
        {books.map((book, index) => (
          <div
            key={index}
            style={{
              margin: "10px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "15px",
            }}
            className="shadow-2xl cursor-pointer"
          >
            <img
              src={book.image ? book.image : NoImageAvailable}
              alt="ImageNotAvailable"
              style={{ width: "100%", height: "250px" }}
            />
            <h2 className="text-xl md:text-2xl text-white font-semibold">
              Book : <span className="text-orange-100 ">{book.name}</span>
            </h2>
            <p className="text-xl md:text-2xl text-white font-semibold">
              Author : <span className="text-cyan-600">{book.author}</span>
            </p>
            <p className="text-xl md:text-2xl text-white font-semibold">
              {" "}
              Status : <span className="text-green-400">{book.available}</span>
            </p>
          </div>
        ))}
      </div>
      <hr />
      <Bottom />
    </div>
  );
};

export default Books;

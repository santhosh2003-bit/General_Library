import React, { useEffect, useState } from "react";
import Bottom from "../Bottom/Bottom";
import NoImageAvailable from "../../assets/Noimage.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Nobooks from "../../assets/Nobooks.jpg";
const Remove = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/books/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.books) {
          setBooks(data.books);
        } else {
          setError(data.error || "Failed to fetch books.");
        }
      })
      .catch((err) => {
        setError("Failed to fetch books.");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-slate-100 flex justify-center items-center h-screen">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-slate-100 flex justify-center items-center h-screen">
        <h1 className="text-2xl">Error: {error}</h1>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="flex flex-col gap-6 justify-center items-center h-screen bg-neutral-200">
        <img src={Nobooks} alt="Nobooks" width={200} className="rounded-full" />
        <h1 className="text-2xl font-mono">No books available</h1>
        <button
          className="text-xl font-bold bg-yellow-400 pt-1 pb-1 pl-2 pr-2 text-white rounded-md relative top-3 w-[150px]"
          onClick={() => navigate("/operations")}
        >
          Back
        </button>
      </div>
    );
  }

  const handleDelete = (id) => {
    fetch("http://localhost:5000/api/books/removing", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          window.location.reload();
        } else {
          alert(data.error);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to delete book");
      });
  };

  return (
    <div className="bg-slate-800">
      <Navbar />
      <button
        type="button"
        onClick={() => navigate("/operations")}
        className="md:w-[200px] w-[100px] rounded-md text-white text-xl  bg-yellow-500 pt-2 pb-2 pl-4 pr-4 relative md:left-[45%] ml-5 top-3 "
      >
        Back
      </button>
      <div className="flex flex-wrap bg-slate-800 p-7">
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
              Book : <span className="text-orange-100">{book.name}</span>
            </h2>
            <p className="text-xl md:text-2xl text-white font-semibold">
              Author : <span className="text-cyan-600">{book.author}</span>
            </p>
            <p className="text-xl md:text-2xl text-white font-semibold">
              Status : <span className="text-green-400">{book.available}</span>
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-red-500 pl-3 pr-3 pt-2 pb-2 text-center rounded-md text-xl font-bold text-white shadow-2xl"
                type="button"
                onClick={() => handleDelete(book._id)}
              >
                Delete
              </button>
              <button
                className="bg-green-500 pl-3 pr-3 pt-2 pb-2 text-center rounded-md text-xl font-bold text-white shadow-2xl"
                type="button"
                onClick={() => {
                  navigate(`/operations/update/${book._id}`);
                }}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>

      <Bottom />
    </div>
  );
};

export default Remove;

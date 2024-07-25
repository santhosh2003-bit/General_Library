import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Bottom from "../Bottom/Bottom";

const Update = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [available, setAvailable] = useState("available");
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/books/unique/book/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.book) {
          setBook(data.book);
          setImage(data.book.image);
          setName(data.book.name);
          setAuthor(data.book.author);
          setAvailable(data.book.available);
        } else {
          setError(data.error || "Failed to fetch book.");
        }
      })
      .catch((err) => {
        setError("Failed to fetch book.");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/books/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id: id,
        name: name,
        image: image,
        author: author,
        available: available,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.book) {
          alert("Book updated successfully!");
          navigate("/");
        } else {
          setError(data.error || "Failed to update book.");
        }
      })
      .catch((err) => {
        setError("Failed to update book.");
        console.log(err);
      });
  };

  const handleImageUploading = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.set("image", file);
      setUploading(true);
      axios
        .post(
          "https://api.imgbb.com/1/upload?key=bb4204e97ced7db982cc64e2cbd65db8",
          formData
        )
        .then((res) => {
          setImage(res.data.data.display_url);
        })
        .catch((err) => {
          console.error("Error uploading image:", err);
          alert("Failed to upload image.");
        })
        .finally(() => {
          setUploading(false);
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!book) {
    return <div>No book found</div>;
  }

  return (
    <div className="bg-slate-200 h-fit">
      <h1 className="text-xl md:text-2xl text-center p-2 font-extrabold">
        <i className="text-5xl md:text-9xl ">U</i>pdate Book
      </h1>
      <div className="flex flex-col justify-center items-center h-full">
        <form onSubmit={handleUpdate} className="flex flex-col ">
          <img
            src={image}
            alt="imagesOfBook"
            width={300}
            className="rounded-md"
          />

          <label htmlFor="images" className="text-gray-500 text-xl mb-2">
            Upload Book Image (optional) :
          </label>

          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageUploading}
            disabled={uploading}
            className="pt-1 pb-1 pl-2 pr-2 rounded-md text-xl mb-2 outline-none"
          />
          <br />
          <label htmlFor="name" className="text-xl mb-2">
            Name:
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="text-xl pt-1 pb-1 pl-2 pr-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="text-xl mb-2 mt-2">Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="text-xl pt-1 pb-1 pl-2 pr-2 rounded-md"
          />

          <label className="text-xl mb-2 mt-2">Status:</label>
          <select
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
            className="text-xl pt-1 pb-1 pl-2 pr-2 rounded-md"
          >
            <option value="available">Available</option>
            <option value="not_available">Not Available</option>
          </select>
          <br />
          <div className="flex justify-around">
            <button
              className="text-xl font-bold text-white bg-lime-500 w-fit pt-2 pb-2 pl-4 pr-4 rounded-md"
              type="submit"
            >
              Update
            </button>
            <button
              className="text-xl font-bold text-white bg-yellow-500 w-fit pt-2 pb-2 pl-4 pr-4 rounded-md"
              type="button"
              onClick={() => navigate("/operations")}
            >
              Back
            </button>
          </div>
        </form>
        <br />
      </div>
      <Bottom />
    </div>
  );
};

export default Update;

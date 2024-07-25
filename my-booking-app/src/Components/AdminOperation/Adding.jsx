import React, { useState } from "react";
import axios from "axios";
import AddingImage from "../../assets/adding.png";
const Adding = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [available, setAvailable] = useState("available");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:5000/api/books/adding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name,
        image,
        author,
        available,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert(data.error);
        }
        setName("");
        setImage("");
        setAuthor("");
        setAvailable("available");
      })
      .catch((err) => {
        console.error("Error adding book:", err);
        alert("Failed to add book.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-center text-xl md:text-2xl font-bold">
        <i className="text-5xl md:text-9xl text-amber-300">A</i>dd New Book
      </h2>
      <div className="flex flex-col md:flex-row md:justify-around items-center p-7 ">
        <img src={AddingImage} alt="Adding book" width={400} />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border-2 border-gray-400 p-4 pt-7 pb-7 rounded-md bg-slate-200"
        >
          <label htmlFor="name" className="text-gray-500 text-xl mb-2">
            Enter Book Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Motivation Book"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pt-1 pb-1 pl-2 pr-2 rounded-md text-xl mb-2 outline-none"
          />
          <label htmlFor="image" className="text-gray-500 text-xl mb-2">
            Upload Book Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageUploading}
            disabled={uploading}
            className="pt-1 pb-1 pl-2 pr-2 rounded-md text-xl mb-2 outline-none"
          />
          <label htmlFor="author" className="text-gray-500 text-xl mb-2">
            Enter Author Name
          </label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="e.g. Santhosh"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="pt-1 pb-1 pl-2 pr-2 rounded-md text-xl mb-2 outline-none"
          />
          <label htmlFor="available" className="text-gray-500 text-xl mb-2">
            Select Status
          </label>
          <select
            id="available"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
            className="pt-1 pb-1 pl-2 pr-2 rounded-md text-xl mb-2 outline-none"
          >
            <option value="available">Available</option>
            <option value="not_available">Not Available</option>
          </select>
          <div className="w-full flex justify-around">
            <button
              type="submit"
              disabled={loading || uploading}
              className="text-xl font-bold bg-blue-800  pt-1 pb-1 pl-2 pr-2 text-white rounded-md relative top-3 w-[150px]"
            >
              {loading ? "Adding Book..." : "Add Book"}
            </button>
            <button
              type="button"
              className="text-xl font-bold bg-yellow-400 pt-1 pb-1 pl-2 pr-2 text-white rounded-md relative top-3 w-[150px]"
              onClick={() => {
                window.location.href = "/operations";
              }}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adding;

import React from "react";
import Books from "../../assets/books1.jpg";
import AboutImage from "../../assets/about.webp";
import Contact from "../Contact/Contact";

const Middle = () => {
  return (
    <div className="px-4 py-6 bg-gray-300">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center pt-6">
        <i className="text-5xl md:text-9xl">W</i>elcome to{" "}
        <span className="text-indigo-700 underline">
          <i className="text-5xl md:text-9xl">S</i>mart{" "}
          <i className="text-5xl md:text-9xl">L</i>ibrary
        </span>
      </h1>
      <div className="flex flex-col md:flex-row justify-evenly items-center mb-11 space-y-6 md:space-y-0 md:space-x-6 mt-10">
        <img
          src={Books}
          alt="BooksImage"
          className="w-full h-auto md:h-[600px] md:w-1/3 object-cover rounded-xl shadow-2xl"
        />
        <p className="w-full md:w-1/2 text-center md:text-justify text-2xl text-gray-500 bg-white p-6 h-auto md:h-[300px] flex justify-center items-center pl-7 pr-7 rounded-xl">
          Discover a universe of knowledge with our advanced Library Management
          System. Seamlessly browse our extensive catalog, manage your borrowed
          books, and unlock a world of endless learning and exploration.
        </p>
      </div>
      <hr />
      <div className="mt-6" id="about">
        <h1 className="text-center p-6 text-2xl font-extrabold text-slate-700 ">
          <i className="text-5xl md:text-9xl text-green-500">A</i>bout Smart
          Library
        </h1>
        <div className="flex flex-col md:flex-row justify-evenly items-center mb-6 space-y-6 md:space-y-0 md:space-x-6">
          <p className="w-full md:w-1/2 text-center md:text-justify text-2xl text-gray-500 bg-white p-6 h-auto md:h-[300px] flex justify-center items-center pl-7 pr-7 rounded-xl">
            Welcome to Smart Library, your gateway to an expansive world of
            knowledge and learning. At Smart Library, we believe that access to
            information should be seamless, efficient, and enjoyable. Our
            advanced Library Management System is designed to provide a
            user-friendly experience for both avid readers and diligent
            researchers.
          </p>
          <img
            src={AboutImage}
            alt="AboutImage"
            className="w-full md:w-1/3 h-auto md:h-[400px] shadow-2xl object-cover rounded-xl"
          />
        </div>
      </div>
      <hr />
      <div className="text-center mt-6">
        <h1 className="text-xl md:text-2xl text-purple-700 font-extrabold">
          <i className="text-5xl md:text-9xl text-blue-700">O</i>ur Features
        </h1>
        <p className="p-7 text-gray-500 text-xl md:text-2xl">
          Our mission is to empower users with easy access to a vast collection
          of books and resources, enabling continuous learning and discovery. We
          aim to foster a community of readers and learners who can explore,
          borrow, and enjoy a wide range of literary treasures with minimal
          hassle.
        </p>
      </div>
      <hr />
      <div className="text-center mt-6 mb-4">
        <h1 className="text-xl md:text-2xl text-blue-400 font-extrabold">
          Join Our Community
        </h1>
        <p className="p-7 text-gray-500 text-xl md:text-2xl">
          Smart Library is more than just a library system; it's a community of
          learners and readers. Join us and become part of a network that values
          knowledge, education, and the joy of reading. Whether you’re looking
          for academic resources, fiction, non-fiction, or research materials,
          Smart Library has something for everyone.
        </p>
      </div>
      <hr />
      <Contact />
    </div>
  );
};

export default Middle;

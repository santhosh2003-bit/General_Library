import React from "react";
import contactImage from "../../assets/contact.webp";
const Contact = () => {
  return (
    <div className="relative top-4 p-4" id="contact">
      <h1 className="text-center font-bold text-xl md:text-4xl text-gray-600">
        Contact
      </h1>
      <div className="flex justify-evenly flex-col md:flex-row items-center">
        <div>
          <img src={contactImage} alt="contactImage" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-500 text-xl mb-2">
            Enter Name :
          </label>

          <input
            type="text"
            placeholder="e.g Sri"
            className="name outline-none p-2 rounded-md mb-2"
          />
          <label htmlFor="email" className="text-gray-500 text-xl mb-2">
            Enter Email
          </label>
          <input
            type="email"
            placeholder="e.g Sri@gmail.com"
            className="email outline-none p-2 rounded-md mb-2"
          />
          <label htmlFor="text" className="text-gray-500 text-xl mb-2">
            Enter Message
          </label>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            placeholder="e.g Hello..."
            className="mb-2 rounded-sm outline-none resize-none p-2"
          ></textarea>

          <input
            type="submit"
            value="Submit"
            className="bg-blue-600 w-max pt-1 pb-1 pl-3 pr-3 text-white font-bold rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

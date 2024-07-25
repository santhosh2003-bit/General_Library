import React, { useState } from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user ? user.role : null;
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  const handleNavbars = () => {
    if (!token) {
      return (
        <>
          <li>
            <Link
              to="/register"
              className="cursor-pointer text-[rgba(0,_0,_0,_.55)] hover:text-blue-600 hover:bg-slate-300 hover:rounded-xl p-2 text-center md:w-[100px]"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="cursor-pointer text-[rgba(0,_0,_0,_.55)] hover:text-blue-600 hover:bg-slate-300 hover:rounded-xl p-2 text-center md:w-[100px]"
              onClick={toggleMenu}
            >
              Sign In
            </Link>
          </li>
        </>
      );
    }
    if (token && role === "admin") {
      return (
        <>
          <li>
            <Link
              to="/operations"
              className="cursor-pointer text-[rgba(0,_0,_0,_.55)] hover:text-blue-600 hover:bg-slate-300 hover:rounded-xl p-2 text-center md:w-[100px]"
              onClick={toggleMenu}
            >
              Operations
            </Link>
          </li>
          <button
            className="cursor-pointer text-white hover:text-blue-600 hover:bg-slate-300 hover:rounded-xl p-2 text-center md:w-[100px] bg-red-600 font-bold rounded-md shadow-2xl"
            onClick={handleLogout}
          >
            LogOut
          </button>
        </>
      );
    }
    if (token && role === "user") {
      return (
        <>
          <li>
            <Link
              to="/transactions"
              className="cursor-pointer text-[rgba(0,_0,_0,_.55)] hover:text-blue-600 hover:bg-slate-300 hover:rounded-xl p-2 text-center md:w-[100px]"
              onClick={toggleMenu}
            >
              Transaction
            </Link>
          </li>
          <button
            className="cursor-pointer text-white hover:text-blue-600 hover:bg-slate-300 hover:rounded-xl p-2 text-center md:w-[100px] bg-red-600 font-bold rounded-md shadow-2xl"
            onClick={handleLogout}
          >
            LogOut
          </button>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-7 shadow-2xl items-center bg-white">
      <div className="flex space-x-2 cursor-pointer mb-4 md:mb-0">
        <LocalLibraryIcon className="text-blue-600" />
        <h2 className="font-bold">Smart Library</h2>
      </div>
      <div className="md:hidden flex items-center">
        <MenuIcon
          onClick={toggleMenu}
          className="cursor-pointer text-blue-600"
        />
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-11`}
      >
        <ul className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-11">
          <li>
            <Link
              to="/"
              className="cursor-pointer text-[rgba(0,_0,_0,_.55)] hover:text-blue-600 hover:bg-slate-300 hover:rounded-xl p-2 text-center md:w-[100px]"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              className="cursor-pointer text-[rgba(0,_0,_0,_.55)] hover:text-blue-600 hover:bg-slate-300 hover:rounded-xl p-2 text-center md:w-[100px]"
              onClick={toggleMenu}
            >
              Books
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className="cursor-pointer text-[rgba(0,_0,_0,_.55)] hover:text-blue-600 hover:bg-slate-300 hover:rounded-xl p-2 text-center md:w-[100px]"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="cursor-pointer text-[rgba(0,_0,_0,_.55)] hover:text-blue-600 hover:bg-slate-300 hover:rounded-xl p-2 text-center md:w-[100px]"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
          {handleNavbars()}
        </ul>
        <div className="md:hidden flex items-center">
          <CloseIcon
            onClick={toggleMenu}
            className="cursor-pointer text-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

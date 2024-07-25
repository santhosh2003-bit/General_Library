import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
const Bottom = () => {
  return (
    <div className="bg-slate-900 text-white pt-14">
      <div className="flex justify-evenly items-center">
        <div>
          <h1 className="text-sm font-bold text-yellow-400">Open Library</h1>
          <ul>
            <li className="cursor-pointer underline">
              <a href="#">vision</a>
            </li>
            <li className="cursor-pointer underline">
              <a href="#"></a>Volunteer
            </li>
            <li className="cursor-pointer underline">
              <a href="#">Careers</a>{" "}
            </li>
            <li className="cursor-pointer underline">
              <a href="#">Blog</a>{" "}
            </li>
            <li className="cursor-pointer underline">
              <a href="#"> Terms of Service</a>
            </li>
            <li className="cursor-pointer underline">
              <a href="#">Donate</a>{" "}
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-sm font-bold text-yellow-400">Discover</h1>
          <ul>
            <li className="cursor-pointer underline">
              <a href="#">Home</a>{" "}
            </li>
            <li className="cursor-pointer underline">
              <a href="#">Books</a>{" "}
            </li>
            <li className="cursor-pointer underline">
              <a href="#">Authors</a>{" "}
            </li>
            <li className="cursor-pointer underline">
              <a href="#">Subjects</a>{" "}
            </li>
            <li className="cursor-pointer underline">
              <a href="#">Collections</a>{" "}
            </li>
            <li className="cursor-pointer underline">
              <a href="#">Return to Top</a>{" "}
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-sm font-bold text-yellow-400">Help</h1>
          <ul>
            <li className="cursor-pointer underline">
              <a href="#">Help Center</a>{" "}
            </li>
            <li className="cursor-pointer underline">
              <a href="#">Report A Problem</a>{" "}
            </li>
            <li className="cursor-pointer underline">
              <a href="#">Suggesting Edits</a>{" "}
            </li>
            <li className="cursor-pointer underline">
              <a href="#">Add a Book</a>{" "}
            </li>
            <li className="cursor-pointer underline">
              <a href="#">Release Notes</a>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex md:flex-row flex-col p-8 justify-evenly items-center">
        <p>Copyright © 2023 Smart Library. All rights reserved.</p>
        <div className="space-x-4">
          <WhatsAppIcon className="cursor-pointer " />
          <FacebookIcon className="cursor-pointer " />
          <LinkedInIcon className="cursor-pointer " />
          <XIcon className="cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default Bottom;

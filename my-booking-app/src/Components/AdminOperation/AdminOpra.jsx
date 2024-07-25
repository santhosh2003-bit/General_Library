import React from "react";

const AdminOpra = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen">
      <button className="w-[150px] bg-lime-400 pt-1 pl-3 pr-3 pb-1 text-center text-xl rounded-md font-medium">
        <a href="/operations/adding">Add a Book</a>
      </button>
      <button className="w-[150px] bg-lime-500 pt-1 pl-3 pr-3 pb-1 text-center text-xl rounded-md font-medium">
        <a href="/operations/remove">Books</a>
      </button>
      <button className="w-[150px] bg-red-700 pt-1 pl-3 pr-3 pb-1 text-center text-xl rounded-md font-medium">
        <a href="/operations/remove">Remove Book</a>
      </button>
      <button className="w-[150px] bg-lime-500 pt-1 pl-3 pr-3 pb-1 text-center text-xl rounded-md font-medium">
        <a href="/operations/remove">Update Book</a>
      </button>
      <button className="w-[150px] bg-amber-500 pt-1 pl-3 pr-3 pb-1 text-center text-xl rounded-md font-medium">
        {" "}
        <a href="/">Back</a>
      </button>
    </div>
  );
};

export default AdminOpra;

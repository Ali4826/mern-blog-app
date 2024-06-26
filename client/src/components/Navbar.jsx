import React from "react";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Home
          </span>
        </a>
      </div>
      <hr />
    </nav>
  );
}

export default Navbar;

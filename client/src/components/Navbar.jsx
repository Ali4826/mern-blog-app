import React from "react";

function Navbar() {
  return (
    <div className="mb-5">
      <nav class="bg-white border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">
              Home
            </span>
          </a>
        </div>
        <hr />
      </nav>
    </div>
  );
}

export default Navbar;

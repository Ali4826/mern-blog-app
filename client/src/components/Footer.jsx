import React from "react";

function Footer() {
  return (
    <>
      <hr />
      <footer className="bg-white ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © {new Date().getFullYear()}
            <a href="/" className="hover:underline ml-2">
              Mern Blog App
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;

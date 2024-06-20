import React from "react";

function Footer() {
  return (
    <div className="mt-5">
      <hr />
      <footer class="bg-white ">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center ">
            © {new Date().getFullYear()}
            <a href="/" class="hover:underline">
              Mern Blog App
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

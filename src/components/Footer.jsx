import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-8 px-6 border-t border-white/10 mt-10 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img
            src="logo.jpeg"
            alt="logo"
            className="w-10 h-10 rounded-full object-cover border border-gray-400"
          />
          <div>
            <h2 className="text-lg font-semibold text-white">DevTinder</h2>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} — All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <a className="hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828..."></path>
            </svg>
          </a>

          <a className="hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631..."></path>
            </svg>
          </a>

          <a className="hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l..."></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-8 px-6 border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side Logo and Info */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
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

        {/* Social Icons */}
        <div className="flex gap-6">

          {/* Twitter */}
          <a className="hover:text-white transition" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 
              0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 
              16.11 0c-2.63 0-4.77 2.13-4.77 4.76 0 .37.04.74.12 1.09A12.86 
              12.86 0 0 1 1.64.9a4.72 4.72 0 0 0-.65 2.4c0 1.64.84 3.1 2.12 
              3.95A4.52 4.52 0 0 1 .96 6.9v.06c0 2.29 1.63 4.2 3.8 
              4.63a4.52 4.52 0 0 1-2.15.08c.61 1.9 2.39 3.28 
              4.5 3.32A9.06 9.06 0 0 1 0 19.54a12.8 12.8 0 0 0 
              6.95 2.04c8.34 0 12.9-6.92 12.9-12.92 0-.2 0-.39-.01-.58A9.22 
              9.22 0 0 0 23 3z" />
            </svg>
          </a>

          {/* Instagram */}
          <a className="hover:text-white transition" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 
              5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 
              5.5A4.5 4.5 0 1 1 7.5 12 4.49 4.49 0 0 1 12 
              7.5zm6.5-.75a1.25 1.25 0 1 1-1.25-1.25 1.25 
              1.25 0 0 1 1.25 1.25zM12 9a3 3 0 1 0 3 3 
              3 3 0 0 0-3-3z" />
            </svg>
          </a>

          {/* Facebook */}
          <a className="hover:text-white transition" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 
              1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 
              1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

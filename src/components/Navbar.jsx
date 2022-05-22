import React from "react";
import { Link } from "react-router-dom";

// ? component imports
import { Search } from "./imports";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
      <div className="flex justify-between items-center pspace-x-5 w-screen ">
        <Link to="/">
          <p className="text-sxl bg-blue-500 font-bold px-1 py-2 text-white rounded dark:bg-gray-500 dark:text-gray-900  ">
            Google 👽
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg "
        >
          {darkTheme ? "Light 💡" : " Dark 🌚"}
        </button>
      </div>
      <div className="justify-center">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;

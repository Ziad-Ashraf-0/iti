import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../store/actions";

const Navbar = () => {
  let lang = useSelector((state) => state.lang);
  let dispatch = useDispatch();

  return (
    <nav className="space-x-10 mx-10 md:flex my-3">
      <p className="italic text-2xl font-bold">MOVIES DB</p>
      <Link
        to="/"
        className="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Home
      </Link>
      <Link
        to="/movies"
        className="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Movies
      </Link>
      <Link
        to="/favourites"
        className="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Favourites
      </Link>
      <button
        onClick={() => {
          dispatch(changeLang(lang === "en-US" ? "ar-SA" : "en-US"));
        }}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        {lang}
      </button>
    </nav>
  );
};

export default Navbar;

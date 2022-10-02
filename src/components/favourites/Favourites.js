import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveFavourite, changeLang } from "../../store/actions";

const Favourites = () => {
  let x = useSelector((state) => state.favourites);
  let dispatch = useDispatch();
  let lang = useSelector((state) => state.lang);

  return !x ? (
    <>
      <div className="container d-flex justify-content-center">
        <h1>Empty</h1>
      </div>
    </>
  ) : (
    <>
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          {x.map((singleTv, index) => (
            <div
              key={index}
              className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700"
            >
              <img
                className="rounded-t-lg"
                src={
                  "https://image.tmdb.org/t/p/original" + singleTv.poster_path
                }
                alt="Card image"
              />
              <div className="p-5">
                <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {singleTv.name}
                </h4>
                {singleTv.isVisable && (
                  <p class="mb-3 font-normal text-gray-700">
                    {singleTv.overview}
                  </p>
                )}
                <div className="d-flex">
                  <button
                    className="inline-flex ml-3 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                      dispatch(RemoveFavourite(singleTv));
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favourites;

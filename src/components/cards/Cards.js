import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddToFavourite } from "../../store/actions";

const Cards = () => {
  let [moviesList, setmoviesList] = useState([]);
  let [page, setPage] = useState(1);
  let lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  let [showDetails, setShowDetails] = useState(true);

  let toggleDetails = (tvid) => {
    let newTvs = moviesList.filter((tv) => {
      if (tv.id === tvid) {
        tv.isVisable = !tv.isVisable;
      }
      return tv;
    });
    setmoviesList(newTvs);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=790392d65f15e65ab054f72d158f72c2&language=${lang}&page=${page}`
      )
      .then((moviesData) => {
        setmoviesList(moviesData.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, lang]);

  let goNext = () => {
    setPage(++page);
    console.log(page);
  };
  let goPrev = () => {
    if (page > 0) {
      setPage(--page);
    }
    console.log(page);
  };

  return (
    <div className="m-10">
      <div className="grid grid-cols-4 gap-4">
        {moviesList.map((singleTv, index) => (
          <div
            key={index}
            className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700"
          >
            <img
              className="rounded-t-lg"
              src={"https://image.tmdb.org/t/p/original" + singleTv.poster_path}
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
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    toggleDetails(singleTv.id);
                  }}
                >
                  {singleTv.isVisable ? "Hide Details" : "See Details"}
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  className="inline-flex ml-3 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    dispatch(AddToFavourite(singleTv));
                    alert("Added");
                  }}
                >
                  ADD to favourites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="">page 2</button>
    </div>
  );
};

export default Cards;

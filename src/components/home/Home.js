import React from "react";
import { changeLang } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  let navigate = useNavigate();
  let goToMovies = () => {
    //props.history.push('/movie')
    navigate("/movies");
  };
  let lang = useSelector((state) => state.lang);
  let dispatch = useDispatch();

  return (
    <div>
      {" "}
      <h1>Home</h1>
      <button className="btn btn-primary" onClick={goToMovies}>
        Movies
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(changeLang(lang === "en-US" ? "ar-SA" : "en-US"));
        }}
      >
        {lang}
      </button>
      {/* <Button variant="contained">Text</Button> */}
    </div>
  );
};

export default Home;

import "../App.css";
import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import businessMan from "./Images/Profile/business_man.png";
import businessWoman from "./Images/Profile/business_woman.png";
import typeSeries from "./Images/Type/tv_girl_tooku.png";
import typeMovies from "./Images/Type/kandou_movie_eigakan.png";
import * as Api from "../api.js";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SelectA = () => {
  const navigate = useNavigate();
  const [choose, setChoose] = useState("");
  let params = useParams();
  const nickname = params.nickname;
  const clickTV = async (e) => {
    const category = "TV";
    setChoose(category);
    const result = await Api.post(`/user/family/${nickname}/setup1`, {
      pref: "TV",
    });
    console.log(result);
    navigate(`/${nickname}/selectB`);
  };
  const clickMovie = async (e) => {
    const category = "Movie";
    setChoose(category);
    const result = await Api.post(`/user/family/${nickname}/setup1`, {
      pref: "Movie",
    });
    console.log(result);
    console.log(nickname);
    navigate(`/${nickname}/selectB`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Kakau Kids</h1>
        <h5>A place for children to discover new TV series and movies!</h5>
        <figure className="profile">
          <a href="#">
            <img
              src={businessMan}
              width={60}
              height={80}
              className="businessMan-icon"
              alt="Business Man"
            />
          </a>
          <figcaption>Profile</figcaption>
        </figure>
      </header>
      <body className="App-body">
        <div className="App-body-type">
          <figure class="type">
            <img
              id="type1"
              src={typeSeries}
              width={300}
              height={300}
              className="series-icon"
              alt="Series"
              onClick={clickTV}
            />
            <figcaption>TV Series</figcaption>
          </figure>
          <figure class="type">
            <img
              id="type2"
              src={typeMovies}
              width={300}
              height={300}
              className="movie_icon"
              alt="Movies"
              onClick={clickMovie}
            />
            <figcaption>Movies</figcaption>
          </figure>
        </div>
      </body>
    </div>
  );
};

export default SelectA;

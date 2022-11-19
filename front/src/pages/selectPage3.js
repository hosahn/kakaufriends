import "../App.css";
import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import businessMan from "./Images/Profile/business_man.png";
import businessWoman from "./Images/Profile/business_woman.png";
import typeSeries from "./Images/Type/tv_girl_tooku.png";
import typeMovies from "./Images/Type/kandou_movie_eigakan.png";
import genreRacing from "./Images/Genre/car_racing_kart.png";
import genreFantasy from "./Images/Genre/fantasy_kouryu_dragon.png";
import genreSuperHero from "./Images/Genre/hero_woman.png";
import genreAction from "./Images/Genre/mizudeppou_kids.png";
import genreEducational from "./Images/Genre/school_class_english.png";
import genreScienceFiction from "./Images/Genre/space_uchuhikoushi_man.png";
import genreSports from "./Images/Genre/sports_soccer_pass_man.png";
import genreMystery from "./Images/Genre/tantei_hannin.png";
import genreAnimals from "./Images/Genre/tree_animals_group.png";

const SelectC = () => {
  const [choose, setChoose] = useState("");
  const clickAction = (e) => {
    const category = "Action";
    setChoose(category);
  };
  const clickRacing = (e) => {
    const category = "Racing";
    setChoose(category);
  };
  const clickFantasy = (e) => {
    const category = "Fantasy";
    setChoose(category);
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
        <div className="App-body-genre">
          <figure className="genre">
            <a href="#">
              <img
                src={genreFantasy}
                width={300}
                height={300}
                className="fantasy-icon"
                alt="Fantasy"
              />
            </a>
            <figcaption>Fantasy</figcaption>
          </figure>
          <figure className="genre">
            <a href="#">
              <img
                src={genreSports}
                width={300}
                height={300}
                className="sports_icon"
                alt="Sports"
              />
            </a>
            <figcaption>Sports</figcaption>
          </figure>
          <figure className="genre">
            <a href="#">
              <img
                src={genreEducational}
                width={300}
                height={300}
                className="educational_icon"
                alt="Educational"
              />
            </a>
            <figcaption>Educational</figcaption>
          </figure>
        </div>
      </body>
    </div>
  );
};

export default SelectC;

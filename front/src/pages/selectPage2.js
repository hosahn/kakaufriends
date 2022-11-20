import "../App.css";
import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import businessMan from "./Images/Profile/business_man.png";
import businessWoman from "./Images/Profile/business_woman.png";
import genreRacing from "./Images/Genre/car_racing_kart.png";
import genreFantasy from "./Images/Genre/fantasy_kouryu_dragon.png";
import genreSuperHero from "./Images/Genre/hero_woman.png";
import genreAction from "./Images/Genre/mizudeppou_kids.png";
import genreEducational from "./Images/Genre/school_class_english.png";
import genreScienceFiction from "./Images/Genre/space_uchuhikoushi_man.png";
import genreSports from "./Images/Genre/sports_soccer_pass_man.png";
import genreMystery from "./Images/Genre/tantei_hannin.png";
import genreAnimals from "./Images/Genre/tree_animals_group.png";
import { useParams } from "react-router-dom";
import * as Api from "../api.js";
import { useNavigate } from "react-router-dom";
import Nav from "../components/nav/Nav";
const SelectB = () => {
  const navigate = useNavigate();
  const [choose, setChoose] = useState("");
  let params = useParams();
  const nickname = params.nickname;

  const clickEducation = async (e) => {
    const category = "Education";
    setChoose(category);
    const result = await Api.post(`/user/family/${nickname}/setup3`, {
      pref: "Education",
    });
    if (result) {
      navigate(`/${params}/selectD`);
    }
  };
  const clickSports = async (e) => {
    const category = "Sport";
    setChoose(category);
    const result = await Api.post(`/user/family/${nickname}/setup2`, {
      pref: "sport",
    });
    if (result) {
      navigate(`/profiles`);
    }
  };
  const clickFantasy = async (e) => {
    const category = "Fantasy";
    setChoose(category);
    const result = await Api.post(`/user/family/${nickname}/setup2`, {
      pref: "fantasy",
    });
    if (result) {
      navigate(`/profiles`);
    }
  };

  const clickAction = async (e) => {
    const category = "Action";
    setChoose(category);
    const result = await Api.post(`/user/family/${nickname}/setup2`, {
      pref: "action",
    });
    navigate(`/profiles`);
  };

  const clickMystery = async (e) => {
    const category = "Crime";
    setChoose(category);
    const result = await Api.post(`/${nickname}/setup4`, {
      pref: "crime",
    });
    if (result) {
      navigate(`/family/${params}`);
    }
  };
  const clickHero = async (e) => {
    const category = "Hero";
    setChoose(category);
    const result = await Api.post(`/${nickname}/setup4`, {
      pref: "Hero",
    });
    if (result) {
      navigate(`/family/${params}`);
    }
  };
  const clickSF = async (e) => {
    const category = "Science Fiction";
    setChoose(category);
    const result = await Api.post(`/family/${nickname}/setup4`, {
      pref: "scifi",
    });
    if (result) {
      navigate(`/family/${params}`);
    }
  };

  const clickRacing = async (e) => {
    const category = "Racing";
    setChoose(category);
    const result = await Api.post(`/user/family/${nickname}/setup2`, {
      pref: "animation",
    });
    navigate(`/profiles`);
  };
  const clickAnimal = async (e) => {
    const category = "Animal";
    setChoose(category);
    const result = await Api.post(`/user/family/${nickname}/setup2`, {
      pref: "Animal",
    });
    navigate(`/profiles`);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Welcome to Kakau Kids</h1>
        <h5>A place for children to discover new TV series and movies!</h5>
      </header>
      <body className="App-body">
        <div className="App-body-genre">
          <figure className="genre">
            <img
              src={genreAction}
              width={300}
              height={300}
              className="action-icon"
              alt="Action"
              onClick={clickAction}
            />
            <figcaption>Action</figcaption>
          </figure>
          <figure className="genre">
            <img
              src={genreFantasy}
              width={300}
              height={300}
              className="racing_icon"
              alt="Racing"
              onClick={clickFantasy}
            />
            <figcaption>Fantasy</figcaption>
          </figure>
          <figure className="genre">
            <img
              src={genreSuperHero}
              width={300}
              height={300}
              className="action-icon"
              alt="Action"
              onClick={clickRacing}
            />
            <figcaption>Animation</figcaption>
          </figure>
          <figure className="genre">
            <img
              src={genreRacing}
              width={300}
              height={300}
              className="racing_icon"
              alt="Racing"
              onClick={clickSports}
            />
            <figcaption>Sports</figcaption>
          </figure>
          <figure className="genre">
            <a href="#">
              <img
                src={genreMystery}
                width={300}
                height={300}
                className="mystery-icon"
                alt="Mystery"
                onClick={clickMystery}
              />
            </a>
            <figcaption>Crime</figcaption>
          </figure>
          <figure className="genre">
            <a href="#">
              <img
                src={genreScienceFiction}
                width={300}
                height={300}
                className="scienceFiction_icon"
                alt="Science Fiction"
                onClick={clickSF}
              />
            </a>
            <figcaption>Science Fiction</figcaption>
          </figure>
        </div>
      </body>
    </div>
  );
};

export default SelectB;

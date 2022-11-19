import "../App.css";
import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import businessMan from "./Images/Profile/business_man.png";
import businessWoman from "./Images/Profile/business_woman.png";
import genreRacing from "./Images/Genre/car_racing_kart.png";
import genreAction from "./Images/Genre/mizudeppou_kids.png";
import genreAnimals from "./Images/Genre/tree_animals_group.png";
import { useParams } from "react-router-dom";
import * as Api from "../api.js";
import { useNavigate } from "react-router-dom";
const SelectB = () => {
  const navigate = useNavigate();
  const [choose, setChoose] = useState("");
  let params = useParams();
  const nickname = params.nickname;
  const clickAction = async (e) => {
    const category = "Action";
    setChoose(category);
    const result = await Api.post(`/user/family/${nickname}/setup2`, {
      pref: "Action",
    });
    navigate(`/profiles`);
  };
  const clickRacing = async (e) => {
    const category = "Racing";
    setChoose(category);
    const result = await Api.post(`/user/family/${nickname}/setup2`, {
      pref: "Racing",
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
              src={genreRacing}
              width={300}
              height={300}
              className="racing_icon"
              alt="Racing"
              onClick={clickRacing}
            />
            <figcaption>Racing</figcaption>
          </figure>
          <figure className="genre">
            <a href="#">
              <img
                src={genreAnimals}
                width={300}
                height={300}
                className="animals_icon"
                alt="Animals"
                onClick={clickAnimal}
              />
            </a>
            <figcaption>Animals</figcaption>
          </figure>
        </div>
      </body>
    </div>
  );
};

export default SelectB;

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

const SelectB = () => {
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
                src={genreAction}
                width={300}
                height={300}
                className="action-icon"
                alt="Action"
              />
            </a>
            <figcaption>Action</figcaption>
          </figure>
          <figure className="genre">
            <a href="#">
              <img
                src={genreRacing}
                width={300}
                height={300}
                className="racing_icon"
                alt="Racing"
              />
            </a>
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

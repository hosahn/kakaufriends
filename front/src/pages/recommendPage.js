import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Api from "../api.js";
import "../styles/RecommendationStyle.css";
import MovieCards from "../components/movieCards.js";
import businessMan from "./Images/Profile/business_woman.png";
import fatHamster from "../pages/Images/Profile/animal_hamster3.png";
import { Grid } from "@mui/material";
import Nav from "../components/nav/Nav.js";
import MemberCard from "../components/MemberCard.js";

const Recommend = () => {
  const [profiles, setProfiles] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let params = useParams();
  const nickname = params.nickname;
  useEffect(() => {
    renderRecommend();
  }, []);
  const renderRecommend = async () => {
    try {
      const result = await Api.get(`/user/family/${nickname}`);
      console.log(result);
      console.log("Asdf");
      setProfiles(result.data);
      console.log(result.data);
      // console.log(profiles);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav />
      <div className="Recommendations">
        <header className="Rec-header">
          <h1>Your personalized recommendations</h1>
          <h5>These are things we think you might like</h5>
        </header>
        <body className="Rec-body">
          <div className="Rec-body2">
            {profiles.map(function (data, index) {
              console.log(index);
              return (
                <Grid
                  container
                  style={{
                    display: "inline-grid",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                  }}
                >
                  <MovieCards name={data[0].title} index={index}></MovieCards>
                </Grid>
              );
            })}
          </div>
        </body>
      </div>
    </>
  );
};

export default Recommend;

import * as React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as Api from "../api.js";
import * as style from "../styles/CommonStyle";
import StyledEngine from "@mui/styled-engine";
import fatHamster from "../pages/Images/Profile/animal_hamster3.png";
import fennec from "../pages/Images/Profile/animal_fennec.png";
import kitsune from "../pages/Images/Profile/animal_happa_kitsune.png";
import cat from "../pages/Images/Profile/cat.jpeg";
import { useState } from "react";
//memberInfo : img, title, author, github, email
export default function MovieCards({ name, index }) {
  const navigate = useNavigate();
  //   const [imageName, setImageName] = useState(cat);
  const onClick = () => {
    clickHandler();
  };
  console.log(index);
  //   if (typeinfo === "MOVIE") {
  //     setImageName(cat);
  //   } else {
  //     setImageName(kitsune);
  //   }
  //   const imageArray = [fennec, fatHamster, kitsune];
  const clickHandler = async () => {
    // const result = await Api.get(`/user/family/info/${name}`);
    // if (result.data.pref1 == null) {
    //   navigate(`/${name}/selectA`);
    // } else {
    navigate(`/family/${name}`);
    // }
  };
  return (
    <>
      <Grid item xs={2} sx={{ p: 1 }}>
        <style.CardContainer onClick={onClick}>
          <Card style={{ width: "250px", height: "300px" }}>
            <CardMedia
              component="img"
              height="210"
              //   image={imageName}
              image={index > 2 ? kitsune : cat}
              alt="card-media"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {name}
              </Typography>
            </CardContent>
          </Card>
        </style.CardContainer>
      </Grid>
    </>
  );
}

import * as React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as Api from "../api.js";
import * as style from "../styles/CommonStyle";
import StyledEngine from "@mui/styled-engine";
//memberInfo : img, title, author, github, email
export default function MemberCard({ memberInfo }) {
  const navigate = useNavigate();
  const onClick = () => {
    clickHandler();
  };
  const clickHandler = async () => {
    const result = await Api.get(`/user/family/info/${memberInfo.nickname}`);
    if (result.data.pref1 == null) {
      navigate(`/${memberInfo.nickname}/selectA`);
    } else {
      navigate(`/family/${memberInfo.nickname}`);
    }
  };
  return (
    <>
      <Grid item xs={2} sx={{ p: 1 }}>
        <style.CardContainer onClick={onClick}>
          <Card style={{ width: "200px", height: "300px" }}>
            <CardMedia
              component="img"
              height="210"
              image={memberInfo.img}
              alt="card-media"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {memberInfo.nickname}
              </Typography>
            </CardContent>
          </Card>
        </style.CardContainer>
      </Grid>
    </>
  );
}

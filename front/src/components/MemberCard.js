import * as React from "react";
import {
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import * as Api from "../api.js";
import { useNavigate } from "react-router-dom";

//memberInfo : img, title, author, github, email
export default function MemberCard({ memberInfo }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/family/${memberInfo.nickname}`);
  };
  return (
    <>
      <Grid item xs={2} sx={{ p: 1 }}>
        <Card style={{ width: "200px", height: "370px" }}>
          <CardMedia
            component="img"
            height="210"
            image={memberInfo.img}
            onClick={onClick}
            alt="card-media"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {memberInfo.nickname}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

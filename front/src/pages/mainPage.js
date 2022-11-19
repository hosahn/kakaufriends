import React, { useEffect, useState } from "react";
import * as style from "../styles/LandingStyle";
import LandingNav from "../components/nav/LandingNav";
import MainFooter from "../components/footer";
import DiaryGraph from "../components/graph/diaryGraph";
import SocialGraph from "../components/graph/socialGraph";
import Btn from "../components/Btn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const socialText = `lorem`;

const snsText = `lorem.`;
const quotation = `Register and let your Kids find out their most beloved/safe Movies!`;
const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <style.MainContainer>
        <LandingNav />
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.LogoContainer>
          <style.Title>Kakau Friends</style.Title>
          <style.MoonIcon />
        </style.LogoContainer>
        <style.ButtonDiv>
          <Btn
            text={"Visit our Service"}
            onClick={() => {
              navigate("/login");
            }}
          />
        </style.ButtonDiv>
        <style.SocietyProblem>Why our Service?</style.SocietyProblem>
        <style.GraphContainer>
          <DiaryGraph />
          <style.REmotionText>{socialText}</style.REmotionText>
          <SocialGraph /> <style.RSocialText>{snsText}</style.RSocialText>
        </style.GraphContainer>
        <style.Quotation>{quotation}</style.Quotation>
      </style.MainContainer>
    </>
  );
};

export default Landing;

import styled from "styled-components";
import images from "../../assets/images";
import { useState, useEffect } from "react";

const FirstPlacePic = styled.img`
  position: absolute;
  width: 240px;
  height: 240px;
  top: 0px;
  left: 0px;
`;

const FirstPlace = styled.div`
  position: absolute;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
`;

const FirstPlaceTag = styled.h1`
  white-space: nowrap;
  position: absolute;
  top: 230px;
  left: 100px;
  right: 20px;
  font-size: 24px;
  font-family: "EliceDigitalBaeum_Bold";
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

const FirstPlaceCount = styled.h2`
  white-space: nowrap;
  position: absolute;
  top: 260px;
  left: 100px;
  right: 20px;
  font-size: 24px;
  font-family: "EliceDigitalBaeum_Bold";
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

const SecondPlace = styled.div`
  position: absolute;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
`;

const SecondPlacePic = styled.img`
  position: absolute;
  width: 240px;
  height: 240px;
  top: 0px;
  left: 340px;
`;
const SecondPlaceTag = styled.h1`
  white-space: nowrap;
  position: absolute;
  top: 230px;
  left: 440px;
  right: 20px;
  font-size: 24px;
  font-family: "EliceDigitalBaeum_Bold";
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

const SecondPlaceCount = styled.h2`
  white-space: nowrap;
  position: absolute;
  top: 260px;
  left: 440px;
  right: 20px;
  font-size: 24px;
  font-family: "EliceDigitalBaeum_Bold";
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

const ThirdPlace = styled.div`
  position: absolute;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
`;

const ThirdPlacePic = styled.img`
  position: absolute;
  width: 240px;
  height: 240px;
  top: 0px;
  left: 690px;
`;
const ThirdPlaceTag = styled.h1`
  white-space: nowrap;
  position: absolute;
  top: 230px;
  left: 790px;
  right: 20px;
  font-size: 24px;
  font-family: "EliceDigitalBaeum_Bold";
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

const ThirdPlaceCount = styled.h2`
  white-space: nowrap;
  position: absolute;
  top: 260px;
  left: 790px;
  right: 20px;
  font-size: 24px;
  font-family: "EliceDigitalBaeum_Bold";
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

const TagRanking = (props) => {
  const data = props.data;
  return (
    <>
      <FirstPlace>
        <FirstPlacePic src={images.Gold} />
        <FirstPlaceTag>{data[0] != null ? data[0].tag : "없음"}</FirstPlaceTag>
        <FirstPlaceCount>
          {data[0] != null ? data[0].count : "없음"}
        </FirstPlaceCount>
      </FirstPlace>
      <SecondPlace>
        <SecondPlacePic src={images.Silver} />
        <SecondPlaceTag>
          {data[1] != null ? data[1].tag : "없음"}
        </SecondPlaceTag>
        <SecondPlaceCount>
          {data[1] != null ? data[1].count : "없음"}
        </SecondPlaceCount>
      </SecondPlace>
      <ThirdPlace>
        <ThirdPlacePic src={images.Broze} />
        <ThirdPlaceTag>{data[2] != null ? data[2].tag : "없음"}</ThirdPlaceTag>
        <ThirdPlaceCount>
          {data[2] != null ? data[2].count : "없음"}
        </ThirdPlaceCount>
      </ThirdPlace>
    </>
  );
};

export default TagRanking;

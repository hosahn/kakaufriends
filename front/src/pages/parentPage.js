import { useState, useEffect } from "react";
import * as style from "../styles/ReportStyle.js";
import Nav from "../components/nav/Nav";
import * as Api from "../api";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TimeGraph from "../components/graph/timeGraph.js";
import CheckBox from "../components/CheckBox.js";
import { FormGroup, Checkbox, FormControlLabel } from "@mui/material";
const Report = () => {
  const navigate = useNavigate();
  const [forbiddenA, setForbiddenA] = useState("");
  const [forbiddenB, setForbiddenB] = useState("");
  const [forbiddenC, setForbiddenC] = useState("");
  const handleChangeA = ({ target: { value } }) => setForbiddenA(value);
  const handleChangeB = ({ target: { value } }) => setForbiddenB(value);
  const handleChangeC = ({ target: { value } }) => setForbiddenC(value);
  const submitHandler = () => {
    window.alert("Saved Changes");
    navigate("/profiles");
  };
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    allFunction();
  }, []);

  const allFunction = async () => {
    try {
    } catch (err) {}
  };

  return (
    <>
      <Nav />
      <style.BackGroundContainer>
        <style.MainContainers>
          <DateWrapper>📅 This is 통계입니다. </DateWrapper>
          <style.RTitleWrap>
            <style.ReportTitle>🏁 Monthly Statistic 🏁</style.ReportTitle>
          </style.RTitleWrap>
          <style.DescTitle>
            What kind of genre did your kids watch?
          </style.DescTitle>
          <TimeGraph data={""} />
          <style.DescTitle>
            What kind of restrictions do you want to apply?
          </style.DescTitle>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="No thriler movie" />
            <FormControlLabel control={<Checkbox />} label="No crime movie" />
            <FormControlLabel control={<Checkbox />} label="No horror movie" />
            <FormControlLabel control={<Checkbox />} label="No R rated" />
            <FormControlLabel control={<Checkbox />} label="No NC-17 rated" />
            <FormControlLabel control={<Checkbox />} label="No PG-13 rated" />
          </FormGroup>
          <button type="submit" onClick={submitHandler}>
            Send
          </button>
        </style.MainContainers>
      </style.BackGroundContainer>
    </>
  );
};
export default Report;

const DateWrapper = styled.div`
  margin-top: 20px;
  color: #228be6;
`;

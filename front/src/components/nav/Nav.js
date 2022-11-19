import React, { useEffect, useState } from "react";
import * as Api from "../../api";
import { NavWrap, Btn, UserBtn, HighLight } from "../../styles/NavStyle";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import snackBar from "../snackBar";

const Nav = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await Api.get("/user/logout");
      if (res.data === true) {
        navigate("/profiles");
      } else {
        alert("failed to log out");
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        console.error("data : ", data);
        navigate("/");
      }
    }
  };

  return (
    <NavWrap>
      <UserBtn onClick={() => navigate("/profiles")}>
        <FontAwesomeIcon icon={faCircleUser} className="user" />
      </UserBtn>
      <Btn onClick={logoutHandler}>
        <HighLight>Log Out</HighLight>
      </Btn>
    </NavWrap>
  );
};

export default Nav;

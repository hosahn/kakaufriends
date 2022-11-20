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
    window.alert("Successfully Logged Out");
    navigate("/login");
  };

  const parentHandler = () => {
    navigate("/family/parents");
  };
  return (
    <NavWrap>
      <UserBtn onClick={() => navigate("/profiles")}>
        <FontAwesomeIcon icon={faCircleUser} className="user" />
      </UserBtn>
      <Btn onClick={logoutHandler}>
        <HighLight>Log Out</HighLight>
      </Btn>
      <Btn onClick={parentHandler}>
        <HighLight>Parent</HighLight>
      </Btn>
    </NavWrap>
  );
};

export default Nav;

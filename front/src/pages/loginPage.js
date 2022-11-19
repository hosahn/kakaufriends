import { useState } from "react";
import { LoginText, LoginInput } from "../styles/LoginStyle";
import styled from "styled-components";
import Btn from "../components/Btn";
import { validateEmail } from "../utils/validation";
import LandingNav from "../components/nav/LandingNav";
import { useNavigate } from "react-router-dom";
import snackBar from "../components/snackBar";
import { WarningText } from "../styles/RegisterStyle";
import * as Api from "../api.js";

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
`;

const LoginMainContainer = styled.div`
  display: grid;
  place-items: center;
  align-items: center;
  margin-top: 150px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length >= 4;
  const isFormValid = isEmailValid && isPasswordValid;

  const navigate = useNavigate();

  const openEmail = email.length === 0 ? false : true;

  const clickLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await Api.post("/login/local", {
        email,
        pw: password,
      });
      console.log(res);
      if (res.data === true) {
        navigate("/profiles");
      } else {
        snackBar("error", "Login Failed.");
      }
    } catch (error) {
      if (error.response) {
        snackBar("error", "Login Failed.");
        navigate("/");
      }
    }
  };

  return (
    <Container>
      <LandingNav />
      <div>
        <LoginMainContainer>
          <div style={{ marginTop: "1rem" }}>
            <LoginText>Email Adress</LoginText>
            <LoginInput
              type="email"
              id="email-input"
              label="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {openEmail && !isEmailValid && (
              <WarningText>Please Check your Email!</WarningText>
            )}
          </div>
          <div style={{ marginTop: "1rem" }}>
            <LoginText>Password</LoginText>
            <LoginInput
              type="password"
              id="password-input"
              label="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div style={{ margin: "0 auto", width: "100px" }}>
            <Btn
              text={"Login"}
              type={"sub"}
              onClick={clickLogin}
              disabled={!isFormValid}
            />
          </div>
        </LoginMainContainer>
      </div>
    </Container>
  );
};

export default Login;

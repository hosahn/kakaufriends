import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
`;

const LogoBtn = styled.button`
font-family: 'EliceDigitalBaeum';
color: black;
font-size: 20px;
margin-right: 40px;
:hover {
  opacit
`;

const NavBtn = styled.button`
  font-family: "EliceDigitalBaeum";
  color: black;
  font-size: 20px;
  margin-right: 40px;
  :hover {
    opacity: 0.7;
  }
`;

const LandingNav = () => {
  const navigate = useNavigate();
  return (
    <NavWrapper>
      <LogoBtn onClick={() => navigate("/")}>Main</LogoBtn>
      <NavBtn onClick={() => navigate("/register")}>Register</NavBtn>
      <NavBtn onClick={() => navigate("/login")}>Log in</NavBtn>
    </NavWrapper>
  );
};

export default LandingNav;

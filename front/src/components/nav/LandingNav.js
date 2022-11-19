import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
`;

const LogoBtn = styled.button`
font-family: 'EliceDigitalBaeum';
color: #f8f0fc;
font-size: 20px;
margin-right: 40px;
:hover {
  opacit
`;

const NavBtn = styled.button`
  font-family: 'EliceDigitalBaeum';
  color: white;
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
      <LogoBtn onClick={() => navigate('/')}>밤하늘</LogoBtn>
      <NavBtn onClick={() => navigate('/register')}>회원가입</NavBtn>
      <NavBtn onClick={() => navigate('/login')}>로그인</NavBtn>
    </NavWrapper>
  );
};

export default LandingNav;

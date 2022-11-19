import styled from 'styled-components';

export const SocialBtn = styled.button`
  width: 4rem;
  height: 4rem;
  background-color: transparent;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const SocialLoginContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;
  margin-top: 20px;
`;

export const LoginText = styled.div`
  font-family: 'EliceDigitalBaeum';
  font-size: 1rem;
  line-height: 1.5rem;
  color: white;
`;

export const LoginInput = styled.input`
  display: inline-flex;
  width: 30rem;
  height: 3rem;
  color: black;
  background: transparent;
  padding: 1rem;
  border: solid 1px white;
  border-radius: 1rem;
  outline: none;
  font-size: 1rem;
  cursor: text;
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;

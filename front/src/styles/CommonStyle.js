import styled from "styled-components";

export const MainContext = styled.div`
  font-family: "EliceDigitalBaeum_Bold";
  font-size: 1.8rem;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 95px;
`;

export const ExplainContext = styled.div`
  font-family: "EliceDigitalBaeum";
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-bottom: ${(props) => `${props.bottom}rem`};
  margin-left: ${(props) => `${props.left}rem`};
  span {
    font-weight: bold;
    color: #4577ba;
    background-image: linear-gradient(transparent 60%, #a5d8ff 40%);
  }
`;

export const MainTitle = styled.h1`
  font-family: "EliceDigitalBaeum_Bold";
  font-size: 1.8rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.4rem;
  font-family: "EliceDigitalBaeum_Bold";
  color: ${(props) => (props.color == "purple" ? "#3d2c8d" : "#e64980")};
`;

export const TextInput = styled.input`
  min-height: 20px;
  width: 700px;
  margin: 0.5rem;
  padding: 0 1rem;
  border: none;
  border-bottom: 2px solid #ccc;
  cursor: text;
  font-size: ${(props) => `${props.size}rem`};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.mainPurple};
  }
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;

// container
export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// container
export const HorizontalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 600px;
  margin: 2.5rem;
`;

export const MainWrapper = styled.div`
  position: relative;
  margin: auto;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled.div`
  position: relative;
  padding: 0px 10px 0px 0px;
  &: hover {
    color: #1864ab;
    transform: scale(1.1);
  }
`;

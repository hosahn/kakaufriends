import styled from 'styled-components';

export const ChallengeContainer = styled.div`
  width: 70rem;
  height: 200px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.purple};
  overflow: auto;
  border-radius: 0.5rem;
  &::-webkit-scrollbar {
    width: 1rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
  }
`;

export const ChallengeCardWrapper = styled.div`
  width: 1000px;
  height: 50px;
  background-color: white;
  opacity: 0.6;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  align-items: center;
`;

export const BattlePassContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-left: ${(props) => `${props.margin}rem`};
  margin-right: ${(props) => `${props.margin}rem`};
  width: ${(props) => `${props.containerWdith}rem`};
`;

export const TitleWrap = styled.div`
  display: flex;
  font-size: 40px;
  font-family: 'EliceDigitalBaeum_Bold';
`;

export const ChallengeBtn = styled.label`
  font-size: 20px;
  background-color: white;
  font-family: 'EliceDigitalBaeum_Bold';
  padding: 9px;
  border: 1px solid #dee2e6;
  right: -430px;
  cursor: pointer;
`;

export const ChallengeTitle = styled.h1`
  font-size: 35px;
  font-family: 'IM_Hyemin-Bold';
  color: #495057;
  left: -440px;
`;

export const CardTitle = styled.h1`
  font-size: 40px;
  font-family: 'EliceDigitalBaeum_Bold';
  color: ${(props) => (props.lock === true ? '#495057' : '#1864ab')};
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 200px;
  text-align: center;
  background-color: #f1f3f5;
  border-radius: 1rem;
`;

export const ExplainContext = styled.div`
  font-size: 20px;
  font-weigth: 500;
  font-family: 'EliceDigitalBaeum';
  line-height: 25px;
  padding-top: 20px;
  h1 {
    font-size: 25px;
    margin-bottom: 10px;
    color: ${(props) => (props.lock === true ? '#495057' : 'black')};
  }
`;

export const StartBtn = styled.button`
  font-family: 'EliceDigitalBaeum';
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #37498a;
  color: white;
  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 70rem;
  margin: 15px 0px;
  padding: 5px;
`;

export const TargetImg = styled.img`
  padding: 10px;
  width: 250px;
  height: 200px;
  object-fit: fit;
  margin: 10px;
`;

import styled from "styled-components";

export const Loading = styled.h1`
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 190px;
`;
export const BackGroundContainer = styled.div`
  position: relative;
  margin: auto;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainContainers = styled.div`
  border-radius: 30px;
  opacity: 0.8;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 60px;
  width: 1200px;
  height: 900px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReportContainer = styled.div`
  width: 1169px;
  height: 387px;
  margin: auto;
  padding: 20px;
  top: 100px;
  left: 700px;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  ::after {
    background-color: ${({ theme }) => theme.color.white};
    z-index: -1;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 17.185px;
  }
`;

export const RDiaryText = styled.h3`
  position: absolute;
  width: 630px;
  height: 163px;
  left: 500px;
  top: 15px;
  font-family: "EliceDigitalBaeum_Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 39px;
  white-space: pre-wrap;
  color: #916bbf;
`;

export const RTimeText = styled.h3`
  position: absolute;
  width: 630px;
  height: 163px;
  left: 500px;
  top: 15px;
  font-family: "EliceDigitalBaeum_Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 32px;
  white-space: pre-wrap;
  color: #916bbf;
`;

export const RTitleWrap = styled.div`
  margin-top: 0px;
  display: flex;
`;

export const ReportTitle = styled.h1`
  top: 30px;
  font-size: 40px;
  font-family: "EliceDigitalBaeum_Bold";
  color: black;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  /* identical to box height */
  margin-top: 10px;
  color: #3d2c8d;
`;

export const DescTitle = styled.h1`
  top: 80px;
  font-size: 30px;
  font-family: "EliceDigitalBaeum_Bold";
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

export const ChallengeContainer = styled.div`
  width: 800px;
  max-height: 300px;
  margin: 30px;
  padding: 20px;
  top: 80px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 200px;
  z-index: 1;
  ::after {
    background-color: ${({ theme }) => theme.color.subPurple};
    z-index: -1;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
  }
  p {
    font-family: "EliceDigitalBaeum_Bold";
    font-size: 20px;
    color: #3d2c8d;
  }
`;

export const Quotation = styled.h1`
  top: 80px;
  font-size: 20px;
  font-family: "EliceDigitalBaeum_Bold";
  color: #3d2c8d;
  text-align: center;
`;

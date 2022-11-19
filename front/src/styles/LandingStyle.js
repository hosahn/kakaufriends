import styled, { keyframes } from 'styled-components';
import { Moon } from '@styled-icons/heroicons-solid/Moon';
import { PencilAlt } from '@styled-icons/fa-solid/PencilAlt';
import { HeartFill } from '@styled-icons/bootstrap/HeartFill';
import { MusicNoteList } from '@styled-icons/bootstrap/MusicNoteList';

export const MoonIcon = styled(Moon)`
  color: white;
  width: 250px;
  height: 250px;
  top: 100px;
  position: absolute;
  left: 190px;
  margin: auto;
  transition: all 0.8s ease-in-out;
  &:hover {
    color: yellow;
  }
`;

export const SportIcon = styled(MusicNoteList)`
  color: white;
  width: 100px;
  height: 100px;
  top: 680px;
  position: relative;
  left: 400px;
  margin: auto;
  transition: all 0.8s ease-in-out;
  &:hover {
    color: black;
  }
`;

export const HeartIcon = styled(HeartFill)`
  color: white;
  width: 100px;
  height: 100px;
  top: 700px;
  position: relative;
  left: 400px;
  margin: auto;
  transition: all 0.8s ease-in-out;
  &:hover {
    color: red;
  }
`;

export const ButtonDiv = styled.div`
  position: relative;
  margin: auto;
  top: 910px;
  width: 800px;
  height: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-auto-rows: auto;
`;

export const Quotation = styled.h1`
  top: 1050px;
  font-size: 32px;
  font-family: 'EliceDigitalBaeum_Bold';
  color: black;
  color: white;
  text-align: center;
  white-space: pre-wrap;
`;

export const PencilIcon = styled(PencilAlt)`
  color: white;
  width: 100px;
  height: 100px;
  top: 650px;
  position: relative;
  left: 400px;
  margin: auto;
  transition: all 0.8s ease-in-out;
  &:hover {
    color: black;
  }
`;

export const PencilText = styled.h1`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 38px;
  text-align: center;
  color: white;
  top: 590px;
  left: 100px;
  word-spacing: 10px;
  line-height: 39px;
  white-space: pre-wrap;
`;

export const SportText = styled.h1`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 38px;
  text-align: center;
  color: white;
  top: 600px;
  left: 100px;
  word-spacing: 10px;
  line-height: 39px;
  white-space: pre-wrap;
`;

export const EmotionText = styled.h1`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 38px;
  text-align: center;
  color: white;
  top: 620px;
  left: 80px;
  word-spacing: 10px;
  line-height: 39px;
  white-space: pre-wrap;
`;

export const ImageInput = styled.input`
  display: inline-flex;
  width: 30rem;
  height: 3rem;
  color: black;
  background: transparent;
  padding: 1rem;
  border: solid 1px #dbc7ff;
  border-radius: 1rem;
  outline: none;
  font-size: 1rem;
  cursor: text;
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;

export const JustifyContainer = styled.div`
  border-radius: 30px;
  opacity: 0.7;
  position: relative;
  margin: auto;
  top: 800px;
  width: 800px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-auto-rows: auto;
`;

export const GraphContainer = styled.div`
  border-radius: 30px;
  position: relative;
  margin: auto;
  top: 1200px;
  width: 900px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const WhyWe = styled.h1`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 50px;
  text-align: center;
  color: white;
  top: 500px;
  word-spacing: 30px;
`;

export const HeartText = styled.div`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 30px;
  top: ${(props) => props.Top};
  left: ${(props) => props.Left};
  white-space: nowrap;
  color: black;
  width: 50px;
  height: 50px;
  word-spacing: 10px;
`;

export const SocietyProblem = styled.h1`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 50px;
  text-align: center;
  color: white;
  top: 1100px;
  word-spacing: 30px;
`;
export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 420vh;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #09203f 0%, #537895 100%);
`;
export const HeartEmotion = styled(HeartFill)`
  width: 80px;
  height: 80px;
  color: ${(props) => props.HeartColor};
  position: absolute;
  top: ${(props) => props.Top};
  left: ${(props) => props.Left};
  margin: auto;
`;

export const LogoContainer = styled.div`
  position: relative;
  height: 50vh;
  width: 80vh;
  margin: auto;
`;

export const Title = styled.h1`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 80px;
  text-align: center;
  color: white;
  top: 660px;
  word-spacing: 10px;
`;
export const Explanation = styled.h1`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 64px;
  text-align: center;
  color: white;
  top: 500px;
  word-spacing: 30px;
`;

export const Note = styled.div`
  width: 48px;
  padding: 50px;
  border: 5px solid white;
  margin: auto;
  position: absolute;
  top: 480px;
  right: 504px;
`;

export const Note1 = styled.div`
  width: 48px;
  padding: 50px;
  border: 5px solid white;
  margin: auto;
  position: absolute;
  top: 480px;
  right: 399px;
`;

export const Note3 = styled.div`
  width: 46px;
  padding: 50px;
  border: 5px solid white;
  margin: auto;
  position: absolute;
  top: 480px;
  right: 294px;
`;
export const Note4 = styled.div`
  width: 48px;
  padding: 50px;
  border: 5px solid white;
  margin: auto;
  position: absolute;
  top: 480px;
  right: 189px;
`;

export const Note5 = styled.div`
  width: 48px;
  padding: 50px;
  border: 5px solid white;
  margin: auto;
  position: absolute;
  top: 480px;
  right: 83px;
`;

export const Note6 = styled.div`
  width: 48px;
  padding: 50px;
  border: 5px solid white;
  margin: auto;
  position: absolute;
  top: 480px;
  right: -22px;
`;

export const REmotionText = styled.h3`
  position: absolute;
  width: 630px;
  height: 163px;
  left: 500px;
  top: 15px;
  font-family: 'EliceDigitalBaeum_Bold';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 39px;
  white-space: pre-wrap;
  color: white;
`;

export const RSocialText = styled.h3`
  position: absolute;
  width: 630px;
  height: 163px;
  left: 500px;
  top: 270px;
  font-family: 'EliceDigitalBaeum_Bold';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 39px;
  white-space: pre-wrap;
  color: white;
`;

export const LineOne = styled.div`
  width: 750px;
  height: 4px;
  left: -65px;
  background-color: white;
  position: absolute;
  top: 459px;
`;
export const LineTwo = styled.div`
  width: 750px;
  height: 4px;
  left: -65px;
  background-color: white;
  position: absolute;
  top: 586px;
`;

export const LineThree = styled.div`
  width: 750px;
  height: 4px;
  left: -65px;
  background-color: white;
  position: absolute;
  top: 480px;
`;

export const LineFour = styled.div`
  width: 750px;
  height: 4px;
  left: -65px;
  background-color: white;
  position: absolute;
  top: 607px;
`;

const boxFade = keyframes`
0%
{
    transform: rotate(315deg) translateX(0);
    opacity: 1;
}
70%
{
    opacity: 1;

}
100%
{
    transform: rotate(315deg) translateX(-1400px);
    opacity: 0;

}
  `;

export const StarFalling = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
  animation: ${boxFade} 50s linear infinite;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
  }

  &:nth-child(1) {
    top: 10px;
    right: 0px;
    left: initial;
    animation-delay: 0;
    animation-duration: 1s;
  }
  &:nth-child(2) {
    top: 10;
    right: 80px;
    left: initial;
    animation-delay: 0.2s;
    animation-duration: 3s;
  }
  &:nth-child(3) {
    top: 80px;
    right: 10px;
    left: initial;
    animation-delay: 0.4s;
    animation-duration: 2s;
  }
  &:nth-child(4) {
    top: 10px;
    right: 180px;
    left: initial;
    animation-delay: 0.6s;
    animation-duration: 1.5s;
  }
  &:nth-child(5) {
    top: 10px;
    right: 400px;
    left: initial;
    animation-delay: 0.8s;
    animation-duration: 2.5s;
  }
  &:nth-child(6) {
    top: 10px;
    right: 500px;
    left: initial;
    animation-delay: 1s;
    animation-duration: 3s;
  }
  &:nth-child(7) {
    top: 200px;
    right: 10px;
    left: initial;
    animation-delay: 1s;
    animation-duration: 1.75s;
  }
  &:nth-child(8) {
    top: 10px;
    right: 500px;
    left: initial;
    animation-delay: 1.4s;
    animation-duration: 1.25s;
  }
  &:nth-child(9) {
    top: 10px;
    right: 600px;
    left: initial;
    animation-delay: 0.75s;
    animation-duration: 2.25s;
  }
  &:nth-child(10) {
    top: 10px;
    right: 600px;
    left: initial;
    animation-delay: 2.75s;
    animation-duration: 2.25s;
  }
`;

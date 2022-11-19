import styled from 'styled-components';

export const ImgIconWrapper = styled.div`
  position: absolute;
  color: white;
  font-size: 20px;
  top: 70px;
  width: 10px;
  cursor: pointer;
  margin-left: 130px;
  :hover {
    color: #495057;
  }
`;

export const EditIconWrapper = styled.div`
  position: absolute;
  color: gray;
  font-size: 20px;
  top: 250px;
  left: 40px;
  width: 10px;
  cursor: pointer;
  margin-left: 150px;
  z-index: 99;
  :hover {
    color: #495057;
  }
`;

export const ColorIconWrapper = styled.div`
  position: absolute;
  color: white;
  font-size: 20px;
  top: 210px;
  left: 40px;
  width: 10px;
  cursor: pointer;
  margin-left: 150px;
  z-index: 99;
  :hover {
    color: #495057;
  }
`;

export const TagContainer = styled.div`
width:220px;
height:280px;
transform: translate(-50%, -50%);
margin-bottom: 20px;
top:50%;
left: 50%;  
background: ${(prop) => prop.color};
border-radius: 20px 16px 12px 32px;
background-image: linear-gradient(to right,#FCF8E8 48px,  50px, transparent 50px);  
}
:after{
    height: 35px;
    width: 200px; 
    bottom: 6px;
    right:0px;
    background: white;
    border-radius: 32px 4px 4px 32px;
    box-shadow: inset 4px 6px 0px 0px #E4E0CE;   // 수정 XX 
    background-image: linear-gradient(to bottom, transparent 6px, #FCF8E8 8px, transparent 8px, transparent 12px, #E4E0CE 12px, transparent 14px, transparent 18px,#E4E0CE 18px, transparent 20px, transparent 24px, #E4E0CE 24px, transparent 26px, transparent 30px, #E4E0CE 30px, transparent 32px, transparent 36px, #E4E0CE 36px, transparent 38px, transparent 42px, #E4E0CE 42px, transparent 44px, transparent 48px, #E4E0CE 48px, transparent 50px);     
}
:before{
    height: 10px;
    width: 160px; 
    right: 40px;
    top: 60px; 
    background:#FCF8E8;
    border-radius: 20px;
}

`;

export const ContenstContainer = styled.div`
  display: grid;
  place-content: center center;
  gap: 30px;
  margin-left: 20px;
`;

export const ImageWrapper = styled.div`
  positon: relative;
  width: 160px;
  height: 100px;
  border-radius: 10px;
  margin-left: 13px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TitleWrapper = styled.div`
  width: 140px;
  height: 40px;
  border-radius: 10px;
  margin-top: 30px;
  text-align: center;
  padding-top: 6px;
  span {
    font-size: 25px;
    font-family: 'KyoboHand';
    color: #1864ab;
  }
`;

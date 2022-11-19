import styled from 'styled-components';

export const EmotionCard = styled.button`
  height: 170px;
  width: 200px;
  display: grid;
  border-radius: 10px;
  border: 7px solid;
  background-color: white;
  padding: 20px 20px;
  margin-bottom: 20px;
  border-color: ${(props) => {
    switch (props.emotion) {
      case '행복':
        return '#FFEC99';
      case '슬픔':
        return '#A5D8FF';
      case '불안':
        return '#FFD6A5';
      case '분노':
        return '#FFADAD';
      case '놀람':
        return '#BDB2FF';
      case '평범':
        return '#D8F5A2';
      default:
        return 'white';
    }
  }};
`;

export const Title = styled.div`
  font-family: 'EliceDigitalBaeum';
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 70px;
  background-color: #f1f3f5;
  border-radius: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임 적용 */
`;

export const DiaryDate = styled.span`
  font-family: 'EliceDigitalBaeum';
  font-weight: bold;
  font-size: 10px;
`;

export const DateWrapper = styled.div`
  float: right;
  margin-left: 70px;
`;

export const BtnContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 20px;
  margin-right: 200px;
  margin-left: 200px;
  padding-bottom: 1px;
  weight: 800px;
  border-bottom: solid 1px #ced4da;
`;

export const EmotionBtn = styled.button`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 18px;
  color: ${(props) => (props.state === false ? '#365885' : '#868e96')};
  margin-right: 50px;
  padding-bottom: 10px;
  border-bottom: ${(props) => (props.state === false ? ' #365885' : '')};
  border-bottom: ${(props) => (props.state === false ? ' solid 3px' : '')};
`;

export const TagBtn = styled.button`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 18px;
  color: ${(props) => (props.state === true ? '#365885' : '#868e96')};
  margin-right: 50px;
  padding-bottom: 10px;
  border-bottom: ${(props) => (props.state === true ? ' #365885' : '')};
  border-bottom: ${(props) => (props.state === true ? ' solid 3px' : '')};
`;

export const BoardContainer = styled.div`
  margin-right: 200px;
  margin-left: 200px;
`;

export const ViewContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 200px;
  margin-right: 200px;
  margin-left: 200px;
`;

export const TiteWrapper = styled.div`
  margin-bottom: 30px;
  margin-left: 10px;
  border-bottom: solid 2px #ced4da;
  display: flex;
  flex-direction: rows;
  width: 100%;
`;

export const TagWrapper = styled.div`
  margin-bottom: 30px;
  margin-left: 10px;
`;

export const ContentWrapper = styled.div`
  min-height: 500px;
  background-color: white;
  margin-bottom: 20px;
  padding: 20px 30px;
  border-radius: 20px;
`;

export const DiaryTitle = styled.span`
  font-size: 35px;
  font-family: 'InfinitySans-RegularA1';
`;

export const DiaryTag = styled.span`
  font-size: 20px;
  font-family: 'EliceDigitalBaeum';
`;

export const IconWrapper = styled.div`
  font-size: 15px;
  color: #495057;
  cursor: pointer;
  float: right;
`;

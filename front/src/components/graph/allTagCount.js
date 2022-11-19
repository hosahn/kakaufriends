import styled from 'styled-components';
import images from '../../assets/images';

const FirstPlacePic = styled.img`
  position: absolute;
  width: 240px;
  height: 240px;
  top: 0px;
  left: 0px;
`;

const FirstPlace = styled.div`
  position: absolute;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
`;

const FirstPlaceTag = styled.h1`
  white-space: nowrap;
  position: absolute;
  top: 230px;
  left: 100px;
  right: 20px;
  font-size: 24px;
  font-family: 'EliceDigitalBaeum_Bold';
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

const FirstPlaceCount = styled.h2`
  white-space: nowrap;
  position: absolute;
  top: 260px;
  left: 100px;
  right: 20px;
  font-size: 24px;
  font-family: 'EliceDigitalBaeum_Bold';
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

const SecondPlace = styled.div`
  position: absolute;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
`;

const SecondPlacePic = styled.img`
  position: absolute;
  width: 240px;
  height: 240px;
  top: 0px;
  left: 340px;
`;
const SecondPlaceTag = styled.h1`
  white-space: nowrap;
  position: absolute;
  top: 230px;
  left: 440px;
  right: 20px;
  font-size: 24px;
  font-family: 'EliceDigitalBaeum_Bold';
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

const SecondPlaceCount = styled.h2`
  white-space: nowrap;
  position: absolute;
  top: 260px;
  left: 440px;
  right: 20px;
  font-size: 24px;
  font-family: 'EliceDigitalBaeum_Bold';
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

const ThirdPlace = styled.div`
  position: absolute;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
`;

const ThirdPlacePic = styled.img`
  position: absolute;
  width: 240px;
  height: 240px;
  top: 0px;
  left: 690px;
`;
const ThirdPlaceTag = styled.h1`
  white-space: nowrap;
  position: absolute;
  top: 230px;
  left: 790px;
  right: 20px;
  font-size: 24px;
  font-family: 'EliceDigitalBaeum_Bold';
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

const ThirdPlaceCount = styled.h2`
  white-space: nowrap;
  position: absolute;
  top: 260px;
  left: 790px;
  right: 20px;
  font-size: 24px;
  font-family: 'EliceDigitalBaeum_Bold';
  color: black;
  color: #3d2c8d;
  text-align: center;
`;

const TagRanking = (props) => {
  const data = props.data;

  return (
    <>
      {data
        .filter((it) => it.tag.length !== 0)
        .map((it, index) =>
          index === 0 ? (
            <>
              <FirstPlace>
                <FirstPlacePic src={images.Gold} />
                <FirstPlaceTag>{`${it.tag}`}</FirstPlaceTag>
                <FirstPlaceCount>{`${it.count}개`}</FirstPlaceCount>
              </FirstPlace>
            </>
          ) : index === 1 ? (
            <>
              <SecondPlace>
                <SecondPlacePic src={images.Silver} />
                <SecondPlaceTag>{`${it.tag}`}</SecondPlaceTag>
                <SecondPlaceCount>{`${it.count}개`}</SecondPlaceCount>
              </SecondPlace>
            </>
          ) : (
            <>
              <ThirdPlace>
                <ThirdPlacePic src={images.Broze} />
                <ThirdPlaceTag>{`${it.tag}`}</ThirdPlaceTag>
                <ThirdPlaceCount>{`${it.count}개`}</ThirdPlaceCount>
              </ThirdPlace>
            </>
          )
        )}
    </>
  );
};

export default TagRanking;

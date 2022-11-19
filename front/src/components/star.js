import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Star = (props) => {
  const { emotion } = props;
  return (
    <StarWrapper emotion={emotion} onClick={props.onClick} id={props.diaryId}>
      <FontAwesomeIcon icon={faStar} className="user" />
    </StarWrapper>
  );
};

export default Star;

const StarWrapper = styled.div`
  font-size: 70px;
  cursor: pointer;
  color: ${(props) => {
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

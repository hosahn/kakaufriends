const getDate = (props) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[new Date(props).getDay()];
  return dayOfWeek;
};

export default getDate;

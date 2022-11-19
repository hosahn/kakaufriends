const changeUtc = (date) => {
  let localDate = new Date(date);

  let getMonth = (localDate.getMonth() + 1).toString();
  if (getMonth.length === 1) {
    getMonth = '0' + getMonth;
  }

  let getDate = localDate.getDate().toString();
  if (getDate.length === 1) {
    getDate = '0' + getDate;
  }

  let getHours = localDate.getHours().toString();
  if (getHours.length === 1) {
    getHours = '0' + getHours;
  }

  let getMinutes = localDate.getMinutes().toString();
  if (getMinutes.length === 1) {
    getMinutes = '0' + getMinutes;
  }

  let checkDate = localDate.getFullYear() + getMonth + getDate;

  let viewDate = localDate.getFullYear() + '-' + getMonth + '-' + getDate;

  return { checkDate, viewDate };
};

export default changeUtc;

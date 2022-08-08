const dateFormat = (date) => {
  const { year } = date;
  const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = monthArr[date.month];
  const daysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const WeekDay = daysArr[date.weekday];
  const day = date.day.toString().padStart(2, '0');
  let dayNo;
  if (day === 1) {
    dayNo = 'st';
  } else if (day === 2) {
    dayNo = 'nd';
  } else if (day === 3) {
    dayNo = 'rd';
  } else {
    dayNo = 'th';
  }
  let hour = date.hour % 12 || 12;
  hour = hour.toString().padStart(2, '0');
  const minute = date.minute.toString().padStart(2, '0');
  const sec = date.second.toString().padStart(2, '0');
  const time = date.hour < 12 ? 'AM' : 'PM';

  return `(${WeekDay}) ${day}${dayNo} ${month} ${year}, ${hour}:${minute}:${sec}  ${time}`;
};

export default dateFormat;
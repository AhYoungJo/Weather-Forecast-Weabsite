const currentDate = new Date(); // 현재 날짜와 시간을 가져옴

// 현재 날짜를 YYYY-MM-DD 형식의 문자열로 변환
const year = currentDate.getFullYear();
const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 1을 더하고 두 자리로 만듦
const day = ('0' + currentDate.getDate()).slice(-2); // 일자도 두 자리로 만듦
export const currentDateString = `${year}-${month}-${day}`;

// 현재 시간을 HH 형식의 문자열로 변환
const hours = ('0' + currentDate.getHours()).slice(-2); // 시간도 두 자리로 만듦
export const currentTimeString = `${hours}`;

const tomorrowDate = new Date(currentDate);
tomorrowDate.setDate(tomorrowDate.getDate() + 1);
const tomorrowYear = tomorrowDate.getFullYear();
const tomorrowMonth = ('0' + (tomorrowDate.getMonth() + 1)).slice(-2);
const tomorrowDay = ('0' + tomorrowDate.getDate()).slice(-2);
export const tomorrowDateString = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`;
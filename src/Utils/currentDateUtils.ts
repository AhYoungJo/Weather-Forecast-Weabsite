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

const thirdDate = new Date(currentDate);
thirdDate.setDate(thirdDate.getDate() + 2);
const thirdYear = thirdDate.getFullYear();
const thirdMonth = ('0' + (thirdDate.getMonth() + 1)).slice(-2);
const thirdDay = ('0' + thirdDate.getDate()).slice(-2);
export const thirdDateString = `${thirdYear}-${thirdMonth}-${thirdDay}`;

const fourthDate = new Date(currentDate);
fourthDate.setDate(fourthDate.getDate() + 3);
const fourthYear = fourthDate.getFullYear();
const fourthMonth = ('0' + (fourthDate.getMonth() + 1)).slice(-2);
const fourthDay = ('0' + fourthDate.getDate()).slice(-2);
export const fourthDateString = `${fourthYear}-${fourthMonth}-${fourthDay}`;

const fifthDate = new Date(currentDate);
fifthDate.setDate(fifthDate.getDate() + 4);
const fifthYear = fifthDate.getFullYear();
const fifthMonth = ('0' + (fifthDate.getMonth() + 1)).slice(-2);
const fifthDay = ('0' + fifthDate.getDate()).slice(-2);
export const fifthDateString = `${fifthYear}-${fifthMonth}-${fifthDay}`;

const sixthdDate = new Date(currentDate);
sixthdDate.setDate(sixthdDate.getDate() + 5);
const sixthYear = sixthdDate.getFullYear();
const sixthMonth = ('0' + (sixthdDate.getMonth() + 1)).slice(-2);
const sixthDay = ('0' + sixthdDate.getDate()).slice(-2);
export const sixthdDateString = `${sixthYear}-${sixthMonth}-${sixthDay}`;
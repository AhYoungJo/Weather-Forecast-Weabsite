export var nConytol;
/*
* 날씨 변수
*/
export const sunny = "1"; // 맑음
export const many_cloudy = "3"; // 구름많음
export const cloudy = "4"; // 흐림

export const none = "0"; // 없음
export const rain = "1"; // 비
export const snow_rain = "2"; // 비/눈
export const snow = "3"; // 눈
export const shower = "4"; // 소나기
export const raindrop = "5"; // 빗방울
export const raindrop_blowingsnow = "6"; // 빗방울/눈날림
export const blowingsnow = "7"; // 눈날림
/*
*  날짜 변수
*/
export var now = new Date();

export var year = now.getFullYear();
export var month = ('0' + (now.getMonth() + 1)).slice(-2);
export var day = ('0' + now.getDate()).slice(-2);
export var dateString = year+ month + day;
/*
* 시간 변수
*/
export var hours = ('0' + now.getHours()).slice(-2);
export var minutes = ('0' + now.getMinutes()).slice(-2);
export var seconds = ('0' +now.getSeconds()).slice(-2);
/*
* 30분 무조건 붙이기
*/
export function time(){
// console.log(minutes);
	if (minutes > "30"){
		return hours + "30";
	}else {
		var getHoursTime = now.getHours() - 1;
		var setHoursTime = ('0' + getHoursTime).slice(-2);
		return  setHoursTime +"30";
	}
}
/*
* 정시로만 만들기
*/
export function fixed_time(){
	if (minutes > "30"){
		return now.getHours() + 1;
	}else {
		return hours;
	}
}


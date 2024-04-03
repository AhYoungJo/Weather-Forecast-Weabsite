// function weather_data(data){
//     // console.log(data)
// var index = 0;
// var index1 = 0;

// if (data.response.header.resultMsg == '파라미터가 잘못되엇습니다.'){ // 국내 외에 다른지역을 찍을경우 오류코드
// $('#weatherData_table').hide(); //숨기기

// }else {
// let len = data.response.body.items.item.length;

// for( let i=0; i<len; i++ ) {
// const weatherData = data.response.body.items.item[i];

// if (weatherData.category== "T1H" || weatherData.category=="SKY"|| weatherData.category=="PTY") {
// var time_weather = weatherData.fcstTime.slice(0, -2);
// var t1h =''; // 기온
// var sky = ''; // 하늘
// var pty = ''; // 강수형태

// switch (weatherData.category){
//   case "T1H": // 기온
//     t1h = weatherData.fcstValue + "℃";
//     break;
//   case "SKY": // 하늘
//     switch (weatherData.fcstValue) {
//       case sunny: // 맑음
//         if ("06" < time_weather < "18") {
//           sky = "<a><img alt='맑음' src='/images/sunny.png' height='45px' title='맑음'/></a>";
//         } else {
//           sky = "<a><img alt='맑음_저녁' src='/images/clear_night.png' height='45px' title='맑음'/></a>";
//         }
//         break;
//       case many_cloudy: // 구름많음
//         if ("06" < time_weather < "18") {
//           sky = "<a><img alt='구름많음' src='/images/many+cloudy.png' height='45px' title='구름많음'/></a>";
//         } else {
//           sky = "<a><img alt='구름많음_저녁' src='/images/many+cloudy_night.png' height='45px' title='구름많음'></a>";
//         }
//         break;
//       case cloudy: // 흐림
//         if ("06" < time_weather < "18") {
//           sky = "<a><img alt='흐림' src='/images/cloudy.png' height='45px' title='흐림'/></a>";
//         } else {
//           sky = "<a><img alt='흐림_저녁' src='/images/cloudy_night.png' height='45px' title='흐림'/></a>";
//         }
//         break;
//       default:
//         sky = "알수 없는 값입니다.";
//     }
//     break;
//   case "PTY": // 강수형태
//     switch (weatherData.fcstValue){
//       case none:
//         pty = "없음";
//         break;
//       case rain: // 비
//         if("06" < time_weather < "18"){
//           pty = "<a><img alt='비' src='/images/rain.png' height='45px' title='비'/></a>";
//         }else {
//           pty = "<a><img alt='비' src='/images/rain_night.png' height='45px' title='비'/></a>";
//         }
//         break;
//       case snow_rain: // 비/눈
//         if("06" < time_weather < "18"){
//           pty = "<a><img alt='비/눈' src='/images/snow+rain.png' height='45px' title='비/눈'/></a>";
//         }else {
//           pty = "<a><img alt='비/눈' src='/images/snow+rain_night.png' height='45px' title='비/눈'/></a>";
//         }
//         break;
//       case snow: // 눈
//         if("06" < time_weather < "18"){
//           pty = "<a><img alt='눈' src='/images/snow.png' height='45px' title='눈'/></a>";
//         }else {
//           pty = "<a><img alt='눈' src='/images/snow_night.png' height='45px' title='눈'/></a>";
//         }
//         break;
//       case shower: // shower
//         if("06" < time_weather < "18"){
//           pty = "<a><img alt='소나기' src='/images/shower.png' height='45px' title='소나기'/></a>";
//         }else {
//           pty = "<a><img alt='소나기' src='/images/shower.png' height='45px' title='소나기'/></a>";
//         }
//         break;
//       case raindrop: // 빗방울
//         if("06" < time_weather < "18"){
//           pty = "<a><img alt='빗방울' src='/images/raindrop.png' height='45px' title='빗방울'/></a>";
//         }else {
//           pty = "<a><img alt='빗방울' src='/images/raindrop_night.png' height='45px' title='빗방울'/></a>";
//         }
//         break;
//       case raindrop_blowingsnow: // 빗방울/눈날림
//         if("06" < time_weather < "18"){
//           pty = "<a><img alt='빗방울/눈날림' src='/images/raindrop+blowingsnow.png' height='45px' title='빗방울/눈날림'/></a>";
//         }else {
//           pty = "<a><img alt='빗방울/눈날림' src='/images/raindrop+blowingsnow_night.png' height='45px' title='빗방울/눈날림'/></a>";
//         }
//         break;
//       case blowingsnow: // 눈날림
//         if("06" < time_weather < "18"){
//           pty = "<a><img alt='눈날림' src='/images/blowingsnow.png' height='45px' title='눈날림'/></a>";
//         }else {
//           pty = "<a><img alt='눈날림' src='/images/blowingsnow_night.png' height='45px' title='눈날림'/></a>";
//         }
//         break;
//       default:
//         pty = "알수 없는 값 입니다";
//     }
//     break;
//   default:
//     t1h = "알수 없는 값입니다.";
//     sky = "알수 없는 값입니다.";
//     pty = "알수 없는 값입니다.";
// }
// // console.log("index : " +index +":"+t1h);

// $('#weatherData_table').show();
// if ( t1h != '' ) {
//   $("#hour"+index).html(t1h);
//   $("#aaa"+index).html(time_weather);
//   index++;

// }
// if ( sky != '' ) {
//   $("#nnn"+index1).html(sky);
//   index1++;
// }


// }


// }
// }
// }
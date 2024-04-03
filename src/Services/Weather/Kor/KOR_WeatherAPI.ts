export const msg = 'this is none';


// import dfs_xy_conv from './Grid';
// import { useSelector, useDispatch } from 'react-redux';
// import React, { useEffect, useState } from 'react';
// import { RootState } from '../../../Store/Data/Reducers'
// import {dateString, time} from '../../../Utils/weatherUtil'


// /*
// * 동네 예보
// */
// const api_forecast: React.FC = ()  => {

//     const {latitude, longitude} = useSelector((state: RootState) => state.location)
//     // 여기서 위도경도를 좌표로 바꿔주도록 한다
//     useEffect(() => {
//         var grid = dfs_xy_conv("toXY", latitude, longitude);
//         var url = new URL("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst");
//         var params = {
//           serviceKey: '${key_weather}',
//           pageNo: 1,
//           numOfRows: 60, // 10개의 카테고리에서 6개씩 나옴
//           dataType: 'json',
//           base_date: dateString,
//           base_time: time(),
//                           // 변환된 정보를 넣어준다
//           nx: grid.x,
//           ny: grid.y,
//         }
//         url.search = new URLSearchParams(params).toString();
//         fetch(decodeURI(url)) // url 입력, GET메서드임
//           .then(res => {
//           // console.log(res);
//           // response 처리
//           // 응답을 JSON 형태로 파싱
//           return res.json();
//         })
//           .then(data => {
//           weather_data(data);
//           //console.log(data);
//         })
//           .catch(err => {
//           // error 처리
//           console.log('Fetch Error', err);
//         });
//     }, [])
// }

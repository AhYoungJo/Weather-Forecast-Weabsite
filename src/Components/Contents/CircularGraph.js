import React from 'react';
import { Doughnut } from "react-chartjs-2"
import styled from 'styled-components';

//오류 해결법
import { Chart, ArcElement } from "chart.js"
Chart.register(ArcElement)

//import 'chart.js/auto'; 이거는 chart.js에서 사용하지 않는 것도 가져오게 돼서 번들러 크기가 커지는 방법


//오류
//react-chartjs-2 with chartJs 3: Error "arc" is not a registered element
//react-chartjs-2 with chartJs 3: "arc" 오류는 등록된 요소가 아닙니다.

//Chart.js는 chart.js V3부터 treeshakable이므로 사용 중인 모든 요소를 가져오고 등록해야 한다.
//공식 문서:
// v4 of this library, just like Chart.js v3, is tree-shakable. It means that you need to import and register the controllers, elements, scales, and plugins you want to use.
// For a list of all the available items to import, see Chart.js docs.
// 도넛 그래프는 리니얼 그래프랑 다르게 누락된 부분을 추가해줘야 하나봄import CircularGraph from './CircularGraph';


// const CircularGraph = ({humidityRate, labelData}) => {

 
//     const RightContainer = styled.div`
//         width: 700px;
//         height: 690px;
//         position: absolute;
//         right: 0px;
//         background-color: skyblue;
//     `

//     const expData = {
//         labels: ["대기","습도"],
//         datasets: [
//           {
//             labels: ["대기", "습도"],
//             data: [40, 60],
//             borderWidth: 2,
//             hoverBorderWidth: 3,
//             backgroundColor: [
//               "rgba(238, 102, 121, 1)",
//               "rgba(98, 181, 229, 1)",
//               "rgba(255, 198, 0, 1)",
//             ],
//             fill: true,
//           },
//         ],
//       }

//     return (
//         <Doughnut
//         options={{
//                 responsive: true,
//              maintainAspectRatio: false,
//              legend: {
//                 display: true,
//                 position: "right",
//                },
//             }}
//          data={expData}
//          style={{
//              position: "relative",
//              right: "0px",
//           }}
//      />
//     );
// };

// export default CircularGraph;


const CircularGraph = '';
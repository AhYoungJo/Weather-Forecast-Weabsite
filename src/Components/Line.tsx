import React, {useEffect} from 'react';
// import { UseSelector } from 'react-redux';
// import { RootState } from '../Store/Data/Reducers';
// // import {Line} from 'react-chartjs-2';
// import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend} from 'chart.js'
// import { Background } from '../Styles/Styles';
// import styled from 'styled-components';

// // interface Props {
// //     weatherData: //날씨 데이터
// // }

// ChartJS.register(
//     CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend
// )

// const data = {
//     lables: ['Red', 'Blue', 'Yellow'],
//     datasets: [
//         {
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             BackgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 165, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//             ],
//             bordrWidth: 1,
//         },
//     ],
// };

// const options = {
//     scales: {
//         yAxes: [
//             {
//                 ticks: {
//                     beginAtZero: true,
//                 }
//             }
//         ]
//     }
// }

// const chartWrapper = styled.div`
//     max-width: 700px;
//     margin: 0 auto;
// `

// const LineGraph: React.FunctionComponent<Props> = ({timesByDate}) => {
//     const generateLineData = () => {
//         const data: number[] = [];
//         const labels: string[] = [];
//         for(let i = 0; i < 8; i++) {
//             // data.push({timesByDate[Object.keys(timesByDate)[0]][i].temp})
//             labels.push({timesByDate[Object.keys(timesByDate)[0]][i].time})
//         }

//     }
//     return <Line type='line' data={data} options={options} />;
// }

const Line = () => {
    return (
        <div>
            
        </div>
    );
};

export default Line;
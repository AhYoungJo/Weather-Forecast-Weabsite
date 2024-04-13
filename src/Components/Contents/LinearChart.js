import React from 'react';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Legend,
    Tooltip
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale, 
    LinearScale, 
    PointElement,
    Legend,
    Tooltip
)

const LinearChart = ({tempData, labelData}) => {
    const data = {
        labels: labelData,
        datasets: [
            {
                label: '시간별 기온',
                data: tempData,
                backgroundColor: '#ffffff',
                borderColor: '#f3c0d0',
                pointBorderColor: '#f79d9d',
                fill: true,
                tension: 0.4
            }
        ]
    }

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                // min: 3,
                // max: 9
            }
        }
    }

    return (
                <Line
                    data = {data}
                    options = {options}
                ></Line>
                
     
    );
};

export default LinearChart;
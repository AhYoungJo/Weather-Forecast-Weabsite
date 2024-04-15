import React from 'react';
import {TimeData, DailyWeatherProps} from '../../Store/Type/Interface';
import LinearChart from './LinearChart';



const DailyWeather: React.FC<DailyWeatherProps> = ({todayDateData}) => {
    const tempData = todayDateData.map((data: TimeData) => data.temp);
    const labelData = todayDateData.map((data: TimeData) => `${data.time}시`);
    return (
        <>
        <div className='Main__body__dailyWeather__Body'>
            <div className='Main__body__dailyWeather__Body__Chart'>
                <LinearChart tempData={tempData} labelData={labelData}/>
            </div>
        </div>
        </>
    );
};

export default DailyWeather;
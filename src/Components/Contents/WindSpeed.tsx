import React from 'react';
import {TimeData, DailyWeatherProps} from '../../Store/Type/Interface';

const WindSpeed: React.FC<DailyWeatherProps> = ({todayDateData, tomorrowSlicedData}) => {
    return (
        <div className='Main__body__dailyWeather__WindSpeed'>
        <div>
        <p>풍속 m/s</p>
        </div>
        <div className='Main__body__dailyWeather__WindSpeed__S'></div>
    </div>
    );
};

export default WindSpeed;
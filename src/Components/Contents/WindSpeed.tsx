import React from 'react';
import {TimeData, DailyWeatherProps} from '../../Store/Type/Interface';

const WindSpeed: React.FC<DailyWeatherProps> = ({todayDateData, tomorrowSlicedData}) => {
    return (
        <div className='Main__body__dailyWeather__WindSpeed'>
        <p>풍속 m/s</p>
            {todayDateData && tomorrowSlicedData? (
                <div className='Main__body__dailyWeather__WindSpeed__Inner'>
                        {todayDateData.map((data: TimeData, index: number) => (
                            <div key={index + data.windspeed}>
                                <li>{data.windspeed}</li>
                            </div>
                        ))}
                        {tomorrowSlicedData.length > 0 && tomorrowSlicedData.map((data: TimeData, index: number) => (
                            <div key={index + data.windspeed}>
                                <li>{data.windspeed}</li>
                            </div>
                        ))}
                </div>
                ) : (
                    <div>Loading...</div>
                )}
    </div>
    );
};

export default WindSpeed;
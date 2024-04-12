import React from 'react';
import {TimeData, DailyWeatherProps} from '../../Store/Type/Interface';


const DailyWeather: React.FC<DailyWeatherProps> = ({todayDateData, tomorrowSlicedData}) => {
    return (
        <div className='Main__body__dailyWeather__body'>
                            {todayDateData && tomorrowSlicedData? (
                                <>
                                    {todayDateData.map((data: TimeData, index: number) => (
                                        <div key={index}>
                                            <li>💧{data.pop}%</li>
                                            <li><img src={data.icon} alt='weatherIcon'/></li>
                                            <li>{data.time}시</li>
                                        </div>
                                    ))}
                                    {tomorrowSlicedData.length > 0 && tomorrowSlicedData.map((data: TimeData, index: number) => (
                                        <div key={index}>
                                            <li>💧{data.pop}%</li>
                                            <li><img src={data.icon} alt='weatherIcon'/></li>
                                            <li>{data.time}시</li>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div>Loading...</div>
                            )}
        </div>
    );
};

export default DailyWeather;
import React from 'react';
import { WindDegreeStyle } from '../../Styles/Styles';
import {TimeData, DailyWeatherProps} from '../../Store/Type/Interface';

const WindDegree: React.FC<DailyWeatherProps> = ({todayDateData, tomorrowSlicedData}) => {
    return (
        <>
        <p className='Main__body__dailyWeather__WindDegTitle'>풍향</p>
        <div className='Main__body__dailyWeather__WindDeg'>
            <div className='Main__body__dailyWeather__WindDeg__Bg'></div>
            <div className='Main__body__dailyWeather__WindDeg__Bg2'></div>
            
        {todayDateData && tomorrowSlicedData? (
                <div className='Main__body__dailyWeather__WindDeg__Icon'>
                {todayDateData.map((data: TimeData, index: number) => (
                    <div key={index + data.windgust}>
                         <li>{data.windgust * 10}°</li>
                        <li>
                            <WindDegreeStyle degree={data.windgust * 10}>
                                <img src="https://img.icons8.com/color/48/000000/near-me--v1.png" alt='degIcon' />
                            </WindDegreeStyle>
                        </li>
                    </div>
                ))}
                {tomorrowSlicedData.length > 0 && tomorrowSlicedData.map((data: TimeData, index: number) => (
                    <div key={index + data.windgust}>
                        <li>{data.windgust * 10}°</li>
                        <li>
                            <WindDegreeStyle degree={data.windgust * 10}>
                                <img src="https://img.icons8.com/color/48/000000/near-me--v1.png" alt='degIcon' />
                            </WindDegreeStyle>
                        </li>
                    </div>
                ))}
                </div>
        ) : (
            <div>Loading...</div>
        )}
        </div>
        </>
    );
};

export default WindDegree;

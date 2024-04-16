import React from 'react';
import { DailyHeadProps } from '../../Store/Type/Interface';
import { getMaxTemp, getMinTemp } from '../../Utils/WeatherUitl';
import {HPAFStyle, HPAFDiv } from '../../Styles/Styles';

const HPAF: React.FC<DailyHeadProps> = ({todayDateData}) => {
    const pressure = (todayDateData && todayDateData[0] && todayDateData[0].pressure) || 'load';
    const humidity = (todayDateData && todayDateData[0] && todayDateData[0].humidity) || 'load';
    const feelsLike = (todayDateData && todayDateData[0] && todayDateData[0].feels_like) || 'load';
    const maxTemp = (getMaxTemp(todayDateData)) || 'load';
    const minTemp = (getMinTemp(todayDateData)) || 'load';
    const averageTemp = ((Number(maxTemp) + Number(minTemp)) / 2) || 'load';

    const imgSize = { 
        width: '2.5em', 
        height: '2.5em',
    }

    return (
        <>
            {/* <HPAFDiv> */}
                <div className='Main__body__dailyWeather__Humidity'>
                    {/* <HPAFStyle> */}
                        {/* <li>습도</li>
                        <li><img style={imgSize} src='https://img.icons8.com/external-justicon-flat-justicon/64/external-humidity-weather-justicon-flat-justicon-1.png' alt='humidi.icon'/></li>
                        <li>{humidity}</li> */}
                        <li>습도</li>
                        <li><img src='https://img.icons8.com/external-justicon-flat-justicon/64/external-humidity-weather-justicon-flat-justicon-1.png' alt='humidi.icon'/></li>
                        <li>{humidity}</li>
                    {/* </HPAFStyle> */}
                </div>

                <div className='Main__body__dailyWeather__Pressure'>
                    {/* <HPAFStyle> */}
                        {/* <li>기압</li>
                        <li><img style={imgSize} src="https://img.icons8.com/arcade/64/000000/atmospheric-pressure.png" alt="atmospheric-pressure"/></li>
                        <li>{pressure}</li> */}
                        <li>기압</li>
                        <li><img src="https://img.icons8.com/arcade/64/000000/atmospheric-pressure.png" alt="atmospheric-pressure"/></li>
                        <li>{pressure}</li>
                    {/* </HPAFStyle> */}
                </div>
                <div className='Main__body__dailyWeather__AverageTemp'>
                    {/* <HPAFStyle> */}
                        {/* <li>평균기온</li>
                        <li><img style={imgSize} src="https://img.icons8.com/arcade/64/000000/dew-point.png" alt="dew-point"/></li>
                        <li>{averageTemp}</li> */}
                        <li>평균기온</li>
                        <li><img src="https://img.icons8.com/arcade/64/000000/dew-point.png" alt="dew-point"/></li>
                        <li>{averageTemp}</li>
                    {/* </HPAFStyle> */}
                </div>
                <div className='Main__body__dailyWeather__FeelsLike'>
                    {/* <HPAFStyle> */}
                        {/* <li>체감온도</li>
                        <li><img style={imgSize} src="https://img.icons8.com/external-wanicon-flat-wanicon/64/external-temperature-nature-wanicon-flat-wanicon.png" alt="external-temperature-nature-wanicon-flat-wanicon"/></li>
                        <li>{feelsLike}</li> */}
                        <li>체감온도</li>
                        <li><img src="https://img.icons8.com/external-wanicon-flat-wanicon/64/external-temperature-nature-wanicon-flat-wanicon.png" alt="external-temperature-nature-wanicon-flat-wanicon"/></li>
                        <li>{feelsLike}</li>
                    {/* </HPAFStyle> */}
                </div>
            {/* </HPAFDiv> */}
        </>
    );
};

export default HPAF;
import React from 'react';
import { WindDegreeStyle, WindSpeedChart } from '../../Styles/Styles';
import {TimeData, WindDegreeProps} from '../../Store/Type/Interface';

const WindDegree: React.FC<WindDegreeProps> = ({todayDateData, tomorrowSlicedData}) => {


    return (
        <>
        <div className='WindDeg__background'>
            <p className='Main__body__dailyWeather__WindDegTitle'>풍향</p>
            <p  className='Main__body__dailyWeather__WindSpeedTitle'>풍속 m/s</p>
            <p  className='Main__body__dailyWeather__강수량Ttitle'>강수량</p>
            <div className='WindDeg__background__scroll'>
                <div className='Main__body__dailyWeather__WindDeg'>
                    
                    {todayDateData && tomorrowSlicedData? (
                            <div className='Main__body__dailyWeather__WindDeg__Icon'>
                            {todayDateData.map((data: TimeData, index: number) => (
                                <div className={'Main__body__dailyWeather__WindDeg__Icon__'+index} key={index + 'WindDeg'}>
                                    <li>{data.windgust * 10}°</li>
                                    <br/>
                                    <li>
                                        <WindDegreeStyle $degree={data.windgust * 10}>
                                            <img src="https://img.icons8.com/color/48/000000/near-me--v1.png" alt='degIcon' />
                                        </WindDegreeStyle>
                                    </li>
                                    <br/><br/><br/><br/>
                                    <div className={'WindSpeed'}  key={index + 'todayWS'}>
                                        <WindSpeedChart $color={Math.round(data.windspeed) < 2 ? 'rgb(255, 224, 224)'  : 'rgb(250, 167, 167)'} $height={Math.round(data.windspeed) * 10}>
                                                <div></div>
                                            </WindSpeedChart>
                                            <br/>
                                            <p>{Math.round(data.windspeed)}</p>
                                            <br/> <br/>
                                    </div>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <div className='강수량' key={index + 'todayPop'}>
                                        <li>💧{(data.pop)*10}%</li><br/>
                                        <li><img src={data.icon} alt='weatherIcon'/></li><br/><br/>
                                        <li>{data.time}시</li><br/>
                                    </div>
                                    
                                </div>
                            ))}
                            
                            {tomorrowSlicedData.length > 0 && tomorrowSlicedData.map((data: TimeData, index: number) => (
                                <div key={index + 'tomorrowGust'}>
                                    <li>{data.windgust * 10}°</li>
                                    <br/>
                                    <li>
                                        <WindDegreeStyle $degree={data.windgust * 10}>
                                            <img src="https://img.icons8.com/color/48/000000/near-me--v1.png" alt='degIcon' />
                                        </WindDegreeStyle>
                                    </li>
                                    <br/><br/><br/><br/>
                                    <div className={'WindSpeed'} key={index + Math.round(data.windspeed)}>
                                        <WindSpeedChart $color={Math.round(data.windspeed) < 2 ? 'rgb(255, 224, 224)' : 'rgb(250, 167, 167)'} $height={Math.round(data.windspeed) * 10}>
                                                <div></div>
                                            </WindSpeedChart>
                                            <br/>
                                            <p>{Math.round(data.windspeed)}</p>
                                            <br/> <br/>
                                    </div>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <div className='강수량' key={index + 'tomorrowPop'}>
                                        <li>💧{(data.pop)*10}%</li><br/>
                                        <li><img src={data.icon} alt='weatherIcon'/></li><br/><br/>
                                        <li>{data.time}시</li><br/>
                                    </div>
                                </div>
                            ))}
                            </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>

        </div>
        </>
    );
};

export default WindDegree;

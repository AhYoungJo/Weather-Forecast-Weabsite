import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Data/Reducers/index';
import { MainHeadProps } from '../../Store/Type/Interface'
import { Background } from '../../Styles/Styles';

const MainHead: React.FC<MainHeadProps> = ({weatherGIF}) => {
    const {address, shortenAddress}  = useSelector((state: RootState) => (state.address))
    const weatherDataList = useSelector((state: RootState) => state.weather.weatherDataList)

    const thanYesterday: number | null = weatherDataList.length >= 2 ? Math.round((weatherDataList[0].temp - weatherDataList[1].temp)) : null;

    const asYesterdayTemp = thanYesterday !== null ? (thanYesterday > 0 ? `어제보다 ${thanYesterday}℃ 높아요.` : thanYesterday < 0 ? `어제보다 ${thanYesterday}℃ 낮아요` : null) : null;

    return (
        <div>
              <div className='Main__head'>
                <div className='Main__head__IntroWeather'>
                    <div className='Main__head__IntroWeather__right'>
                        <img src="https://img.icons8.com/stickers/100/marker.png" alt="marker"/>
                        <span>{shortenAddress}</span>
                        {weatherDataList && weatherDataList[0] ? <img src={weatherDataList[0].icon} alt='weatherIcon'/> : <li>loading...</li>}
                    </div>
                    <div className='Main__head__IntroWeather__left'>
                        <div>
                            {weatherDataList && weatherDataList[0] ? <li>{weatherDataList[0].temp_max}℃ </li>: <li>loading...</li>}
                            {weatherDataList && weatherDataList[0] ? <li>{weatherDataList[0].temp_min}℃</li> : <li>loading...</li>}
                        </div>
                        {weatherDataList && weatherDataList[0] ? <li className='Main__head__IntroWeather__left__temp'>{weatherDataList[0].temp}℃</li> : <li>loading...</li>}
                    </div>
                </div>

                <div className='Main__head__inputDiv'>
                        <input id='Input_Top' type="text" className='Main__head__inputDiv__input' placeholder='장소를 검색하세요.'/>
                        <div className="Main__head__inputDiv__icon"></div>
                </div>

                <Background bgURL={weatherGIF}>
                        <div className='Main__head__InteractivBG'>
                        </div>
                </Background>

                <div className='Main__head__weatherDiv'>
                        <ul>
                            {weatherDataList && weatherDataList[0] ? <li>{weatherDataList[0].description}
                             </li>: <li>loading...</li>}
                            {weatherDataList && weatherDataList[0] ? <li>{asYesterdayTemp} </li>: <li>loading...</li>}
                        </ul>
                </div>

            </div>
        </div>
    );
};

export default MainHead;
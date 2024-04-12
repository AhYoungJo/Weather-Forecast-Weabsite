import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Data/Reducers/index';

const MainHead = () => {
    const {address, shortenAddress}  = useSelector((state: RootState) => (state.address))
    const weatherDataList = useSelector((state: RootState) => state.weather.weatherDataList)
    return (
        <div>
              <div className='Main__head'>
                    <div className='Main__head__inputDiv'>
                        <input id='Input_Top' type="text" className='Main__head__inputDiv__input' placeholder='장소를 검색하세요.'/>
                        <div className="Main__head__inputDiv__icon"></div>
                    </div>
                    <div className='Main__head__weatherDiv'>
                        <ul>
                            <div><img src="https://img.icons8.com/stickers/100/marker.png" alt="marker"/><span>{shortenAddress}</span></div>
                            {weatherDataList && weatherDataList[0] ? <li>{weatherDataList[0].temp}℃</li> : <li>loading...</li>}
                            {weatherDataList && weatherDataList[0] ? <li><img src={weatherDataList[0].icon} alt='weatherIcon'/></li> : <li>loading...</li>}
                            {weatherDataList && weatherDataList[0] ? <li>{weatherDataList[0].description}</li> : <li>loading...</li>}
                            {weatherDataList && weatherDataList[0] ? <li><span>최고: </span>   {weatherDataList[0].temp_max}℃</li> : <li>loading...</li>}
                            {weatherDataList && weatherDataList[0] ? <li><span>최저: </span>  {weatherDataList[0].temp_min}℃</li> : <li>loading...</li>}
                        </ul>
                    </div>
                </div>
        </div>
    );
};

export default MainHead;
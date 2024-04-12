import React from 'react';
import favorite from '../../Assets/Images/favorite_main_colorblank_90.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Data/Reducers/index';

const addFavorite = () => {
    alert('즐겨찾기에 추가되었습니다.')
}

const DailyHead = () => {
    const {address, shortenAddress}  = useSelector((state: RootState) => (state.address))
    const weatherDataList = useSelector((state: RootState) => state.weather.weatherDataList)
    return (
        <div className='Main__body__dailyWeather__Head'>
                            <div className='Main__body__dailyWeather__Head__left'>
                                <div>
                                    <img src="https://img.icons8.com/stickers/100/marker.png" alt="marker"/>
                                    <span>{address}</span>
                                </div>
                            <ul>
                                {weatherDataList && weatherDataList[0] ? <li>{weatherDataList[0].date}</li> : <li>loading...</li>}
                                {weatherDataList && weatherDataList[0] ? <li>체감 온도: {weatherDataList[0].feels_like}℃</li> : <li>loading...</li>}
                            </ul>
                            </div>
                            <div className='Main__body__dailyWeather__Head__right' onClick={addFavorite}>
                                {/* <img src={favorite} alt="favorite button" onClick={addFavorite} /> */}
                            </div>
                        </div>
    );
};

export default DailyHead;
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
                                {weatherDataList && weatherDataList[0] ? <li>[{weatherDataList[0].day}] {weatherDataList[0].date} | 체감: {weatherDataList[0].feels_like}℃</li> : <li>loading...</li>}
                            </ul>
                            </div>
                            <div className='Main__body__dailyWeather__Head__right' onClick={addFavorite}>
                            </div>
                            {/** tab, labtop, desktop일때만 show되는 내일, 모레 날씨 컴포넌트 추가 + description과 아이콘 넣을까? */}
                        </div>
    );
};

export default DailyHead;
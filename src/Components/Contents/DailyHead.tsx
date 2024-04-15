import React from 'react';
import favorite from '../../Assets/Images/favorite_main_colorblank_90.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Data/Reducers/index';
import { DailyHeadProps } from '../../Store/Type/Interface';

const addFavorite = () => {
    alert('즐겨찾기에 추가되었습니다.')
}

const DailyHead: React.FC<DailyHeadProps> = ({ todayDateData }) => {

    
    const {address, shortenAddress}  = useSelector((state: RootState) => (state.address))
    const day = todayDateData && todayDateData[0] && todayDateData[0].day;
    const date = todayDateData && todayDateData[0] && todayDateData[0].date;
    const icon = todayDateData && todayDateData[0] && todayDateData[0].icon
    const feelsLike = todayDateData && todayDateData[0] && todayDateData[0].feels_like;
    

    return (
        <div className='Main__body__dailyWeather__Head'>
                            <div className='Main__body__dailyWeather__Head__left'>
                                <div>
                                    <img src="https://img.icons8.com/stickers/100/marker.png" alt="marker"/>
                                    <span>{address}</span>
                                </div>
                            <ul>
                                {day && date? <li>({day}) {date}</li> : <li>loading...</li>}
                                {date ? <li>체감: {feelsLike}℃ </li> : <li>loading...</li>}
                            </ul>
                            </div >
                            <div className='Main__body__dailyWeather__Head__right'>
                                <div className='Main__body__dailyWeather__Head__right__favorite' onClick={addFavorite}></div>
                                {icon ? <img src={icon} alt="icon"/> : <li>loading...</li>}
                            </div>
                            {/** tab, labtop, desktop일때만 show되는 내일, 모레 날씨 컴포넌트 추가 + description과 아이콘 넣을까? */}
                        </div>
    );
};

export default DailyHead;
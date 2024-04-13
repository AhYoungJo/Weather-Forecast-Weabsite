import React, {useState, useEffect} from 'react';
import '../Styles/Main.scss'
import Mapv2 from '../Services/MAP/Map_v2'
import GetWeatherInfo from '../Services/Weather/WeatherAPI';
import {loadMapApi} from '../Utils/GoogleMApsUtils'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../Store/Data/Reducers/index';

import {setTimesByDate} from '../Store/Data/Reducers/timesByDateReducer'
import { getBackgroundKeyword } from '../Utils/backgroundUtils';
import { currentDateString, currentTimeString, tomorrowDateString } from '../Utils/currentDateUtils';
import MainHead from './Contents/MainHead';
import DailyHead from './Contents/DailyHead';
import DailyWeather from './Contents/DailyWeather';
import WindDegree from './Contents/WindDegree';
import WeeklyWeather from './Contents/WeeklyWeather';
import {TimeData, TimesByDateT} from '../Store/Type/Interface';

// import Loading from '../Hooks/Loading';


const Main: React.FC = () => {
    const dispatch = useDispatch();
    const [scriptLoad, setScriptLoaded] = useState(false);
    const weatherDataList = useSelector((state: RootState) => state.weather.weatherDataList)
    const timesByDate = useSelector((state: RootState) => state.timesByDate.timeByDate);
    const keyword = weatherDataList.length > 0 ? weatherDataList[0].code : '';
    const weatherGIF: string = getBackgroundKeyword(keyword)
    const Input_Top = document.querySelector<HTMLInputElement>('#Input_Top');

    //mount once && scriptLoad값이 true로 바뀌면 렌더링 되게끔 설정
    useEffect(() => {
        const googleMapScript = loadMapApi();
        
        // dom에 들어가면 scriptLoad 값을 true로 바꿔서 맵 실행
        googleMapScript.addEventListener('load', function() {
            setScriptLoaded(true);
        })
    }, [])
    
    useEffect(() => {
        const newTimesByDate: TimesByDateT = {};
        weatherDataList.forEach((data: { date: string, time: string, temp: number, temp_max: number, temp_min: number, pop: number, icon: string, windgust: number, windspeed: number, humidity: number, pressure: number }) => {
            const { date, time, temp, temp_max, temp_min, pop, icon, windgust, windspeed, humidity, pressure } = data;
            if (!newTimesByDate[date]) {
                newTimesByDate[date] = [];
            }
            newTimesByDate[date].push({ time, temp, temp_max, temp_min, pop, icon, windgust, windspeed, humidity, pressure});
        });
        dispatch(setTimesByDate(newTimesByDate));
    }, [weatherDataList]);

    const todayKey = Object.keys(timesByDate).find(date => date === currentDateString);
    const tomorrowKey = Object.keys(timesByDate).find(date => date === tomorrowDateString);
    const todayDateData: TimeData[] = todayKey ? timesByDate[todayKey].filter((data: TimeData) => parseInt(data.time) >= parseInt(currentTimeString)) : [];
    const tomorrowDateData: TimeData[] = tomorrowKey ? timesByDate[tomorrowKey] : [];
    
    const sliceTomorowData = (tLength: number) => {
        const todayDataLength = todayDateData.length;
        const slices = [8, 7, 6, 5, 4, 3, 2, 1]; // 각 경우에 대한 slice 값
        const index = Math.min(tLength, slices.length - 1); // tLength와 slices 배열 길이 중 작은 값을 선택
        const sliceValue = slices[index]; // 선택된 인덱스에 해당하는 slice 값
        const todaySlicedData = todayDateData.slice(0, todayDataLength - sliceValue + 1);
        const tomorrowSlicedData = tomorrowDateData.slice(0, tomorrowDateData.length - (8 - sliceValue));
        return { todaySlicedData, tomorrowSlicedData };
    }
    const {tomorrowSlicedData} = sliceTomorowData(todayDateData.length);

    return (
       <div className='Main'>

            <section>
                <MainHead weatherGIF={weatherGIF}/>
            </section>
            <br />
            <p className='Main__mapIntroduce'>지도를 이용해서 원하는 지역의 날씨를 검색해보세요!</p>
            <br />
            <br />
            <section>
                <div className='Main__map'>
                    {scriptLoad && (
                        <Mapv2 mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} Input_Top={Input_Top} />
                    )}
                </div>
            </section>
                <div className='map-containerBg'>
                    <div className='map-containerBg__crop'></div>
                </div>
            <br />
            <>
            <GetWeatherInfo />
            </>           
            <br />
            <br />
            <br />
            <br />

            <section >
                <div className='Main__body'>
                    <div className='Main__body__dailyWeather'>
                        < DailyHead />
                        <br /> {/** br 추가하면 모바일 화면 달라짐 */}

                        {/** 습도, 기압 원그래프 넣기 */}

                        <DailyWeather tomorrowSlicedData={tomorrowSlicedData} todayDateData={todayDateData}/>
                        <br /> 
                        <WindDegree tomorrowSlicedData={tomorrowSlicedData} todayDateData={todayDateData}/>
                        <br />
                        <br />
                    </div>
                </div>
            </section>
            
            <br />

            <section> {/** 클릭하면 디테일하게 볼 수 있게 할 건지 고민.. */}
                <WeeklyWeather timesByDate={timesByDate} tomorrowDateData={tomorrowDateData} todayDateData={todayDateData}/>
            </section>
            
       </div>
    );
};

export default Main;
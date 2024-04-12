import React, {useState, useEffect} from 'react';
import '../Styles/Main.scss'
import Mapv2 from '../Services/MAP/Map_v2'
import GetWeatherInfo from '../Services/Weather/WeatherAPI';
import {loadMapApi} from '../Utils/GoogleMApsUtils'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../Store/Data/Reducers/index';
import { Background } from '../Styles/Styles';
import {setTimesByDate} from '../Store/Data/Reducers/timesByDateReducer'
import { getBackgroundKeyword } from '../Utils/backgroundUtils';
import { currentDateString, currentTimeString, tomorrowDateString } from '../Utils/currentDateUtils';
import MainHead from './Contents/MainHead';
import DailyHead from './Contents/DailyHead';
import DailyWeather from './Contents/DailyWeather';
import WindDegree from './Contents/WindDegree';
import {TimeData, TimesByDateT} from '../Store/Type/Interface';

// import Loading from '../Hooks/Loading';


const Main: React.FC = () => {
    const dispatch = useDispatch();
    const [scriptLoad, setScriptLoaded] = useState(false);
    const weatherDataList = useSelector((state: RootState) => state.weather.weatherDataList)
    const timesByDate = useSelector((state: RootState) => state.timesByDate.timeByDate);
    const keyword = weatherDataList.length > 0 ? weatherDataList[0].code : '';
    const weatherGIF = getBackgroundKeyword(keyword)
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
        weatherDataList.forEach((data: { date: string, time: string, temp: number, pop: number, icon: string, windgust: number, windspeed: number  }) => {
            const { date, time, temp, pop, icon, windgust, windspeed } = data;
            if (!newTimesByDate[date]) {
                newTimesByDate[date] = [];
            }
            newTimesByDate[date].push({ time, temp, pop, icon, windgust, windspeed});
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


    //초기에 weatherDataList 배열에 값이 없을 경우엔 에러가 나서, 삼항연산자로 처리
    return (
       <div className='Main'>

            <section>
                <Background bgURL={weatherGIF}>
                    <MainHead />
                </Background>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className='Main__mapIntroduce'>아래 지도를 이용해서 검색해보세요!</p>
            <br />
            <br />
            <br />
            <section>
                <div className='Main__map'>
                    {scriptLoad && (
                        <Mapv2 mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} Input_Top={Input_Top} />
                    )}
                </div>
            </section>
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
                        <br />
                        <br />
                        <br />
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
                <div className='Main__body__5daysWeather'>
                        <h2>주간 날씨</h2>
                </div>
            </section>
            
       </div>
    );
};

export default Main;
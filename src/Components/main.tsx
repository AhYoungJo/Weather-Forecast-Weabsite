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
import makrerImage from '../Assets/Images/top_markerIcon_gif.gif';

// import Loading from '../Hooks/Loading';

interface TimeData {
    time: string;
    temp: number;
    pop: number;
    icon: string;
}

const Main: React.FC = () => {
    const dispatch = useDispatch();
    const [scriptLoad, setScriptLoaded] = useState(false);
    const {address, shortenAddress}  = useSelector((state: RootState) => (state.address))
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
        const newTimesByDate: { [date: string]: { time: string; temp: number, pop: number, icon: string }[]  } = {};
        weatherDataList.forEach((data: { date: string, time: string, temp: number, pop: number, icon: string }) => {
            const { date, time, temp, pop, icon } = data;
            if (!newTimesByDate[date]) {
                newTimesByDate[date] = [];
            }
            newTimesByDate[date].push({ time, temp, pop, icon});
        });
        dispatch(setTimesByDate(newTimesByDate));
    }, [weatherDataList]);

    const todayKey = Object.keys(timesByDate).find(date => date === currentDateString);
    const tomorrowKey = Object.keys(timesByDate).find(date => date === tomorrowDateString);
    const todayDateData: TimeData[] = todayKey ? timesByDate[todayKey].filter((data: TimeData) => parseInt(data.time) >= parseInt(currentTimeString)) : [];
    
    const tomorrowDateData: TimeData[] = timesByDate[tomorrowKey? tomorrowKey : 1];
    const sliceTommorData = (tLength: number) => {
        const todayDataLength = todayDateData.length;
        const slices = [8, 7, 6, 5, 4, 3, 2, 1]; // 각 경우에 대한 slice 값
    
        const index = Math.min(tLength, slices.length - 1); // tLength와 slices 배열 길이 중 작은 값을 선택
        const sliceValue = slices[index]; // 선택된 인덱스에 해당하는 slice 값
    
        return todayDateData.slice(0, todayDataLength - sliceValue + 1);
    }


    const handleClick = () => {
        alert('즐겨찾기에 추가되었습니다.')
    }


    //초기에 weatherDataList 배열에 값이 없을 경우엔 에러가 나서, 삼항연산자로 처리
    return (
       <div className='Main'>
            <section>
                <Background bgURL={weatherGIF}>
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
                            {weatherDataList && weatherDataList[0] ? <li><span>최고:</span> {weatherDataList[0].temp_max}℃</li> : <li>loading...</li>}
                            {weatherDataList && weatherDataList[0] ? <li><span>최저:</span> {weatherDataList[0].temp_min}℃</li> : <li>loading...</li>}
                        </ul>
                    </div>
                </div>
                </Background>
            </section>
            <br /> <br /> <br /> <br />
            <p className='Main__mapIntroduce'>아래 지도를 이용해서 검색해보세요!</p>
            <br /> <br /> <br /> <br />
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
            
            <br /> <br /> <br /> <br />
            
            <section >
                <div className='Main__body'>
                    <div className='Main__body__dailyWeather'>
                        <div className='Main__body__dailyWeather__Head'>
                            <div className='Main__body__dailyWeather__Head__left'>
                                <div>
                                    <img width="20" height="20" src="https://img.icons8.com/stickers/100/marker.png" alt="marker"/>
                                    <span>{address}</span>
                                </div>
                            <ul>
                                {weatherDataList && weatherDataList[0] ? <li>{weatherDataList[0].date}</li> : <li>loading...</li>}
                                {weatherDataList && weatherDataList[0] ? <li>체감 온도: {weatherDataList[0].feels_like}</li> : <li>loading...</li>}
                            </ul>
                            </div>
                            <div className='Main__body__dailyWeather__Head__right'>
                                {/* <img src={favorite} alt="favorite button" onClick={handleClick} /> */}
                            </div>
                        </div>

                        <hr />
                        <div className='Main__body__dailyWeather__Chart'>
                            <h2>시간별</h2>
                            <br />
                            <p>차트 입니다</p>
                            {/* <Line /> */}
                          
                        </div>
                        <br /> 

                        <div className='Main__body__dailyWeather__body'>
                            {todayDateData && tomorrowDateData? (
                                <>
                                    {todayDateData.map((data: TimeData, index: number) => (
                                        <div key={index}>
                                            <li>💧{data.pop}%</li>
                                            <li><img src={data.icon} alt='weatherIcon'/></li>
                                            <li>{data.time}시</li>
                                        </div>
                                    ))}
                                    {tomorrowDateData.length > 0 && tomorrowDateData.map((data: TimeData, index: number) => (
                                        <div key={index}>
                                            <li>💧{data.pop}%</li>
                                            <li><img src={data.icon} alt='weatherIcon'/></li>
                                            <li>{data.time}시</li>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div>Loading...</div>
                            )}
                        </div>


                        <div className='Main__body__dailyWeather__Wind'>
                            {/** 바람, */}
                        </div>

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
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/Data/Reducers/index';
import {WeeklyWeatherProps, TimesByDateT} from '../../Store/Type/Interface';
import { thirdDateString, fourthDateString, fifthDateString } from '../../Utils/currentDateUtils';
import { getMaxTemp, getIcon, getMinTemp } from '../../Utils/WeatherUitl';


//비가 있으면 아이콘은 비 아이콘으로
//최저, 최고 기온 나누기
//요일 완료

/**
 * 1. 같은 요일의 정보를 가져와야함 --clear!
 * 2. 최저 배열, 최고 배열 나누기 ---clear!
 * 3. tolowercase(main)=== 'rain' 이 있으면 아이콘은 그날 4시 기준의 아이콘으로 
 */

const WeeklyWeather: React.FC<WeeklyWeatherProps> = ({timesByDate, tomorrowDateData, todayDateData}) => {
    const weatherDataList = useSelector((state: RootState) => state.weather.weatherDataList)
    
    //weatherDataList가 같으면 결과 또한 매번 같은게 나오니까 useCallback 사용 / 값이 변경 안 되면, 이전에 메모이제이션된 함수를 계속 사용
    //useEffect로 처리할 필요가 없나?
    const getNthDate = useCallback((targetDate: string) => {
        const newData: TimesByDateT = {};
        weatherDataList.forEach((data: { code: string, date: string, day: string, description: string, time: string, main: string, temp: number, temp_max: number, temp_min: number, feels_like: number, pop: number, icon: string, windgust: number, windspeed: number, humidity: number, pressure: number  }) => {
            const {code, date, day, description, time, main, temp, temp_max, temp_min, feels_like, pop, icon, windgust, windspeed, humidity, pressure } = data;
            if (date === targetDate) {
                if (!newData[targetDate]) {
                    newData[targetDate] = [];
                }
                newData[targetDate].push({code, date, day, description, time, temp, main, temp_max, temp_min, feels_like, pop, icon, windgust, windspeed, humidity, pressure });
            }
        });
        return newData;
    }, [weatherDataList]);
    

    const thirdData: TimesByDateT = getNthDate(thirdDateString);
    const fourthData: TimesByDateT = getNthDate(fourthDateString);
    const fifthData: TimesByDateT = getNthDate(fifthDateString);
    // const sixthData: TimesByDateT = getNthDate(sixthdDateString);
    
    const day2 = tomorrowDateData && tomorrowDateData[0] && tomorrowDateData[0].day;
    const day3 = thirdData[thirdDateString]?.[0]?.day;
    const day4 = fourthData[fourthDateString]?.[0]?.day;
    const day5 = fifthData[fifthDateString]?.[0]?.day;
    // const day6 = sixthData[sixthdDateString]?.[0]?.day;

    const pop1 = todayDateData && todayDateData[0] && todayDateData[0].pop;
    const pop2 = tomorrowDateData && tomorrowDateData[0] && tomorrowDateData[0].pop;
    const pop3 = thirdData[thirdDateString]?.[0]?.pop;
    const pop4 = fourthData[fourthDateString]?.[0]?.pop;
    const pop5 = fifthData[fifthDateString]?.[0]?.pop;
    // const pop6 = sixthData[sixthdDateString]?.[0]?.pop;

    //인수로 전달받고 있기 때문에  외부 데이터나 상태에 의존하고 있지 않음, 엄밀히 따지면,
    //전달받는 그 '인수'가 외부 데이터에 의존. 그래서 이건 useCallback으로 처리
    const maxTemp1 = getMaxTemp(todayDateData);
    const maxTemp2 = getMaxTemp(tomorrowDateData);
    const maxTemp3 = getMaxTemp(thirdData[thirdDateString]);
    const maxTemp4 = getMaxTemp(fourthData[fourthDateString]);
    const maxTemp5 = getMaxTemp(fifthData[fifthDateString]);
    // const maxTemp6 = getMaxTemp(sixthData[sixthdDateString]);

    const minTemp1 = getMinTemp(todayDateData);
    const minTemp2 = getMinTemp(tomorrowDateData);
    const minTemp3 = getMinTemp(thirdData[thirdDateString]);
    const minTemp4 = getMinTemp(fourthData[fourthDateString]);
    const minTemp5 = getMinTemp(fifthData[fifthDateString]);
    // const minTemp6 = getMinTemp(sixthData[sixthdDateString]);

    const icon1 = getIcon(todayDateData);
    const icon2 = getIcon(tomorrowDateData);
    const icon3 = getIcon(thirdData[thirdDateString]);
    const icon4 = getIcon(fourthData[fourthDateString]);
    const icon5 = getIcon(fifthData[fifthDateString]);
    // const icon6 = getIcon(sixthData[sixthdDateString]);

    const humidity1 = todayDateData && todayDateData[0] && todayDateData[0].humidity;
    const humidity2 = tomorrowDateData && tomorrowDateData[0] && tomorrowDateData[0].humidity;
    const humidity3 = thirdData[thirdDateString]?.[0]?.humidity;
    const humidity4 = fourthData[fourthDateString]?.[0]?.humidity;
    const humidity5 = fifthData[fifthDateString]?.[0]?.humidity;
    // const humidity6 = sixthData[sixthdDateString]?.[0]?.humidity;
 

    return (
        <div className='Main__body__WeeklyWeather__Inner'>
        <table summary="주간 날씨 정보 WeeklyWeather">
            <tbody>
                <tr>
                    <td>오늘</td>
                    <td><img src={icon1} alt='icon' /></td>
                    <td>{minTemp1}℃</td>
                    <td>{maxTemp1}℃</td>
                    <td>
                    <div>
                        <img src='https://img.icons8.com/arcade/64/rain.png' alt='pop.icon'/>
                        {pop1}
                    </div>    
                    </td>
                    <td>
                        <div>
                            <img src='https://img.icons8.com/external-justicon-flat-justicon/64/external-humidity-weather-justicon-flat-justicon-1.png' alt='humidi.icon'/>
                            {humidity1}%
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{day2}</td>
                    <td><img src={icon2} alt='icon' /></td>
                    <td>{minTemp2}℃</td>
                    <td>{maxTemp2}℃</td>
                    <td>
                    <div>
                        <img src='https://img.icons8.com/arcade/64/rain.png' alt='pop.icon'/>
                        {pop2}
                    </div>    
                    </td>
                    <td>
                        <div>
                            <img src='https://img.icons8.com/external-justicon-flat-justicon/64/external-humidity-weather-justicon-flat-justicon-1.png' alt='humidi.icon'/>
                            {humidity2}%
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{day3}</td>
                    <td><img src={icon3} alt='icon' /></td>
                    <td>{minTemp3}℃</td>
                    <td>{maxTemp3}℃</td>
                    <td>
                    <div>
                        <img src='https://img.icons8.com/arcade/64/rain.png' alt='pop.icon'/>
                        {pop3}
                    </div>    
                    </td>
                    <td>
                        <div>
                            <img src='https://img.icons8.com/external-justicon-flat-justicon/64/external-humidity-weather-justicon-flat-justicon-1.png' alt='humidi.icon'/>
                            {humidity3}%
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{day4}</td>
                    <td><img src={icon4} alt='icon' /></td>
                    <td>{minTemp4}℃</td>
                    <td>{maxTemp4}℃</td>
                    <td>
                    <div>
                        <img src='https://img.icons8.com/arcade/64/rain.png' alt='pop.icon'/>
                        {pop4}
                    </div>    
                    </td>
                    <td>
                        <div>
                            <img src='https://img.icons8.com/external-justicon-flat-justicon/64/external-humidity-weather-justicon-flat-justicon-1.png' alt='humidi.icon'/>
                            {humidity4}%
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{day5}</td>
                    <td><img src={icon5} alt='icon' /></td>
                    <td>{minTemp5}℃</td>
                    <td>{maxTemp5}℃</td>
                    <td>
                    <div>
                        <img src='https://img.icons8.com/arcade/64/rain.png' alt='pop.icon'/>
                        {pop5}
                    </div>    
                    </td>
                    <td>
                        <div>
                            <img src='https://img.icons8.com/external-justicon-flat-justicon/64/external-humidity-weather-justicon-flat-justicon-1.png' alt='humidi.icon'/>
                            {humidity5}%
                        </div>
                    </td>
                </tr>
                {/* <tr>
                    <td>{day6}</td>
                    <td><img src={icon6} alt='icon' /></td>
                    <td>{minTemp6}℃</td>
                    <td>{maxTemp6}℃</td>
                    <td>
                    <div>
                        <img src='https://img.icons8.com/arcade/64/rain.png' alt='pop.icon'/>
                        {pop6}
                    </div>    
                    </td>
                    <td>
                        <div>
                            <img src='https://img.icons8.com/external-justicon-flat-justicon/64/external-humidity-weather-justicon-flat-justicon-1.png' alt='humidi.icon'/>
                            {humidity6}%
                        </div>
                    </td>
                </tr> */}
            </tbody>
        </table>
    </div>
    
    );
};

export default WeeklyWeather;
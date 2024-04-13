import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Store/Data/Reducers/index';
import {WeeklyWeatherProps, TimeData, TimesByDateT} from '../../Store/Type/Interface';
import { currentDateString, tomorrowDateString, thirdDateString, fourthDateString, fifthDateString, sixthdDateString } from '../../Utils/currentDateUtils';


//비가 있으면 아이콘은 비 아이콘으로
//최저, 최고 기온 나누기
//굴곡을 일직선으로 폈을 때의 길이인가?, 

//요일 완료

/**
 * 1. 같은 요일의 정보를 가져와야함
 * 2. 최저 배열, 최고 배열 나누기
 * 3. tolowercase(main)=== 'rain' 이 있으면 아이콘은 그날 4시 기준의 아이콘으로 
 */



const WeeklyWeather: React.FC<WeeklyWeatherProps> = ({timesByDate, tomorrowDateData, todayDateData}) => {
    const weatherDataList = useSelector((state: RootState) => state.weather.weatherDataList)
    const [thirdData, setThirdData] = useState<TimesByDateT>({});
    const [fourthData, setFourthData] = useState<TimesByDateT>({});
    const [fifthData, setFifthData] = useState<TimesByDateT>({});
    const [sixthData, setSixthData] = useState<TimesByDateT>({});

    const [maxTemp1, setMaxTemp1] = useState<number | string>();
    const [maxTemp2, setMaxTemp2] = useState<number | string>();
    const [maxTemp3, setMaxTemp3] = useState<number | string>();
    const [maxTemp4, setMaxTemp4] = useState<number | string>();
    const [maxTemp5, setMaxTemp5] = useState<number | string>();
    const [maxTemp6, setMaxTemp6] = useState<number | string>();
    

    useEffect(() => {
        setThirdData(prevThirdData => getNthDate(prevThirdData, thirdDateString));
        setFourthData(prevFourthData => getNthDate(prevFourthData, fourthDateString));
        setFifthData(prevFifthData => getNthDate(prevFifthData, fifthDateString));
        setSixthData(prevSixthData => getNthDate(prevSixthData, sixthdDateString));
        setMaxTemp1(getMaxTemp(todayDateData));
        setMaxTemp2(getMaxTemp(tomorrowDateData));
        setMaxTemp3(thirdData ? getMaxTemp(thirdData[thirdDateString]) : 'loading...');
        setMaxTemp4(fourthData ? getMaxTemp(fourthData[fourthDateString]) : 'loading...');
        setMaxTemp5(fifthData ? getMaxTemp(fifthData[fifthDateString]) : 'loading...');
        setMaxTemp6(sixthData ? getMaxTemp(sixthData[sixthdDateString]) : 'loading...');

        console.log(maxTemp1)

    }, [weatherDataList])

    
    
    const getNthDate = (newObject: TimesByDateT, targetDate: string) => {
        weatherDataList.forEach((data: { date: string, time: string, temp: number, temp_max: number, temp_min: number, pop: number, icon: string, windgust: number, windspeed: number, humidity: number, pressure: number  }) => {
            const {date, time, temp, temp_max, temp_min, pop, icon, windgust, windspeed, humidity, pressure } = data;
            if (date === targetDate) { // 날짜가 일치하는 경우에만 데이터를 추가합니다.
                if (!newObject[targetDate]) {
                    newObject[targetDate] = [];
                }
                newObject[targetDate].push({ time, temp, temp_max, temp_min, pop, icon, windgust, windspeed, humidity, pressure });
            }
        });
        return newObject;
    }

    const getMaxTemp = (datas: TimeData[] | null | undefined) => {
        if (datas === null || datas === undefined || datas.length === 0) {
            return 'loading...';
        }
        let temp = 0;
        for (let i = 0; i < datas.length; i++) {
            temp = datas[i].temp_max;
            if(i < datas.length - 1 && datas[i].temp_max < datas[i+1].temp_max) {
                temp = datas[i+1].temp_max;
            }
        }
        return temp;
    }

    return (
        <div className='Main__body__5daysWeather'>
            <h2>주간 날씨</h2>
            {/* {thirdData.time} */}
        </div>
    );
};

export default WeeklyWeather;
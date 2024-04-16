import { useEffect} from "react";
import { useSelector, useDispatch  } from "react-redux";
import { RootState } from '../../Store/Data/Reducers/index';
import { setWeather } from '../../Store/Data/Reducers/weatherReducer'
import { weatherDescKo } from './weahterDescKo';
import axios from "axios";

const GetWeatherInfo: React.FC = () => {

  const { latitude, longitude } = useSelector((state: RootState) => state.location);
  const weather = useSelector((state:RootState) => state.weather);
  const dispatch = useDispatch();

    const patchWeather = async (lat: number, lon: number) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=kr&appid=${process.env.REACT_APP_OPEN_WHEATHER_API_KEY}&units=metric`
        );

        // console.log('data', response.data)
        // id 찾아서 매칭 후 description 한글 번역된 거 가져오기 

        //newWeatherDataList 값 초기화
        const newWeatherDataList = [];

        
        for (const item of response.data.list) {
          const main: string = item.weather[0].main;
          const weatherId: number = item.weather[0].id;
          const weatherKo: string = weatherDescKo[weatherId];
          // // 날씨 아이콘 가져오기
          const weatherIcon = item.weather[0].icon;
          const code = item.weather[0].main;

          // UTC+9하기, 날짜와 시간 분리하기
          const localDate = new Date(item.dt_txt); // dt_txt를 Date 객체로 변환하여 저장
          localDate.setHours(localDate.getHours() + 9); // UTC 시간에 9시간을 더해 한국 시간으로 변환
          const year = localDate.getFullYear();
          const month = ('0' + (localDate.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 1을 더하고, 두 자리로 표시하기 위해 앞에 0을 붙임
          const localDay = ('0' + localDate.getDate()).slice(-2); // 날짜를 두 자리로 표시하기 위해 앞에 0을 붙임
          const hours = ('0' + localDate.getHours()).slice(-2); // 시간을 두 자리로 표시하기 위해 앞에 0을 붙임
          const date = `${year}-${month}-${localDay}`;
          const hour = `${hours}`;

          // 요일가져오기
          const dayOfWeek = localDate.getDay();
          const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
          const day = daysOfWeek[dayOfWeek];

          const weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

          // 소수점 버리기
          const temp: number = Math.round(item.main.temp.toFixed(1));
          const tempMax: number =  Math.round(item.main.temp_max.toFixed(1));
          const tempMin: number =  Math.round(item.main.temp_min.toFixed(1));
          const feelsLike: number =  Math.round(item.main.feels_like.toFixed(1));
          // 바람 속도, 단위: 미터/초
          const windspeed: number = parseFloat(item.wind.speed.toFixed(1));
          // 풍향 각도 (기상)
          const windgust: number = parseFloat(item.wind.gust.toFixed(1));
          // deg 얘는 뭐지...
          const winddeg: number = parseFloat(item.wind.deg.toFixed(1));
          // 강수량
          const pop: number = parseFloat(item.pop.toFixed(1));
          //습도
          const humidity: number = item.main.humidity;
          //기압
          const pressure: number = item.main.pressure;
          // 흐림%
          const clouds: number = parseFloat(item.clouds.all.toFixed(1));
          //지난 3시간 동안의 비량 mm , list.rain.3h
          //n: 밤, d: 낮
          const nigthDay= item.sys.pod


          newWeatherDataList.push({
            id: weatherId,
            main: main,
            code: code,
            icon: weatherIconURL,
            description: weatherKo,
            date: date,
            time: hour,
            day: day,
            temp: temp,
            temp_max: tempMax,
            temp_min: tempMin,
            feels_like: feelsLike,
            winddeg: winddeg,
            windgust: windgust,
            windspeed: windspeed,
            nigthDay: nigthDay,
            cloudPer: clouds,
            pop: pop,
            humidity: humidity,
            pressure: pressure
          })
        }
        
        //newWeatherDatalist배열에 40개의 배열이 담김(있으면 업데이트)
        dispatch(setWeather(newWeatherDataList));
        
      } catch (error) {
        console.error("날씨 axios 요청 에러:", error);
      }
    };

    useEffect(() => {
      patchWeather(latitude, longitude);
  }, [latitude]);

  return null // 직접 렌더링 되는게 아니라서 임의로 null
};

export default GetWeatherInfo;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../../../Store/Data/Reducers/index';
import { setWeather } from '../../../Store/Data/Reducers/weatherReducer'
import { weatherDescKo } from './weahterDescKo';
import axios from "axios";

// const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const GetWeatherInfo: React.FC = () => {

  const { latitude, longitude } = useSelector((state: RootState) => state.location);

  useEffect(() => {
    const getWeather = async (lat: number, lon: number) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WHEATHER_API_KEY}&units=metric`
        );
        console.log(response.data);
        // id 찾아서 매칭 후 description 한글 번역된 거 가져오기 
        const weatherId: number = response.data.weather[0].id
        const weatherKo: string = weatherDescKo[weatherId];
        // // 날씨 아이콘 가져오기
        const weatherIcon = response.data.weather[0].icon;
        const name = response.data.name;
        const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        // // 소수점 버리기
        const temp = Math.round(response.data.main.temp);
        const tempMax = Math.round(response.data.main.temp_max);
        const tempMin = Math.round(response.data.main.temp_min);
        const feelsLike = Math.round(response.data.main.feels_like);

        setWeather({
          description: weatherKo,
          icon: weatherIconAdrs,
          id: weatherId,
          name: name,
          temp: temp,
          temp_max: tempMax,
          temp_min: tempMin,
          feels_like: feelsLike,
          winddeg: 0,
          windspeed: 0,
        });

      } catch (error) {
        console.error("날씨 axios 요청 에러:", error);
      }
    };
      getWeather(latitude, longitude);
   
  }, [latitude, longitude]);

  return null // 직접 렌더링 되는게 아니라서 임의로 null
};

export default GetWeatherInfo;

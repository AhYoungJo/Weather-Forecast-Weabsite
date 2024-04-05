// import React, {useState, useEffect} from 'react';
// import Mapv2 from '../Services/MAP/Map_v2'
// import {loadMapApi} from '../Utils/GoogleMApsUtils'
// import {useSelector} from 'react-redux'
// import { RootState } from '../Store/Data/Reducers/index';
// import GetWeatherInfo from '../Services/Weather/WeatherAPI';
// import Loading from '../Hooks/Loading';


// const Home = () => {
//     //before mounted
//     const [scriptLoad, setScriptLoaded] = useState(false);
//     const location = useSelector((state: RootState) => state.location);
//     const address  = useSelector((state: RootState) => (
//         state.address.address))
//     const weatherDataList = useSelector((state: RootState) => state.weather.weatherDataList)

//     //mount once && scriptLoad값이 true로 바뀌면 렌더링 되게끔 설정
//     useEffect(() => {
//         const googleMapScript = loadMapApi();
//         // script를 dom에 추가하는 코드를 넣었고, return 시킴
//         // type은 load, load 되면 이걸 dom에 들어가게 설정
//         googleMapScript.addEventListener('load', function() {
//             setScriptLoaded(true);
//         })
//     }, [])

//     //초기에 weatherDataList 배열에 값이 없을 경우엔 에러가 나서, 삼항연산자로 처리
//     return (
//        <div className='Home'>
//            <h1>검색 위치</h1>
//             {scriptLoad && (
//                 <Mapv2 mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />
//                 )}
//             <GetWeatherInfo />
//             <h2>"{address}" 의 날씨 정보</h2>
//             <div className='Home_weatherDiv'>
//                 <ul>
//                     {weatherDataList && weatherDataList[0] ? <li>{weatherDataList[0].description}</li> : <li>없음</li>}
//                     {weatherDataList && weatherDataList[0] ? <li><img src={weatherDataList[0].icon} alt='weatherIcon'/></li> : <li>없음</li>}
//                     {weatherDataList && weatherDataList[0] ? <li>평균: {weatherDataList[0].temp}</li> : <li>없음</li>}
//                     {weatherDataList && weatherDataList[0] ? <li>최고: {weatherDataList[0].temp_max}</li> : <li>없음</li>}
//                     {weatherDataList && weatherDataList[0] ? <li>최저: {weatherDataList[0].temp_min}</li> : <li>없음</li>}
//                 </ul>
//             </div>
//             <h2>주간 날씨</h2>

//        </div>
//     );
// };

// export default Home;

import React from 'react';
import Main from '../Components/Main';

const Home = () => {
    return (
        <div>
            <Main />
        </div>
    );
};

export default Home;
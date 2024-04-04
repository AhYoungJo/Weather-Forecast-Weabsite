import React, {useState, useEffect} from 'react';
import MapAPI from '../Services/MAP/initMap'
import EngWeahterAPI from '../Services/Weather/Eng/ENG_WeatherAPI'
import Weather from '../Components/Contents/Weather';
import Mapv2 from '../Services/MAP/Map_v2'
import {loadMapApi} from '../Utils/GoogleMApsUtils'

const Home = () => {
    //before mounted
    const [scriptLoad, setScriptLoaded] = useState(false);

    //mount once && scriptLoad값이 true로 바뀌면 렌더링 되게끔 설정
    useEffect(() => {
        const googleMapScript = loadMapApi();
        // script를 dom에 추가하는 코드를 넣었고, return 시킴
        // type은 load, load 되면 이걸 dom에 들어가게 설정
        googleMapScript.addEventListener('load', function() {
            setScriptLoaded(true);
        })
    }, [])

    return (
       <div className='Home'>
            {scriptLoad && (
                <Mapv2 mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />
            )}
       </div>
    );
};

export default Home;
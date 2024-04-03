import React from 'react';
import MapAPI from '../Services/MAP/initMap'
import EngWeahterAPI from '../Services/Weather/Eng/ENG_WeatherAPI'
import Weather from '../Components/Contents/Weather';

const Home: React.FC = () => {
    return (
        <>
            <h1>Home Component아니 왜 안 바뀜?</h1>
            <MapAPI/>
            <EngWeahterAPI/>
            <Weather/>
        </>
    );
};

export default Home;
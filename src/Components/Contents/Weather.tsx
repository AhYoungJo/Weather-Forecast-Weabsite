import React from 'react';
import { RootState } from '../../Store/Data/Reducers';
import { useSelector } from 'react-redux';

const Weather = () => {
    const { address, weatherInfos } = useSelector((state: RootState) => ({
        address: state.address.address,
        weatherInfos: state.weather
    }));

    return (
        <div>
            <p>현재 주소:{address}</p>
            <p>최고:{weatherInfos.temp_max}</p>
        </div>
    );
};

export default Weather;
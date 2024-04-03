// import React, { useEffect, useState } from 'react';
// import styles from './MAP.module.css';
// import {useSelector, useDispatch} from 'react-redux'
// import { RootState } from '../../Store/Data/Reducers';
// // import { setLocation } from '../../Store/Data/Reducers/locationReducer'; 
// // import { setAddress } from '../../Store/Data/Reducers/addressReducer';
// import initializeMap from './MapAPI'; // initializeMap 함수를 가져옴

// const API: React.FC = () => {
//   const [inputValue, setInputValue] = useState('');
//   const dispatch = useDispatch();
//   const { latitude, longitude } = useSelector((state: RootState) => state.location);
//   const address = useSelector((state: RootState) => state.address.address);

//   // useEffect 내부로 useSelector 이동
//   useEffect(() => {
//     // initializeMap 함수 호출
//     initializeMap(address, latitude, longitude, dispatch, setInputValue);
//   }, [address]); // 주소, 위도, 경도, dispatch, setInputValue가 변경될 때마다 호출되어야 하는지 여부에 따라 의존성 배열을 수정

//   return (
//     <div id="map" className={styles.map}></div>
//   );
// };

// export default API;

import React from 'react';

const MapAPIcopy = () => {
  return (
    <div>
      
    </div>
  );
};

export default MapAPIcopy;
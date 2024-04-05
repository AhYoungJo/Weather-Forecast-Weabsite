// import React, { useEffect, useState } from 'react';
// import styles from './MAP.module.css';
// import {useSelector, useDispatch} from 'react-redux'
// import { RootState } from '../../Store/Data/Reducers';
// import { setLocation } from '../../Store/Data/Reducers/locationReducer'; 
// import { setAddress } from '../../Store/Data/Reducers/addressReducer';


// const API: React.FC = () => {

//   const { latitude, longitude } = useSelector((state: RootState) => state.location);
//   const address = useSelector((state: RootState) => state.address.address);
//   const [inputValue, setInputValue] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {

//     const trackUserLocation = async () => {
//     // 사용자가 현재 위치 추적 허용하면 추적후 initmap의 lat, lon에 전달
//     // 사용자가 현재 위치 추적 허용 안 하면 default값으로 initmap의 lat, lon으로 전달
//       try {
//         const position = await new Promise<GeolocationPosition>((resolve, reject) => {
//           navigator.geolocation.getCurrentPosition(resolve, reject);
//         });
//         trackSuccess(position);
//       } catch (error) {
//         console.error("Geolocation error:", error);
//         trackError();
//       }
//     };
//     const trackSuccess = (position: GeolocationPosition) => {
//       dispatch(setLocation(position.coords.latitude, position.coords.longitude));
//       initMap(position.coords.latitude, position.coords.longitude);
//     };

//     const trackError = () => {
//       alert("죄송합니다. 위치 정보를 사용할 수 없습니다.");
//       // 기본값으로 맵을 초기화하기 위해 기본 좌표를 initMap에 전달
//       initMap(latitude, longitude);
//     };

//     const loadScript = async (url: string) => {
//       return new Promise<void>((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = url;
//         script.defer = true;
//         script.onload = () => {
//           resolve();
//         };
//         script.onerror = reject;
//         document.body.appendChild(script);
//       });
//     };

//     const initMap = async (lat: number, lng: number) => {
//       const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//         zoom: 8,
//         center: { lat: lat, lng: lng },
//         mapTypeControl: false,
//         // mapId: "DEMO_MAP_ID", // Map ID is required for advanced markers.
//       });

//       const geocoder = new google.maps.Geocoder();

//       const inputText = document.createElement("input");
//       inputText.type = "text";
//       inputText.placeholder = "주소";
//       inputText.classList.add(styles.input)
//       inputText.value = inputValue;

//       const submitButton = document.createElement("input");
//       submitButton.type = "button";
//       submitButton.value = "검색";
//       submitButton.classList.add(styles.button);

//       const clearButton = document.createElement("div");
//       clearButton.classList.add(styles.clear_button);

//       const findMeButton = document.createElement("input");
//       findMeButton.type = "button";
//       findMeButton.value = "현재 위치";
//       findMeButton.classList.add(styles.button)

//       const response = document.createElement("pre");
//       response.id = "response";
//       response.innerText = "";

//       const responseDiv = document.createElement("div");
//       responseDiv.classList.add(styles['response-container']); // CSS 모듈 클래스 이름 추가
//       responseDiv.appendChild(response);
      
//       map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
//       map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
//       map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);
//       map.controls[google.maps.ControlPosition.LEFT_TOP].push(findMeButton);
//       map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);

//       // 마커 커스터마이징할 부분
//       const marker = new google.maps.Marker({
//         map,
//       });
//       // const marker = new google.maps.marker.AdvancedMarkerElement({
//       //   map,
//       //   position: position,
//       //   title: 'Uluru',
//       // });

//       map.addListener("click", (e: google.maps.MapMouseEvent) => {
//         geocode({ location: e.latLng });
//         responseDiv.style.display = "block";
//         // console.log(e.latLng)
//       });

//       findMeButton.addEventListener("click", () => {
//         trackUserLocation()
//       })

//       inputText.addEventListener("change", (event) => {
//         if(event.target instanceof HTMLInputElement) {
//           console.log("event", event.target.value)
//           // input 값이 변경될 때마다 inputValue 업데이트
//           setInputValue(event.target.value);
//           // Redux store의 address 값을 업데이트
//           dispatch(setAddress(event.target.value));
//         }
//       });


//       //주소 입력값 gecode 함수에 전달
//       //store에 있는 address값 전달
//       submitButton.addEventListener("click", () =>
//         geocode({ address: address })
//       );
//       // submitButton.addEventListener("click", () =>
//       //   geocode({ address: (inputText as HTMLInputElement).value })
//       // );

//       clearButton.addEventListener("click", () => {
//         clear();
//       });

//       function clear() {
//         marker.setMap(null);
//         responseDiv.style.display = "none";
//       }


//       function geocode(request: google.maps.GeocoderRequest): void {
//         clear();

//         geocoder
//           .geocode(request, (results, status) => {
//             if (status === 'OK') {
//               map.setCenter(results[0].geometry.location);
//               marker.setPosition(results[0].geometry.location);
//               marker.setMap(map);
//               responseDiv.style.display = "block";
//               response.innerText = JSON.stringify(results[0].formatted_address);
//               dispatch(setLocation(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
//               dispatch(setAddress(results[0].formatted_address))
//               console.log('검색 위치', "latitue: ", latitude)
//               console.log('검색 위치', "longitude: ", longitude)
//               console.log('검색 위치', "주소:", address)
//               console.log('검색 위치 상세 주소', results[0].formatted_address)
//             } else {
//               alert("Geocode was not successful for the following reason: " + status);
//             }
//           });
//       }
//     };

//     // Google Maps API 스크립트 로드 및 초기화 함수 실행
//     const loadAndInitMap = async () => {
//       try {
//         // Google Maps API 스크립트가 로드되지 않은 경우에만 스크립트 로드
//         if (!window.google) {
//           await loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&callback=initMap`);
//         }
//         initMap(latitude, longitude);
//       } catch (error) {
//         console.error('Error loading Google Maps API:', error);
//       }
//     };
    
//     // Google Maps API 스크립트가 로드된 후에 initMap 함수 호출
//     trackUserLocation()
    
//     loadAndInitMap();

//     // Google Maps API 스크립트가 로드되었을 경우
//     // 선택한 스크립트 요소를 제거하여 해당 스크립트를 DOM에서 삭제
//     // Google Maps API 스크립트를 로드하는 데 사용된 자원 해제
//     return () => {
//       const script = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
//       if (script) {
//         script.remove();
//       }
//     };
    
//   }, [dispatch]);

//   return (
//     <div id="map" className={styles.map}></div>
//   );
// };

// export default API;

import React from 'react';

const initMap = () => {
  return (
    <div>
      
    </div>
  );
};

export default initMap;
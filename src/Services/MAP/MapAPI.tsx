// import React, { useState } from 'react';
// import styles from './MAP.module.css';
// // import {useSelector, useDispatch} from 'react-redux'
// // import { RootState } from '../../Store/Data/Reducers';
// import { setLocation } from '../../Store/Data/Reducers/locationReducer'; 
// import { setAddress } from '../../Store/Data/Reducers/addressReducer';

// const loadScript = async (url: string) => {
//   return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = url;
//         script.defer = true;
//         script.onload = resolve;
//         script.onerror = reject;
//         document.body.appendChild(script);
//    });
// };

// const initMap = (address: string, latitude: number, longitude: number, dispatch: any, setInputValue: Function) => {
//       const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//         zoom: 8,
//         center: { lat: -34.397, lng: 150.644 },
//         mapTypeControl: false,
//         // mapId: "DEMO_MAP_ID", // Map ID is required for advanced markers.
//       });
//       const geocoder = new google.maps.Geocoder();

//       const inputText = document.createElement("input");
//       inputText.type = "text";
//       inputText.placeholder = "주소";
//       inputText.classList.add(styles.input);
//       setInputValue(inputText.value);

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
//       // responseDiv.id = "response-container";
//       // responseDiv.appendChild(response);

//       const searchBox = document.createElement("div");
//       searchBox.appendChild(inputText);
//       searchBox.appendChild(submitButton);
//       searchBox.classList.add(styles.searchBox)

//       map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchBox);
//       // map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
//       // map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
//       map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);
//       // map.controls[google.maps.ControlPosition.LEFT_TOP].push(instructionsElement);
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

//     map.addListener("click", (e: google.maps.MapMouseEvent) => {
//       geocode({ location: e.latLng });
//       responseDiv.style.display = "block";
//         // console.log(e.latLng)
//     });


//     inputText.addEventListener("change", (event) => {
//       if(event.target instanceof HTMLInputElement) {
//               // input 값이 변경될 때마다 inputValue 업데이트
//         setInputValue(event.target.value);
//               // Redux store의 address 값을 업데이트
//         dispatch(setAddress(event.target.value));
//       }
//     });


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

//               console.log('검색 위치', "latitue: ", latitude)
//               console.log('검색 위치', "longitude: ", longitude)
//               console.log('검색 위치', "주소:", address)
//               console.log('검색 위치 상세 주소', results[0].formatted_address)
//             } else {
//               alert("Geocode was not successful for the following reason: " + status);
//             }
//           });
//       }
// };
    
// const initializeMap = async (address: string, latitude: number, longitude: number, dispatch: any, setInputValue: Function) => {
//   try {
//     await loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&callback=initMap`);
//     initMap(address, latitude, longitude, dispatch, setInputValue);
//   } catch (error) {
//     console.error('Error loading Google Maps API:', error);
//   }
// };

// export default initializeMap;




import React from 'react';

const MapAPI = () => {
  return (
    <div>
      
    </div>
  );
};

export default MapAPI;
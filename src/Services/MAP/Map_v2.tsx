import React, { useRef, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../../Store/Data/Reducers';
import { setLocation } from '../../Store/Data/Reducers/locationReducer'; 
import { setAddress } from '../../Store/Data/Reducers/addressReducer';
import './Map_v2.scss'

interface IMap {
    mapType: google.maps.MapTypeId,
    mapTypeControl?: boolean;
    Input_Top: HTMLInputElement | null;
}

interface IMarker {
    latitude: number;
    longitude: number;
    googleMarker: google.maps.Marker; // 추가: 구글 마커 객체를 저장할 변수
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;
type GoogleMarker = google.maps.Marker;
type GoogleMoustEvent = google.maps.MouseEvent;
type GoogleAutocomplete = google.maps.places.Autocomplete;

//install --save-dev @types/googlemaps

//즐겨찾기 selector을 하나 만들자. 지도/위성 쪽에다가 selector넣고
//db에서 받아서 value를 값 넣어
// 해당 slector클릭하면 그 위도 경도 값 받아와서 map.center, map.marker하면 되고, 그 위도 경도값을 reducer어디로 저장해야 하네...
// weahter로 보내줘야 하니까.

//그래서 여기서 만약 F1이 있으면, 저장된 값으로 initmap이 되게끔 하기

//문제1.
//바깥 input은 마커와 위치는 뜨는데, map이 존재해서 center가 안먹힌다. 아무래도 useEffect가 중복하는듯.
//dispatch가 전혀 안 되고 있음

//

const Map_v2: React.FC<IMap> = ({mapType, mapTypeControl = false, Input_Top}) => {
    const location = useSelector((state: RootState) => state.location);
    const addressState = useSelector((state: RootState) => state.address);
    const ref = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<GoogleMap>();
    // const [marker, setmarker] = useState<IMarker>();
    const [markers, setMarker] = useState<IMarker[]>([]);
    const dispatch = useDispatch();


    useEffect(() => {
        startMap();
        defaultMapMarker();
        initEventListener();
        addAutocomplete();
        addAutocomplete_Top();
        addCurrentLocationButton();
        addClearButton();
    }, [map]);

    //최초 맵 실행
    const defaultAddress = new google.maps.LatLng(37.53631710000001, 126.9771144);
    const defaultMapStart = ():void => {
        initMap(12, defaultAddress);
    }
    const defaultMapMarker = ():void => {
        setupMarker(defaultAddress)
    }
    const startMap = ():void => {
        if(!map) {
            defaultMapStart()
        }
    };
    

    //최초 실행 이후
    const initEventListener = ():void => {
        //맵에 값이 존재할 때
        //맵을 클릭하면 이벤트 함수 실행
        if(map) {
            google.maps.event.addListener(map, 'click', function(event: GoogleMoustEvent) {
                if (event.latLng) { 
                    coordinateToAddress(event.latLng);
                }
            })
        }
    };


    //지오코딩 핵심 코드
    const coordinateToAddress =  async (coordinate: GoogleLatLng) => {
        //구글맵 지오코더 생성자 함수... 대박...
        const geocoder = new google.maps.Geocoder();
        
        // 메소드!!!!
        // 받아오는 값의 타입을 미리 알려주는 ... 것도 있음?? 설치 필수다 이거 진짜
        await geocoder.geocode({location: coordinate}, function (results, status) {
            if(status === "OK" && results !== null) {
                const where = results[0].formatted_address;
                const latLng = {
                    lat: coordinate.lat(),
                    lng: coordinate.lng()
                }

                console.log('map click responses: ', latLng.lat, latLng.lng)

                dispatch(setLocation(latLng.lat, latLng.lng));
                dispatch(setAddress(where))

                //새로운 마커 생성 
                const newMarker: IMarker = {
                    latitude: latLng.lat,
                    longitude: latLng.lng,
                    googleMarker: new google.maps.Marker({
                        position: latLng,
                        map: map,
                        icon: getIconAttributes(),
                    })
                };

            
                // 이전 마커 배열에 새로운 마커 추가
                addMarkerToArray(newMarker);
                addMarker();

                map?.setCenter(latLng);
            } 
        })

    }

    //현재 위치 받아오기
    const addCurrentLocationButton = (): void => {
        const currentLocationButton = document.createElement('button');
        currentLocationButton.classList.add('map-container_button');
        map?.controls[google.maps.ControlPosition.TOP_CENTER].push(currentLocationButton);
        currentLocationButton.addEventListener('click', () => {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const currentAddress = new google.maps.LatLng(
                            position.coords.latitude,
                            position.coords.longitude
                        );
                        coordinateToAddress(currentAddress);
                    }
                );
            }
        });
    };


    //마커 추가하기
    const addMarkerToArray = (newMarker: IMarker) => {
        setMarker(prevMarkers => [...prevMarkers, newMarker]);
    };

    const setupMarker = (location: GoogleLatLng):void => {
        new google.maps.Marker({
            position: location,
            map: map,
            icon: getIconAttributes(),
        })
    }

    const addMarker = () => {
        markers?.forEach((mark) => {
            setupMarker(new google.maps.LatLng(mark.latitude, mark.longitude));
        });
    }

    const getIconAttributes = () => {
        const svgMarker = `
            <svg xmlns="http://www.w3.org/2000/svg" height="800px" width="800px" viewBox="0 0 512 512" version="1.1" id="_x36_" xml:space="preserve">
                <g>
                    <path style="fill:#1b84fc;" d="M424.269,212.061c0,58.586-23.759,111.638-62.128,150.007L213.684,510.451L212.134,512
                        L62.275,362.141c-7.231-7.157-13.872-14.905-19.996-23.095C15.716,303.703,0,259.726,0,212.061
                        c0-51.06,18.077-97.914,48.182-134.512c8.78-10.773,18.668-20.586,29.366-29.367C114.147,18.077,161.074,0,212.134,0
                        c40.655,0,78.582,11.437,110.826,31.211c28.554,17.487,52.609,41.541,70.097,70.097
                        C412.831,133.552,424.269,171.478,424.269,212.061z"/>
                    <path style="fill:#304c7d;" d="M339.392,212.081c0,70.284-56.968,127.258-127.259,127.258
                        c-70.277,0-127.258-56.974-127.258-127.258S141.856,84.822,212.133,84.822C282.424,84.822,339.392,141.797,339.392,212.081z"/>
                    <path style="opacity:0.13;fill:#ffffff;" d="M424.269,212.061c0,58.586-23.759,111.638-62.128,150.007L213.684,510.451L212.134,512
                        V0c40.655,0,78.582,11.437,110.826,31.211c28.554,17.487,52.609,41.541,70.097,70.097
                        C412.831,133.552,424.269,171.478,424.269,212.061z"/>
                </g>
            </svg>
        `;
        return {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgMarker)}`,
            scaledSize: new google.maps.Size(36, 43), // Adjust the size as needed
            anchor: new google.maps.Point(12, 33), // Adjust anchor point
        };
    };


    //초기 지도로 돌리기
    // 상태 업데이트가 비동기적으로 이루어지기 때문에 배열을 업데이트 한 후 바로 업데이트된 상태를 사용해도 업데이트된 내용이 반영 안 됐을 수 있음
    // const clear = () => {
    //     markers.forEach(mark => mark.googleMarker.setMap(null)); // 모든 마커를 지도에서 제거하는 함수
    //     setMarker([]); // 마커 배열을 직접 빈 배열로 초기화
    //      근데 비동기로 작동하니까, coordinateToAddress함수가 호출이 먼저 일어나서 변경된 내용이 반영 안 된 것
    //     coordinateToAddress(defaultAddress); 
    //  marker의 상태 변경하는 함수가 다른 곳에도 있잖음.
    //  리액트느 다수의 상태가 변경될 때, 각 상태를 순차적으로 변경하는게 아니고 한번에 업데이트 함
    // 상태 업데이트가 한번에 이뤄지면, 초기화시키려고 헀던 함수가 제대로 작동되지 않을 수 있음
    // 그래서 마크가 남았던 것
    // };

    // 해결 방법: setMarer을 함수형으로 만들면, 바로 직전 상태를 불러올 수 있음.
    // 이러면 확실하게 상태가 업데이트 됨을 예측할 수 있게 됨.
    // 버그 해결!
    // setMarker(prevMarkers => []);
    // markers 배열을 업데이트한 후 

    const clear = () => {
        setMarker(prevMarkers => {
            prevMarkers.forEach(mark => mark.googleMarker.setMap(null))
            return []; // 빈 배열로 초기화
        });
        coordinateToAddress(defaultAddress);
    };
    const addClearButton = (): void => {
        const clearButton = document.createElement('button');
        clearButton.classList.add('map-container_clearbutton');
        map?.controls[google.maps.ControlPosition.TOP_CENTER].push(clearButton);
        clearButton.addEventListener('click', clear); // 클릭 이벤트 핸들러 설정
    };

    //검색어 자동 완성 기능
    const addAutocomplete = ():void => {
        const autoCompleteInput = document.createElement('input');
        autoCompleteInput.setAttribute('placeholder', '장소를 검색하세요');
        autoCompleteInput.classList.add('map-container_input');
        map?.controls[google.maps.ControlPosition.TOP_CENTER].push(autoCompleteInput);
        const autocompleteInstance = new google.maps.places.Autocomplete(autoCompleteInput);
        autocompleteInstance.addListener('place_changed', () => {
            const place = autocompleteInstance.getPlace();
            // const where = place.formatted_address;
            const latLng: google.maps.LatLngLiteral = {
                lat: place.geometry?.location?.lat() || 0,
                lng: place.geometry?.location?.lng() || 0,
            };
            // const where = place.formatted_address;
            console.log(latLng.lat, latLng.lng)

            const sendLatLng = new google.maps.LatLng(latLng.lat, latLng.lng);
                
            const newMarker: IMarker = {
                latitude: latLng.lat,
                longitude: latLng.lng,
                googleMarker: new google.maps.Marker({
                    position: latLng,
                    map: map,
                    icon: getIconAttributes(),
                })
            };

            setMarker(prevMarkers => [...prevMarkers, newMarker]);
            coordinateToAddress(sendLatLng)

            // autoCompleteInput.value = `${where}`;
            autoCompleteInput.addEventListener('focus', (e: FocusEvent) => {
                (e.target as HTMLInputElement).value = '';
            })
        })
    }
        
    const addAutocomplete_Top = ():void => {
        if (Input_Top) {
            const InputTopInstance = new google.maps.places.Autocomplete(Input_Top);
            InputTopInstance.addListener('place_changed', () => {
                const place = InputTopInstance.getPlace();
                const latLng: google.maps.LatLngLiteral = {
                    lat: place.geometry?.location?.lat() || 0,
                    lng: place.geometry?.location?.lng() || 0,
                };
                const sendLatLng = new google.maps.LatLng(latLng.lat, latLng.lng);
                       
                const newMarker: IMarker = {
                    latitude: latLng.lat,
                    longitude: latLng.lng,
                    googleMarker: new google.maps.Marker({
                        position: latLng,
                        map: map,
                        icon: getIconAttributes(),
                    })
                };
        
                // 이전 마커 배열에 새로운 마커 추가
                setMarker(prevMarkers => [...prevMarkers, newMarker]);
                coordinateToAddress(sendLatLng);
                // Input_Top.value = `${where}`;
                Input_Top.addEventListener('focus', (e: FocusEvent) => {
                    (e.target as HTMLInputElement).value = '';
                })

            })
        }
    } 
    
    //불필요한 라벨들 제거
    const myStyles =[
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                  { visibility: "off" }
            ]
        }
    ];

    const myStyles2 = [
        {
            featureType: "administrative.land_parcel",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
          ]
        },
        {
            featureType: "poi",
            elementType: "labels.text",
            stylers: [
                { visibility: "off" }
          ]
        },
        {
            featureType: "poi.business",
            stylers: [
                { visibility: "off" }
          ]
        },
        {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
                { visibility: "off" }
          ]
        },
        {
            featureType: "road.arterial",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
          ]
        },
        {
            featureType: "road.highway",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
          ]
        },
        {
            featureType: "road.local",
            stylers: [
                { visibility: "off" }
          ]
        },
        {
            featureType: "road.local",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
          ]
        },
        {
            featureType: "transit",
            stylers: [
                { visibility: "off" }
          ]
        }
      ]

    const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
        if(ref.current) {
            // Map값
            setMap(
                //구글 맵 객체 생성 함수, 
                new google.maps.Map(ref.current, {
                    zoom: zoomLevel,
                    center: address,
                    mapTypeControl: false,
                    mapTypeId: mapType,
                    streetViewControl: false,
                    rotateControl: false,
                    scaleControl: true,
                    fullscreenControl: false,
                    panControl: false,
                    scrollwheel: true,
                    zoomControl: false,
                    gestureHandling: 'cooperative',
                    draggableCursor: 'pointer',
                    styles: myStyles2,
                })
            );
        }
    };

    return (
        <>
        <div className='map-container'>
            <div ref={ref} className='map-container_map'></div>
        </div>
        </>
    );
}

export default Map_v2;




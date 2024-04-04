import React, { useRef, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../../Store/Data/Reducers';
import { setLocation } from '../../Store/Data/Reducers/locationReducer'; 
import { setAddress } from '../../Store/Data/Reducers/addressReducer';
import './Map_v2.scss'

interface IMap {
    mapType: google.maps.MapTypeId,
    mapTypeControl?: boolean;
}

interface IMarker {
    address: string;
    latitude: number;
    longtitude: number;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;
type GoogleMarker = google.maps.Marker;
type GoogleMoustEvent = google.maps.MouseEvent;
type GoogleAutocomplete = google.maps.places.Autocomplete;

//install --save-dev @types/googlemaps

//dispatch해야 하는 경우 3가지
//1. 사용자가 입력할 때 => autocompelete, searchbox
//2. 즐겨찾기에서 주소 클릭할 때 => 아직 안 만듬
//3. 맵에서 클릭할 떄

const Map_v2: React.FC<IMap> = ({mapType, mapTypeControl = false}) => {
    const { latitude, longitude } = useSelector((state: RootState) => state.location);
    const address = useSelector((state: RootState) => state.address.address);
    const ref = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<GoogleMap>();
    const [marker, setmarker] = useState<IMarker>();
    const [autocomplete, setAutocomplete] = useState<GoogleAutocomplete>();

    const dispatch = useDispatch();

    const autoCompleteInput = document.createElement('input');
    autoCompleteInput.setAttribute('placeholder', 'Search for places');
    autoCompleteInput.classList.add('map-container_input');

    //즐겨찾기 selector을 하나 만들자. 지도/위성 쪽에다가 selector넣고
    //db에서 받아서 value를 값 넣어
    // 해당 slector클릭하면 그 위도 경도 값 받아와서 map.center, map.marker하면 되고, 그 위도 경도값을 reducer어디로 저장해야 하네...
    // weahter로 보내줘야 하니까.
    
    //그래서 여기서 만약 F1이 있으면, 저장된 값으로 initmap이 되게끔 하기

    //문제1.
    //바깥 input은 마커와 위치는 뜨는데, map이 존재해서 center가 안먹힌다. 아무래도 useEffect가 중복하는듯.
    //dispatch가 전혀 안 되고 있음

    const addAutocomplete = () => {
        const autocompleteInstance = new google.maps.places.Autocomplete(autoCompleteInput);
            setAutocomplete(autocompleteInstance);

            autocompleteInstance.addListener('place_changed', () => {
                const place = autocompleteInstance.getPlace();
                const latLng: google.maps.LatLngLiteral = {
                    lat: place.geometry?.location?.lat() || 0,
                    lng: place.geometry?.location?.lng() || 0,
                };
                const where = place.formatted_address;
                console.log(latLng.lat, latLng.lng, where)
                
                // autocomplete으로 lat, lng가져온 걸로 아래에 추가함

                // 1번 
                dispatch(setLocation(latLng.lat, latLng.lng));
                dispatch(setAddress(where))

                console.log('autocomplete dispatch Test:', address, latitude, longitude)

                setmarker({
                    address: where || '',
                    latitude: latLng.lat,
                    longtitude: latLng.lng,
                });

                // 가져온 값으로 mapcenter조정                
                    map?.setCenter(latLng);
            })
    }
    
    const inMapInput = ():void => {
        if (map) {
            map.controls[google.maps.ControlPosition.TOP_CENTER].push(autoCompleteInput);
            // ref.current.appendChild(autoCompleteInput);
            addAutocomplete();
            
    }}

    useEffect(inMapInput, [map])

    const outofMapInput= ():void => {
        const SearchBox = document.querySelector<HTMLDivElement>('#Search');
        if (SearchBox) {
            SearchBox.appendChild(autoCompleteInput);
        }
        addAutocomplete()
    }

    useEffect(outofMapInput, [map])


    const startMap = ():void => {
        if(!map) {
            defaultMapStart()
        }
    };

    useEffect(startMap, [map]);



    //지오코딩 함수 
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

                console.log('map click responses: ', where, latLng.lat, latLng.lng)

                //3번
                dispatch(setLocation(latLng.lat, latLng.lng));
                dispatch(setAddress(where))

                console.log('map click dispatch Test:', address, latitude, longitude)

                setmarker( {
                    address: where,
                    latitude: latLng.lat,
                    longtitude: latLng.lng,
                })
                map?.setCenter(latLng);
            } 
        })

    }

    const defaultAddress = new google.maps.LatLng(37.53631710000001, 126.9771144);
    const defaultMapStart = ():void => {
        // todo: initmap
        initMap(12, defaultAddress);
    }

    const defaultMapMarker = ():void => {
        addMarker(defaultAddress)
    }
    useEffect(defaultMapMarker, [map])


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

    useEffect(initEventListener, [map])

    useEffect(() => {
        addClearButton();
            addCurrentLocationButton();
    }, [map]);


    const addCurrentLocationButton = (): void => {
        if(map) {
            const currentLocationButton = document.createElement('button');
            currentLocationButton.classList.add('map-container_button');
            map.controls[google.maps.ControlPosition.TOP_RIGHT].push(currentLocationButton);
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
        }
    };

    const clear = () => {
        coordinateToAddress(defaultAddress)
    }
    
    const addClearButton = (): void => {
        if(map) {
            const clearButton = document.createElement('button');
            clearButton.classList.add('map-container_clearbutton');
            map.controls[google.maps.ControlPosition.TOP_RIGHT].push(clearButton)
            clearButton.addEventListener('click', () => {
                clear()
            })
        }
    }

    
    const addSingleMarker = () => {
        if(marker) {
            addMarker(new google.maps.LatLng(marker.latitude, marker.longtitude));
        }
    }
    useEffect(addSingleMarker, [marker])
    
    const addMarker = (location: GoogleLatLng):void => {
        new google.maps.Marker({
            position: location,
            map: map,
            icon: getIconAttributes(),
        })
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

    const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
        if(ref.current) {
            // Map값
            setMap(
                //구글 맵 객체 생성 함수, 
                new google.maps.Map(ref.current, {
                    zoom: zoomLevel,
                    center: address,
                    mapTypeControl: mapTypeControl,
                    streetViewControl: false,
                    rotateControl: false,
                    scaleControl: true,
                    fullscreenControl: false,
                    panControl: false,
                    scrollwheel: true,
                    zoomControl: true,
                    gestureHandling: 'cooperative',
                    mapTypeId: mapType,
                    draggableCursor: 'pointer',
                })
            );
        }
    };

    return (
        <>
        <div id='Search'className='inputBox'></div>
        <div className='map-container'>
            {/* <button type='button' id='button' className="map-container_button">현재 위치</button> */}
            <div ref={ref} className='map-container_map'></div>
        </div>
        </>
    );
}

export default Map_v2;
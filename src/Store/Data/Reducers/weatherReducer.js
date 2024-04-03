// 액션 타입 정의
const SET_WEATHER = 'SET_WEATHER';

// 액션 생성자
export const setWeather = ( description,
    icon,
    id,
    name,
    temp,
    temp_max,
    tem_min,
    feels_like,
    winddeg,
    windspeed,) => ({
        
    type: SET_WEATHER,
    description,
    icon,
    id,
    name,
    temp,
    temp_max,
    tem_min,
    feels_like,
    winddeg,
    windspeed,
});

// 초기 상태 정의
const initialState = {
    description: '',
    icon: '',
    id: 0,
    name: '',
    temp: 0,
    temp_max: 0,
    tem_min: 0,
    feels_like: 0,
    winddeg: 0,
    windspeed: 0,
};

// 리듀서 함수
const weahterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEATHER:
            return {
                ...state,
                description: action.description,
                icon: action.icon,
                id: action.id,
                name: action.name,
                temp: action.temp,
                temp_max: action.temp_max,
                tem_min: action.tem_min,
                feels_like: action.feels_like,
                winddeg: action.winddeg,
                windspeed: action.windspeed,
            };
        default:
            return state;
    }
};

export default weahterReducer;
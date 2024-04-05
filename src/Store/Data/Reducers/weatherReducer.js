// 액션 타입 정의
const SET_WEATHER = 'SET_WEATHER';

// 액션 생성자
export const setWeather = (weatherData) => ({
    type: SET_WEATHER,
    payload: weatherData
});

// 초기 상태 정의
const initialState = {
    weatherDataList: []
};

// 리듀서 함수
const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weatherDataList: action.payload
            };
        default:
            return state;
    }
};

export default weatherReducer;
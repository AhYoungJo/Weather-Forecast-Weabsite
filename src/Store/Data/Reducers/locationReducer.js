// 액션 타입 정의
const SET_LOCATION = 'SET_LOCATION';

// 액션 생성자
export const setLocation = (latitude, longitude) => ({
    type: SET_LOCATION,
    latitude,
    longitude,
});

// 초기 상태 정의
const initialState = {
    latitude: 37.53631710000001,
    longitude: 126.9771144,
};

// 리듀서 함수
const locationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOCATION:
            return {
                ...state,
                latitude: action.latitude,
                longitude: action.longitude,
            };
        default:
            return state;
    }
};

export default locationReducer;
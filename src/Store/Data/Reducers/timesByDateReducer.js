const SET_TIMES_BY_DATE = 'SET_TIMES_BY_DATE';

export const setTimesByDate = (timesByDate) => ({
    type: SET_TIMES_BY_DATE,
    payload: timesByDate,
});

const initialState = {
    timeByDate: {},
};

const timesByDateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TIMES_BY_DATE:
            return {
                ...state,
                timeByDate: action.payload,
            };
        default:
            return state;
    }
};

export default timesByDateReducer;

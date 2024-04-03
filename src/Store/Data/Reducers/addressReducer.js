const initialState = {
    address: '', // 사용자가 입력한 주소 키워드
  };
  
  export const setAddress = (address) => ({
    type: 'SET_address',
    address,
  });
  
  const addressReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SET_address':
        return {
          ...state,
          address: action.address,
        };
      default:
        return state;
    }
  };
  
  export default addressReducer;
  
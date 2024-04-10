const initialState = {
    address: '대한민국 서울특별시 용산구', // 사용자가 입력한 주소 키워드
    shortenAddress: '서울특별시 용산구'
  };
  
  export const setAddress = (address, shortenAddress) => ({
    type: 'SET_address',
    address,
    shortenAddress
  });
  
  const addressReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SET_address':
        return {
          ...state,
          address: action.address,
          shortenAddress: action.shortenAddress,
        };
      default:
        return state;
    }
  };
  
  export default addressReducer;

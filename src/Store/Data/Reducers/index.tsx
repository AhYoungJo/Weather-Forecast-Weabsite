import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import addressReducer from "./addressReducer";
import weahterReducer from "./weatherReducer";


//combineReducer: 여러 개으 리듀서를 하나로 합침
const rootReducer = combineReducers({
    location: locationReducer,
    address: addressReducer,
    weather: weahterReducer,
})

/**
 * 일반적으로 Redux 애플리케이션에서는 RootState라는 이름으로 상태의 전체 타입을 정의하는 것이 일반적
 * 루트 리듀서의 반환 타입을 기반하는 것 
 * RootState 타입은 모든 서브 리듀서에서 반환하는 상태를 포함
 * 
 */
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
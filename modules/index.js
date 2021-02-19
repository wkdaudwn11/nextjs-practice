import { combineReducers } from "redux"; // 여러 리듀서들을 하나로 합쳐준다.
import count from "./count";

const rootReducer = combineReducers({ count });

export default rootReducer; // _app.js에서 reducer로 사용된다!

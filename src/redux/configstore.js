import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import word from "./modules/word"

//export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({word}) //{word} -> word:word 
// Reducer를 함친 후 rootReducer 할당
const store = createStore(rootReducer,enhancer) // rootReducer를 createStore에 넣은 후 store 할당

export default store
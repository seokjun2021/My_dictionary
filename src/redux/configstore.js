import {createStore,combineReducers} from "redux"
import word from "./modules/word"

const rootReducer = combineReducers({word}) //{word} -> word:word 
// Reducer를 함친 후 rootReducer 할당
const store = createStore(rootReducer) // rootReducer를 createStore에 넣은 후 store 할당

export default store
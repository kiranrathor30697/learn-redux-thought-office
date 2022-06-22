import { legacy_createStore } from "redux";
import { initialState } from "../initialState/initialState";
import { rootReducer } from "../Reducers/rootReducer";


// export const rootReducer = combineReducers({
//     reducer1,
//     reducer2
// })

export const store = legacy_createStore(rootReducer,initialState);
console.log(store)
import { combineReducers } from "redux";
import { CHANGE_NAME_ANJALI, CHANGE_NAME_RUDRANSH, DECREAMENT, INCREAMENT } from "../constants/Constants";

export const rootReducer = (initialState,action) => {
    let newState = initialState;
    // console.log(newState);

    switch (action.type){

        case CHANGE_NAME_ANJALI:
            // console.log(newState);
            return newState = 'Anjali'
            
        case CHANGE_NAME_RUDRANSH:
            // console.log(newState);
            return newState = 'Rudransh'
        default :
            return newState.name
    }
}

// const reducer2 = (initialState,action) => {
//     let newState = initialState;
//     // console.log(newState);

//     switch (action.type){
//         case INCREAMENT:
//             console.log(newState);
//             return newState = 'Anjali'

//             case DECREAMENT:
//             console.log(newState);
//             return newState = 'Rudransh'
//         default :
//             return newState.no
//         }
// }


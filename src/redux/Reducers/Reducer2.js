import { DECREAMENT, INCREAMENT } from "../constants/Constants";

export const Reducer2 = (initialState,action) => {
    let newState = initialState;
    // console.log(newState);

    switch (action.type){
        case INCREAMENT:
            console.log(newState);
            return newState = 'Anjali'

            case DECREAMENT:
            console.log(newState);
            return newState +1;
        default :
            return newState.no
        }
}
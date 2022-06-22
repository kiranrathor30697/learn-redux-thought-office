import { CHANGE_NAME_ANJALI, CHANGE_NAME_RUDRANSH } from "../constants/Constants";

export const Reducer1 = (initialState,action) => {
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
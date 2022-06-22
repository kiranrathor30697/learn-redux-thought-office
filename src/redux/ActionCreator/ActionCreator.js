import { CHANGE_NAME_ANJALI, CHANGE_NAME_RUDRANSH, DECREAMENT, INCREAMENT } from "../constants/Constants"

export const increamentActionCreator = () => {
    return {
        type:INCREAMENT
    }
}

export const decreamentActionCreator = () => {
    return {
        type:DECREAMENT
    }
}

export const changeNameAnjaliActionCreator = () => {
    return {
        type:CHANGE_NAME_ANJALI
    }
}

export const changeNameRudranshActionCreator = () => {
    return {
        type: CHANGE_NAME_RUDRANSH
    }
}
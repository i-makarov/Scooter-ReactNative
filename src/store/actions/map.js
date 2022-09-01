import { USE_MAP } from "../types"
import { mapConstants } from "../types"

export const toPoint = foo => {
    return {
        type: USE_MAP,
        payload: foo
    } 
}


export const showPointInf = (id) => {
    return {
        type: mapConstants.POINT_INFORMATION,
        payload: id, 
    }
}

export const setNavigation = (data) => {
    return {
        type: mapConstants.SET_NAVIGATION,
        payload: data, 
    }
}

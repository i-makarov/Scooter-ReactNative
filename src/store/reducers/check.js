import { ADD_CHECK } from "../types"

const initialState = {
    allCheck: [],
    currentCheck: {
        place:{
            date: {
                date: "",
            }
        }
    }
}

export const checkReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHECK: 
            return {
                ...state,
                allCheck: [...state.allCheck, { ...action.payload }],
                currentCheck: action.payload
            };

        default:
            return state
    }
}



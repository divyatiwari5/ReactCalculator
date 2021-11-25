const initialState = {
    displayValue: 0,
    calculatedValue: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_DISPLAY_VALUE": 
            return {...state, displayValue: action.payload}
        case "CALCULATE_VALUE":
            return {...state}
        case "CLEAR": 
            return {...initialState}
        default: return { ...state }
    }
}

export default rootReducer
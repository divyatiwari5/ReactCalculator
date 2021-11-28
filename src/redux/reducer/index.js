const initialState = {
    displayValue: '',
    calculatedValue: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_DISPLAY_VALUE": 
            return {...state, displayValue: action.payload}
        case "CALCULATE_VALUE":
            return {...state, calculatedValue: action.payload}
        case "CLEAR": 
            return {...initialState}
        default: return { ...state }
    }
}

export default rootReducer
import { INCREAMENT_COUNTER, DECREMENT_COUNTER } from './action';
const initialState = {
    count: 0
}

const counterReducer = (state = initialState, aciton) => {
    switch (aciton.type) {
        case INCREAMENT_COUNTER:
            return {
                ...state,
                count: state.count + aciton.payload
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - aciton.payload
            }
        default: return state
    }
}

export default counterReducer;
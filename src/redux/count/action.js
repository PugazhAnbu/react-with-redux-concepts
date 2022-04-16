export const INCREAMENT_COUNTER = 'INCREAMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increamentCount = (countInput = 1) => {
    return {
        type: INCREAMENT_COUNTER,
        payload: countInput
    }
}

export const decrementCount = (countInput = 1) => {
    return {
        type: DECREMENT_COUNTER,
        payload: countInput
    }
}
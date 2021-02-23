import { SET_PROFIT_DATA } from '../actions'

function cryptoReducer(state = { profitData: {} }, action) {
    switch (action.type) {
        case SET_PROFIT_DATA:
            state.profitData = action.data
            console.log(state)
            return state
        default:
            return state
    }
}

export default cryptoReducer
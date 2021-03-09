import { SET_PROFIT_DATA, LOAD_TRANSACTIONS } from '../actions'

function cryptoReducer(state = { profitData: {}, transactions: '' }, action) {
    switch (action.type) {
        case SET_PROFIT_DATA:
            state.profitData = action.data
            return state
        case LOAD_TRANSACTIONS:
            state.transactions = action.crypto
            return state
        default:
            return state
    }
}

export default cryptoReducer
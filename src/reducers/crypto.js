import { SET_PROFIT_DATA, LOAD_TRANSACTIONS, SET_USERS_CRYPTO } from '../actions'

function cryptoReducer(state = { profitData: {}, currentCrypto: '' }, action) {
    switch (action.type) {
        case SET_PROFIT_DATA:
            state.profitData = action.data
            return state
        case SET_USERS_CRYPTO:
            state.usersCrypto = action.data
            return state
        case LOAD_TRANSACTIONS:
            state.currentCrypto = action.crypto
            return state
        default:
            return state
    }
}

export default cryptoReducer
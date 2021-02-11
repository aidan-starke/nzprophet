import { SET_CRYPTO } from '../actions'

const prices = { 'ALGO': 1, 'DOGE': 0.9, 'ETH': 2350, 'XRP': 1}
const images = { 'ALGO': './Algorand.png', 'DOGE': './Dogecoin.png', 'ETH': './Ethereum.png', 'XRP': './Ripple.png'}

function setCrypto(state = {'name': '', 'price': 0, 'img': ''}, action) {
    switch (action.type) {
        case SET_CRYPTO:
            return {'name': state.name, 'price': prices[action.name], 'img': images[action.name]}
        default:
            return state
    }
}

export default setCrypto
import { SET_CRYPTO } from '../actions'

const prices = { 'ADA': 1.28, 'ALGO': 1.69, 'DOGE': 0.095857, 'LTC': 257.99, 'XRP': 0.722694}
const invested = { 'ADA': 0,'ALGO': 200, 'DOGE': 200, 'LTC': 200, 'XRP': 400}
const owned = {'ADA': 250, 'ALGO': 102.27108, 'DOGE': 1775.87926461, 'LTC': 0.6858259, 'XRP': 503.143395}
const images = { 'ADA': './Cardano.png', 'ALGO': './Algorand.png', 'DOGE': './Dogecoin.png', 'LTC': './Litecoin.png', 'XRP': './Ripple.png'}

function setCrypto(state = {'name': '', 'price': 0, 'img': ''}, action) {
    switch (action.type) {
        case SET_CRYPTO:
            return {'name': action.name, 'price': prices[action.name], 'invested': invested[action.name], 'owned': owned[action.name], 'img': images[action.name]}
        default:
            return state
    }
}

export default setCrypto
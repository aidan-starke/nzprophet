import { SET_CRYPTO } from '../actions'

const prices = { 'ADA': 1.25, 'ALGO': 1.73, 'DOGE': 0.0925, 'LTC': 253.28, 'XRP': 0.7705}
const values = { 'ADA': 173,'ALGO': 177.09, 'DOGE': 164.20, 'LTC': 173.71, 'XRP': 201.54}
const owned = {'ADA': 138.41937, 'ALGO': 102.27108, 'DOGE': 1775.8793, 'LTC': 0.6858259, 'XRP': 261.57155}
const images = { 'ADA': './Cardano.png', 'ALGO': './Algorand.png', 'DOGE': './Dogecoin.png', 'LTC': './Litecoin.png', 'XRP': './Ripple.png'}

function setCrypto(state = {'name': '', 'price': 0, 'img': ''}, action) {
    switch (action.type) {
        case SET_CRYPTO:
            return {'name': action.name, 'price': prices[action.name], 'value': values[action.name], 'owned': owned[action.name], 'img': images[action.name]}
        default:
            return state
    }
}

export default setCrypto
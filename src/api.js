import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

let baseUrl

if (process.env.NODE_ENV === 'development')
    baseUrl = 'http://localhost:3000'
else if (process.env.NODE_ENV === 'production')
    baseUrl = 'https://nzprophet.herokuapp.com'

export function getUsers() {
    return axios
        .get(`${baseUrl}/api/v1/users`)
        .then(res => res.data)
        .catch(err => console.log(err.message))
}

export function getCrypto(name) {
    return axios
        .get(`${baseUrl}/api/v1/crypto`, {
            params: { name }
        })
        .then(res => res.data)
        .catch(err => console.log(err.message))
}

export function getPrice(crypto) {
    return axios
        .get(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=NZD`, {
            headers: { 'Authorization': `Apikey ${process.env.CRYPTOCOMPARE_API_KEY}` }
        })
        .then(res => res.data)
        .catch(err => console.log(err.message))
}

export function addTrade(data) {
    return axios
        .put(`${baseUrl}/api/v1/crypto/trade`, data)
        .catch(err => console.log(err.message))
}

export function addTradeNewCoin(data) {
    return axios
        .post(`${baseUrl}/api/v1/crypto/trade/new`, data)
        .catch(err => console.log(err.message))
}
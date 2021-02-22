import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const baseUrl = 'http://localhost:3000/api/v1/db'

export function getUsers() {
    return axios
        .get(`${baseUrl}/users`)
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

export function getCrypto(name) {
    return axios
        .get(`${baseUrl}/crypto`, {
            params: { name }
        })
        .then(res => res.data)
        .catch(err => console.log(err.message))
}
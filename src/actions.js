export const CHANGE_PAGE = 'CHANGE_PAGE'
export const REFRESH = 'REFRESH'
export const SET_USERS = 'SET_USERS'
export const SET_USER = 'SET_USER'
export const SET_USERS_CRYPTO = 'SET_USERS_CRYPTO'
export const SET_PROFIT_DATA = 'SET_PROFIT_DATA'
export const LOAD_TRANSACTIONS = 'LOAD_TRANSACTIONS'

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page
    }
}

export function refresh() {
    return {
        type: REFRESH
    }
}

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}

export function setUser(user) {
    return {
        type: SET_USER,
        user
    }
}

export function setUsersCrypto(data) {
    return {
        type: SET_USERS_CRYPTO,
        data: data.data
    }
}

export function setProfitData(data) {
    return {
        type: SET_PROFIT_DATA,
        data
    }
}

export function viewTransactions(crypto) {
    return {
        type: LOAD_TRANSACTIONS,
        crypto
    }
}
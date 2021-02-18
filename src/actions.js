export const SET_CRYPTO = 'SET_CRYPTO'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const REFRESH = 'REFRESH'
export const SET_USER = 'SET_USER'

export function setCrypto(name) {
    return {
        type: SET_CRYPTO,
        name
    }
}

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

export function setUser(user) {
    return {
        type: SET_USER,
        user
    }
}
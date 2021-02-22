export const CHANGE_PAGE = 'CHANGE_PAGE'
export const REFRESH = 'REFRESH'
export const SET_USERS = 'SET_USERS'
export const SET_USER = 'SET_USER'
export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_PROFIT_DATA = 'SET_PROFIT_DATA'

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

export function setUserData({ username, data }) {
    return {
        type: SET_USER_DATA,
        username: username[0].username,
        data
    }
}

export function setProfitData(data) {
    return {
        type: SET_PROFIT_DATA,
        data
    }
}
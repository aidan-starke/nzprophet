export const SET_CRYPTO = 'SET_CRYPTO'
export const CHANGE_PAGE = 'CHANGE_PAGE'

export function setName(name) {
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
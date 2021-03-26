import { SET_USERS, SET_USER } from '../actions'

function userReducer(state = { users: [], user: '', username: '', data: {} }, action) {
    switch (action.type) {
        case SET_USERS:
            for (let i = 0; i < action.users.length; i++) {
                state.users[i] = action.users[i].name
            }
            return state
        case SET_USER:
            state.user = action.user
            return state
        default:
            return state
    }
}

export default userReducer
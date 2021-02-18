import { SET_USER } from '../actions'

const users = [ 'Aidan', 'Bradley' ]

function userReducer(state = {users, user: 'ShowDropdown'}, action) {
    switch (action.type) {
        case SET_USER:
            state.user = action.user
            return state
        default:
            return state
    }
}

export default userReducer
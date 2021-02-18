import { combineReducers } from 'redux'

import crypto from './crypto'
import currentPage from './currentPage'
import users from './users'

const reducers = combineReducers({
    crypto,
    currentPage,
    users
})

export default reducers
import { combineReducers } from 'redux'

import currentPage from './currentPage'
import users from './users'
import crypto from './crypto'

const reducers = combineReducers({
    currentPage,
    users,
    crypto
})

export default reducers
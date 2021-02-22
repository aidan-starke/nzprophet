import { combineReducers } from 'redux'

import currentPage from './currentPage'
import users from './users'

const reducers = combineReducers({
    currentPage,
    users
})

export default reducers
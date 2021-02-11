import { combineReducers } from 'redux'

import crypto from './crypto'
import currentPage from './currentPage'

const reducers = combineReducers({
    crypto,
    currentPage
})

export default reducers
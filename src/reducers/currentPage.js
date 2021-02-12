import { CHANGE_PAGE, REFRESH } from '../actions'

function currentPage (state = 'Home', action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.page
    case REFRESH:
      return 'Home'
    default:
      return state
  }
}

export default currentPage
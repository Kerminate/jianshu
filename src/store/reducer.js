import * as types from './actionTypes'

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SEARCH_FOCUS:
      return { ...state, focused: action.focused }
    case types.SEARCH_BLUR:
      return { ...state, focused: action.focused }
    default:
      return state
  }
}

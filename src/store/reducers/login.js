import { fromJS } from 'immutable'
import * as types from '../actionTypes'

const defaultState = fromJS({
  loginStatus: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_LOGIN:
      return state.set('loginStatus', action.value)
    case types.LOGOUT:
      return state.set('loginStatus', action.value)
    default:
      return state
  }
}

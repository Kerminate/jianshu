import { combineReducers } from 'redux-immutable'
import headerReducer from './header'

const reducer = combineReducers({
  header: headerReducer
})

export default reducer

import { combineReducers } from 'redux-immutable'
import headerReducer from './header'
import homeReducer from './home'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
})

export default reducer
